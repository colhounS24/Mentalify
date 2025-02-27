import { useEffect, useState } from "react";
import "../Stylesheets/GoFish.css";
import SingleCard from "./SingleCard";

import card1 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_1.png";
import card2 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_2.png";
import card3 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_3.png";
import card4 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_4.png";
import card5 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_5.png";
import card6 from "../assets/—Pngtree—fruit_game_icon_png_8362133-transformed_6.png";

const apiUrl = import.meta.env.BASE_URL || "http://localhost:5000";

var checker = 0;

interface Card {
  //defining types
  src: string;
  id: number;
  matched: boolean;
}

interface Choice {
  src: string;
}

const cardImages: Card[] = [
  //storing cards in array using predefined types
  { src: card1, id: 1, matched: false },
  { src: card2, id: 2, matched: false },
  { src: card3, id: 3, matched: false },
  { src: card4, id: 4, matched: false },
  { src: card5, id: 5, matched: false },
  { src: card6, id: 6, matched: false },
];

function Game() {
  const [HighScore, setHighScore] = useState<number | null>(null);
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Choice | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Choice | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const checkHighScore = async () => {
    try {
      console.log(checker);
      if (checker === 6) {
        const highscore = turns;

        const userString = localStorage.getItem("user");
        if (userString === null) {
          throw new Error("User not found in localStorage");
        }
        const user = JSON.parse(userString);
        console;

        const response = await fetch(`${apiUrl}/api/highscore`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ highScore: highscore, email: user?.email }), // Assuming user object has an email property
        });

        if (response.ok) {
          console.log("Success");
        } else {
          console.log("Something went wrong");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadHighScore = async () => {
    try {
      const userString = localStorage.getItem("user");

      if (userString === null) {
        throw new Error("User not found in localStorage");
      }

      const user = JSON.parse(userString);

      const response = await fetch(`${apiUrl}/api/gethighscore`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }), // Assuming user object has an email property
      });

      if (response.ok) {
        const responseData = await response.json();
        const highScore = responseData.highScore;

        setHighScore(highScore);
      } else {
        console.error("Failed to fetch high score:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const shuffleCards = async () => {
    await loadHighScore();

    await checkHighScore();
    checker = 0;

    const shuffledCards: Card[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) //shuffling
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);

    await loadHighScore();
  };

  //handling a click
  const handleChoice = (card: Card) => {
    if (disabled) return;

    if (!choiceOne) {
      setChoiceOne(card);
    } else {
      setChoiceTwo(card);
    }

    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 500);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        checker = checker + 1;
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div id="wholeContainer">
      <div
        className="rounded"
        style={{
          background:
            "linear-gradient(to bottom, rgb(117, 221, 235), rgb(205, 242, 248))",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
          margin: "0 auto",
          overflow: "auto",
          marginTop: "3vmax",
          marginBottom: "2vmax",
          boxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          WebkitBoxShadow: "10px 10px 5px 0px rgba(0, 0, 0,0.55)",
          width: "75%",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "8vmin" }}>Match The Cards</h1>
        <p style={{ fontSize: "3vmin" }}>
          Card-matching games have been clinically proven to reduce the rate of
          cognitive decline and to improve memory capabilities. The aim of this
          game is to match pairs of cards until all of the cards have been
          sorted. Each move you take will count as a "turn", the aim is to
          complete the game in as few turns as possible. When you are ready to
          begin, press the "New Game" button.<br></br>
          <strong>Best of luck!</strong>
        </p>
      </div>
      <div id="gameContainer">
        <button
          id="newGame"
          onClick={shuffleCards}
          style={{ fontSize: "5vmin" }}
        >
          New Game
        </button>

        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            ></SingleCard>
          ))}
        </div>
      </div>
      <div id="para">
        <p style={{ fontSize: "5vmin" }}>
          HighScore:{" "}
          {HighScore !== null && HighScore !== 999999 ? HighScore : ""}
        </p>

        <p style={{ fontSize: "5vmin" }}>Turns: {turns}</p>
      </div>
    </div>
  );
}

export default Game;
