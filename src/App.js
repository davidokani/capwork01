import "./App.css";
import Signinform from "./components/signin/Signinform";
import Regform from "./components/registration/Regform";
import Landing from "./components/langingpage/Landing";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Landing />
      <Footer />
      <Signinform />
      <Regform />

    </div>

  )
};

export default App;
