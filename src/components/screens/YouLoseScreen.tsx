import React from "react";
import { resetLevel } from "../../redux/gameData";
import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";
import { useAppSelector, useAppDispatch } from "../../redux/redux-hooks";
import { setScreen } from "../../redux/screen";
import "../../loseScreen.css";
import ModalComponent from "../ModalComponent";

const YouLoseScreen = () => {
  const player = useAppSelector((state) => state.player);
  const gameData = useAppSelector((state) => state.gameData);
  const { levels, currentLevel } = gameData;
  const currentLevelData = levels[currentLevel];
  const dispatch = useAppDispatch();

  const restartGame = () => {
    dispatch(setPlayerScore(0));
    dispatch(setMachineScore(0));
    dispatch(resetLevel());
    dispatch(setScreen(1));
  };

  return (
    <div className="lose-section">
      <div className="loss-box">
        <ModalComponent>
          <article>
            <header>
              <h3>You Lose!</h3>
            </header>

            <h2>Your Score: {player.totalPoints}</h2>

            <button className="btn-larger fit-80 pink" onClick={restartGame}>
              Next
            </button>
          </article>
        </ModalComponent>
      </div>
    </div>
  );
};

export default YouLoseScreen;
