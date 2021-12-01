import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactForm";
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
        <ContactUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
