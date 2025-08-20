import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Upcoming from "./pages/Upcoming";
import Footer from "./pages/Footer";
import Top from "./pages/Top";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "root-wrap dark" : "root-wrap"}>
      <BrowserRouter>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Home />
          <Trending />
          <Top />
          <Upcoming />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
