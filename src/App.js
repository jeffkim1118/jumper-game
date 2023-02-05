import { useState } from 'react';
import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform';
import Score from './components/Score/score';

function App() {
  const [birdLeft, setBirdLeft] = useState(1000);
  const [changeAmount, setChangeAmount] = useState(-5.5);

  // const heights = [900, 800, 700, 600]
  // const lefts = [400, 500, 300, 900]
  
  const platformPosition = [{900:400},{800:500},{700:300},{600:900}];
  Object.keys(platformPosition)

  const handleBird = (birdLeftCoordinate) => {
    if (birdLeftCoordinate < 300) {
      setChangeAmount(+5.5);
    } else {
      setChangeAmount(-5.5);
    }
  }

  const handlePlatform = () => {
    platformPosition.map((position) => {
      return (
        <Platform top={Object.keys(position)} left={Object.values(position)}/>
      )
    })
  }
  handlePlatform()
 

  return (
    <div className="App">
      <Player />
      <Bird left={birdLeft} top={300} handleBird={handleBird} changeAmount={changeAmount} />
      <Plane />
      {handlePlatform()}
      <Score />
    </div>
  );
}

export default App;
