import React, {useState} from 'react';
import GameScreen from './components/screens/GameScreen';
import HomeScreen from './components/screens/HomeScreen';
import Player from './helpers/Player';

function App() {
  const [screen, setScreen] = useState(1)
  const [player, setPlayer] = useState(new Player("red"))
  const [machine, setMachine] = useState(new Player("blue"))

  const startGame = (newPlayer:Player, newMachine:Player) => {
    setPlayer(newPlayer);
    setMachine(newMachine);
    setScreen(2)
  }

  return (
    <div className="App">
      {screen === 1 && <HomeScreen startGame={startGame} />}
      {screen === 2 && <GameScreen player={player}/> }
      
    </div>
  );
}

export default App;
