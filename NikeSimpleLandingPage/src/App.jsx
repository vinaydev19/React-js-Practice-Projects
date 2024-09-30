import "./App.css";
import Hero from "./components/Header/Hero";
import NavBar from "./components/Header/NavBar";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
