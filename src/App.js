import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/About";
import ContactUs from "./components/ContactForm";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Route exact path="/Portfolio" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={ContactUs} />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
