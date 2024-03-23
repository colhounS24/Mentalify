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
  src: string;
  id: number;
  matched: boolean;
}

interface Choice {
  src: string;
}

const cardImages: Card[] = [
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
      <h1>Go-Fish</h1>
      <div id="gameContainer">
        <button id="newGame" onClick={shuffleCards}>
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
        <div id="para">
          <p>
            HighScore:{" "}
            {HighScore !== null && HighScore !== 999999 ? HighScore : ""}
          </p>

          <p>Turns: {turns}</p>
        </div>
      </div>
    </div>
  );
}

export default Game;
