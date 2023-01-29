import { useState } from 'react';
import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform';
import Score from './components/Score/score';

function App() {
  const [birdLeft, setBirdLeft] = useState(800);
  const [changeAmount, setChangeAmount] = useState(-5.5);

  
  const handleBird = (birdLeftCoordinate) => {

    if (birdLeftCoordinate < 200) {
      setChangeAmount(+5.5);
    } else {
      setChangeAmount(-5.5);
      console.log('HERE');
    }
  }
 
  // console.log(platformPosition.heights.map(height => console.log(height)))

  return (
    <div className="App">
      <Player />
      <Bird left={birdLeft} top={300} handleBird={handleBird} changeAmount={changeAmount} />
      <Plane />
      <Platform />
      <Score />
    </div>
  );
}

export default App;
