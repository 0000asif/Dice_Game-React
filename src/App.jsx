import { useState } from 'react';
import './App.css';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

function App() {
  const [isGamePlay, SetisGamePlay] = useState(false);

  const handleStartGame = () => {
    SetisGamePlay(prev => !prev);
  };

  return (
    <>{isGamePlay ? <GamePlay /> : <StartGame toogle={handleStartGame} />}</>
  );
}

export default App;
