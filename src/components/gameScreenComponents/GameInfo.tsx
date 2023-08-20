import { FC, useEffect, useState } from "react";
import { GameData, incrementLevel, setGameState } from "../../redux/gameData";
import Score from "./Score";
import Timer from "./Timer";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setPlayerScore } from "../../redux/player";
import { setMachineScore } from "../../redux/machine";
import { setScreen } from "../../redux/screen";
import { Howl } from "howler";

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
      setNextLevelModal(false)
    }
  }, [nextLevelModal]);

  const endGame = () => {
    endAudio.play();
    dispatch(setScreen(3));
    dispatch(incrementLevel());
  };

  return (
    <article className="container-fluid">
      <div className="row">
      <div className="col s6">
        <span id="level-text" className="yellow-text">Level: {level}</span>
      </div>
      <Timer
            levelData={levelData}
            lastLevel={lastLevel}
            countDown={countDown}
            playerPoints={player.totalPoints}
            machinePoints={machine.totalPoints}
          />
      </div>
      <div className="row">
          <Score score={player.totalPoints} isPlayer={true} />
          <Score score={machine.totalPoints} isPlayer={false} />    

          {nextLevelModal && (
            <div className="modal">
              <div className="container-fluid help">
              <div
                className="container yellow"
              >
                 <article className="center-align" style={{ "padding":"8px" }}>
                    <header>
                      <h3>You Have Won!</h3>
                    </header>
                    <p>
                    You have won this level. Move on to the next level!
                    </p>
                    <button onClick={() => setNextLevelModal(false)}
                 className="btn btn-yellow">
                      Next Level
                    </button>
                  </article>
                </div>
              </div>
            </div>
          )}
        </div>
    </article>
  );
};

export default GameInfo;
