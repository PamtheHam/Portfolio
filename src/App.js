import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameCard from "./components/NameCard";
import AboutMe from "./components/About";
import PortfolioCards from "./components/PortfolioCards";
import ContactUs from "./components/ContactForm";

function App() {
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Route exact path="/" component={NameCard} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={PortfolioCards} />
          <Route exact path="/contact" component={ContactUs} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
