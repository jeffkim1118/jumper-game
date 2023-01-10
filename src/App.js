import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';

function App() {
  return (
    <div className="App">
      <Player />
      <Bird />
      <Plane />
    </div>
  );
}

export default App;
