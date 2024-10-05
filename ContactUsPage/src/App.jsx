import "./App.css";
import ContactForm from "./components/form/ContactForm";
import ContactHeader from "./components/form/ContactHeader";
import NavBar from "./components/header/NavBar";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <ContactHeader />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
