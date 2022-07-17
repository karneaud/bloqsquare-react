import React, { FC } from "react";
import Logo from "./Logo";
import Timer from "./Timer";

interface gameInfoProps {
  score: number;
  gameOver: Function;
}

const GameInfo: FC<gameInfoProps> = ({ score, gameOver }) => {
  return (
    <article>
      <header>
        <Logo />
      </header>

      <header className="container-fluid">
        <div className="dashboard row">
          <Timer gameOver={gameOver} />
          <div className="center-align col s12">
            <div className="points yellow z-depth-2">
              <div>
                <span id="points">{score}</span>pts.
              </div>
            </div>
          </div>
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
