import { memo, FC, useEffect, useRef, useState } from "react";
// import Countdown from "react-countdown";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { LevelData, setGameState } from "../../redux/gameData";
import { Howl } from "howler";
import { useRafCounter } from "../../helpers/useRafCounter";


interface timer {
    playerPoints: number
    machinePoints: number
    levelData: LevelData
    lastLevel: number
    countDown: number
}

function areEqual(prevProps: timer, nextProps: timer) {
    {
        return prevProps.levelData.level === nextProps.levelData.level
    }
}

const Timer: FC<timer> = ({ levelData, countDown }) => {
    const [count, setCount] = useState(countDown)
    const { timeSfxPath } = useAppSelector((state) => state.audio);

    const bgMusic = new Howl({
        src: [timeSfxPath],
        preload: true,
        volume: 0.15,
    });


    const { gameState } = useAppSelector(state => state.gameData)
    const dispatch = useAppDispatch();
    const { level } = levelData

    // @ts-ignore
    useRafCounter(deltaTime => {
        if (gameState === "start") {
            setCount(prevCount => (prevCount - deltaTime * 0.001) % 100)
        }

    })




    useEffect(() => {

        if (gameState === "end") {
            setCount(countDown)
        }



        if (count <= 0) {
            dispatch(setGameState("end"))
            setCount(countDown)


        }


    }, [level, gameState, count]);



    function getTimeString() {
        const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, count * 1000))
        const minutes = d.getUTCMinutes()
        const seconds = d.getUTCSeconds()
        const milliseconds = d.getUTCMilliseconds()

        return `${minutes < 10 ? "0" + minutes : minutes}  :
                 ${seconds < 10 ? "0" + seconds : seconds} :
                ${milliseconds < 100
                ? "0".concat(Math.round(milliseconds / 10).toString())
                : Math.round(milliseconds / 10)} `
    }


    return (
        <div className="col s12">
            <div className="clock pink-text silom">
                {" "}
                {getTimeString()}
            </div>
        </div>
    );
};

export default memo(Timer, areEqual);
// export default Timer