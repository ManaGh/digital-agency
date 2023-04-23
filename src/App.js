import logo from "./logo.svg";
import "./scss/App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
    </div>
  );
}

export default App;
