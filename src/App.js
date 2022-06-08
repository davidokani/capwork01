import "./App.css";
import Signinform from "./components/signin/Signinform";
import Regform from "./components/registration/Regform";
import Landing from "./components/langingpage/Landing";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">

      <Landing />
      <Navbar />
      <Signinform />
      <Regform />

    </div>

  )
};

export default App;
