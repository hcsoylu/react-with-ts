import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(e, id) => console.log("clicked", e, id)} />
      <Input value="" handleChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
