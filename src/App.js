import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Message from "./components/Message";
import Lifehack from "./components/Lifehacks";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <User name="Sajjad Hossain" />
      {/* 
      <div>
        <Message />
      </div>

      <div>
        <Lifehack />
      </div> */}

      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
