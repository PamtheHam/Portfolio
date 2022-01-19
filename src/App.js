import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameCard from "./components/NameCard";
import PortfolioCards from "./components/PortfolioCards";
import ContactUs from "./components/ContactForm";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <NameCard />;
    }
    if (currentPage === "About") {
      return <NameCard />;
    }
    if (currentPage === "Projects") {
      return <PortfolioCards />;
    }
    if (currentPage === "Contact") {
      return <ContactUs />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main>{renderPage()}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
