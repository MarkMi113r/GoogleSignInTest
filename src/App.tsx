import "./App.css";
import Timer from "./components/Countdown/Timer";
import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          MessageUniverse
          <br />
          <span className={"cs"}>Coming Soon</span>
        </h1>
        <Timer />
        {/* <Optin /> */}
        <Preloader />
      </div>
    </div>
  );
}
export default App;
