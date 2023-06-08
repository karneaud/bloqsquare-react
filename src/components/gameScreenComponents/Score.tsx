import { FC } from "react";
interface scoreProps {
  score: number;
  isPlayer: boolean;
}

const Score: FC<scoreProps> = ({ score, isPlayer }) => {
  return (
    <div className="col s6">
      <span className={`points ${isPlayer ? "yellow-text" : "pink-text"} silom`}>{isPlayer ? "You" : "A.I."}: {score}pts
        </span>
    </div>
  );
};

export default Score;
