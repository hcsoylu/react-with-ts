import "./App.css";
import List from "./components/generics/List";

function App() {
  return (
    <div className="App">
      <List
        items={["batman", "superman", "spiderman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
