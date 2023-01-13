import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform';
import Score from './components/Score/score';

function App() {
  return (
    <div className="App">
      <Player />
      <Bird />
      <Plane />
      <Platform />
      <Score />
    </div>
  );
}

export default App;
