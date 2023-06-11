import { resetLevel } from "../../redux/gameData";
import { setMachineScore } from "../../redux/machine";
import { setPlayerScore } from "../../redux/player";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { setScreen } from "../../redux/screen";
import Button from "../Button";
import Logo from "../Logo";
import Versus from "../Versus";


const GameOverScreen = () => {


    const player = useAppSelector((state) => state.player)
    const machine = useAppSelector((state) => state.machine)


    const dispatch = useAppDispatch()

    const restartGame = () => {


        dispatch(setPlayerScore(0))
        dispatch(setMachineScore(0))
        dispatch(resetLevel())
        dispatch(setScreen(1))
    }

    return (<>
        <section className="content-body leaderboard">
            <header className="content-top text-center">
                <Logo classNames="margin-auto-x" />
            </header>
            <article className="content-bottom">
                <header className="container">
                    <h1 className="center-align heading silom">Game Over!</h1>
                </header>
                <div className="container">
                    <div className="row">
                        <Versus colorPicked={player.chosenColor} machineColor={machine.chosenColor} playerScore={player.totalGamePoints} machineScore={machine.totalGamePoints} />
                    </div>
                </div>
            </article>
        </section>
        <aside className="content-footer">
            <span onClick={restartGame}>
                <Button className="btn btn-larger pink" text='Play Again' />
            </span>
        </aside>
        </>
    );
};

export default GameOverScreen;
