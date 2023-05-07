import { FC, useEffect, useState } from "react";
import { GameData, incrementLevel, setGameState } from "../../redux/gameData";
import Logo from "../Logo";
import Score from "./Score";
import Timer from "./Timer";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setPlayerScore } from "../../redux/player";
import { setMachineScore } from "../../redux/machine";
import { setScreen } from "../../redux/screen";
import { Howl } from "howler";
import "../../modal.css";

interface gameInfo {
  gameData: GameData;
}

const GameInfo: FC<gameInfo> = ({ gameData }) => {
  const [nextLevelModal, setNextLevelModal] = useState(false);
  const { currentLevel, gameSettings, gameState } = gameData;
  const { lastLevel, countDown } = gameSettings;
  const levelData = gameData.levels[currentLevel];
  const { level } = levelData;
  const player = useAppSelector((state) => state.player);
  const { endAudioPath } = useAppSelector((state) => state.audio);
  const machine = useAppSelector((state) => state.machine);
  const dispatch = useAppDispatch();

  const endAudio = new Howl({
    src: [endAudioPath],
    preload: true,
    volume: 0.15,
  });

  //called at the end of each level
  useEffect(() => {
    if (gameState === "end") {
      if (
        player.totalPoints >= machine.totalPoints
        // && player.totalPoints >= levelData.grade
      ) {
        //change this back to lastLevel
        if (level === 3) endGame();
        setNextLevelModal(true);
        endAudio.play();
      } else {
        dispatch(setScreen(4));
        dispatch(setGameState("start"));
      }
    }

    return () => setNextLevelModal(false);
  }, [gameState]);

  useEffect(() => {
    if (!nextLevelModal && gameState === "end") {
      dispatch(incrementLevel());
      dispatch(setPlayerScore(0));
      dispatch(setMachineScore(0));
      dispatch(setGameState("start"));
      // setNextLevelModal(false)
    }
  }, [nextLevelModal]);

  const endGame = () => {
    endAudio.play();
    dispatch(setScreen(3));
    dispatch(incrementLevel());
  };

  return (
    <article>
      <header>
        <Logo />
      </header>
      <header className="container-fluid">
        <div className="dashboard row">
          <Timer
            levelData={levelData}
            lastLevel={lastLevel}
            countDown={countDown}
            playerPoints={player.totalPoints}
            machinePoints={machine.totalPoints}
          />
          <Score score={player.totalPoints} isPlayer={true} />
          <Score score={machine.totalPoints} isPlayer={false} />
          <p className="level-text">Level: {level}</p>

          {nextLevelModal && (
            <div className="modal">
              <div
                onClick={() => setNextLevelModal(false)}
                className="modal-content"
              >
                <p>
                  You won this level! <br /> Click to proceed
                </p>
              </div>
            </div>
          )}
        </div>
      </header>
    </article>
  );
};

export default GameInfo;
