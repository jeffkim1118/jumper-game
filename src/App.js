import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform'

function App() {
  const numOfPlatform = [400,500,600,700]
  return (
    <div className="App">
      <Player />
      <Bird />
      <Plane />
      {numOfPlatform.map(i => {
        return <Platform/>
      })}
    </div>
  );
}

export default App;
