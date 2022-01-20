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
          <Route path="/" element={<NameCard />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<PortfolioCards />} />
          <Route path="/contact" element={<ContactUs />} />
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
