import "./App.css";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status={"loading"} />
      <Oscar>
        <Heading>Oscar goes to Sabri !</Heading>
      </Oscar>
      <Greet name="Can" isLoggedIn={true} />
    </div>
  );
}

export default App;
