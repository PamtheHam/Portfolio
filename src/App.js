import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NameCard from "./components/NameCard";
import PortfolioCards from "./components/PortfolioCards";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <NameCard />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "Projects") {
      return <PortfolioCards />;
    }
    if (currentPage === "Education") {
      return <Education />;
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
