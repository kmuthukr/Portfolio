import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Techbag from "./components/Techbag/Techbag";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Feedback from "./components/Feedback/Feedback";
import Thankyou from "./components/Feedback/Thankyou";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Feedback from "react-bootstrap/esm/Feedback";
import './style.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/techbag" element={<Techbag />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thankyou" element={<Thankyou />} />

         {/*  <Route path="*" element={<Navigate to="/"/>} />*/}
        </Routes>
         <Footer className="for_footer"/>
      </div>
    </Router>
  );
}

export default App;
