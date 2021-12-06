import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameCard from "./components/NameCard";
import PortfolioCards from "./components/PortfolioCards";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <NameCard />
        <PortfolioCards />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
