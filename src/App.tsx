import "./App.css";

import RandomNumber from "./components/restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={5} isPositive={true} />
    </div>
  );
}

export default App;
