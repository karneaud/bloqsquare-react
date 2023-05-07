import { FC } from "react";
interface scoreProps {
  score: number;
  isPlayer: boolean;
}

const Score: FC<scoreProps> = ({ score, isPlayer }) => {
  return (
    <div className="center-align col s12">
      <div className={`points ${isPlayer ? "yellow-text" : "pink-text"} silom`}>
        <div>
          <span id="points">
            {isPlayer ? "Player" : "Computer"}: {score}pts
          </span>
        </div>
      </div>
    </div>
  );
};

export default Score;
