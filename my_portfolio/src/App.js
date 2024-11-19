// @ts-nocheck
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
      <BrowserRouter basename="/ariekh33">
        <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
