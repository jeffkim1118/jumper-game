import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform';
import Score from './components/Score/score';

function App() {
  // const heights = [400, 600, 800, 1000]
  // const lefts = [400, 300, 500, 600]

  const platformPosition = {400:400, 600:300, 800:500, 1000:600}
  console.log(Object.keys(platformPosition)).map(key => key)
  return (
    <div className="App">
      <Player />
      <Bird />
      <Plane />
      <Platform platformPosition={platformPosition}/>
      <Score />
    </div>
  );
}

export default App;
