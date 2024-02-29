import "../Stylesheets/card.css";
import cover from "../assets/pattern_herringbone-8_1_2_0-0_0_1__ffffff_40c3f7.png";

interface CardProps {
  card: {
    src: string;
    id: number;
  };
  handleChoice: Function;
  flipped: boolean;
  disabled: boolean;
}

function SingleCard({ card, handleChoice, flipped, disabled }: CardProps) {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front"></img>
        <img
          src={cover}
          className="back"
          alt="card-back"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
}

export default SingleCard;
