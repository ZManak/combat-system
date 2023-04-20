import "./App.css";
import Engine from "./components/Engine/Engine";
import StartMenu from "./components/StartMenu/StartMenu";
import Ending from "./components/Ending/Ending";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StartMenu />
        <Engine />
        <Ending />
      </header>
    </div>
  );
}

export default App;
