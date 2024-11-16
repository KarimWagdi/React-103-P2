import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player startPlayerName={'Player 1'} symbol={"X"}/>
          <Player startPlayerName={'Player 2'} symbol={"O"}/>
        </ol>
        <GameBoard/>
      </div>
    </>
  )
}

export default App
