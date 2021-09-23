import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Eric",
    last: "Clapton",
  };

  const personList = [
    {
      first: "Eric",
      last: "Clapton",
    },
    {
      first: "Jimi",
      last: "Hendrix",
    },
    {
      first: "John",
      last: "Mayer",
    },
  ];

  return (
    <div className="App">
      <Greet name="Huseyin Can!" messageCount={5} isLoggedIn={false} />
      <Person personName={personName} />
      <PersonList personList={personList} />
    </div>
  );
}

export default App;
