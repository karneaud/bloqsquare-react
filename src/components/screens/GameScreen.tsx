import { useAppSelector } from "../../redux/redux-hooks";
import GameBoard2 from '../gameScreenComponents/GameBoard'
import GameInfo from '../gameScreenComponents/GameInfo'
import Logo from "../Logo";

const GameScreen = () => {
    const gameData = useAppSelector((state) => state.gameData);




    return (<>
        <section className='game content-body'>
            <header className="content-top text-center">
            <Logo
                classNames="margin-auto-x"
            />
        </header>
        <article className="content-bottom">
            <GameBoard2 gameData={gameData} />
        </article>
        </section>
        <aside className="content-footer">
            <GameInfo gameData={gameData} />
        </aside>
       </>
    )
}

export default GameScreen