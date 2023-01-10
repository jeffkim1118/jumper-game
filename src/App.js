import './App.css';
import Player from './components/character/player';
import Bird from './components/obstacles/bird';
import Plane from './components/obstacles/plane';
import Platform from './components/platform/platform'

function App() {
  const heightsOfPlatform = [400,500,600,700]
  const dataComp = heightsOfPlatform.map((height) => {
    return (
      <Platform key={height} />
    )
  })

  return (
    <div className="App">
      <Player />
      <Bird />
      <Plane />
      {dataComp}
    </div>
  );
}

export default App;
