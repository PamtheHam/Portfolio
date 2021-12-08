import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameCard from "./components/NameCard";
import PortfolioCards from "./components/PortfolioCards";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <NameCard />
        <Skills />
        <PortfolioCards />
        <Education />
      </main>
      <footer className="main">
        <Footer />
      </footer>
    </>
  );
}

export default App;
