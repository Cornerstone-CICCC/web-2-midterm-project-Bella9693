import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../img/logoLight.png";
import logoDark from "../img/logoDark.png";
import logoSmall from "../img/M_mobile.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [keyword, setKeyword] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 로고 결정
  const logoToShow =
    windowWidth < 791 ? logoSmall : darkMode ? logoDark : logoLight;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
      navigate(`/search?q=${keyword}`);
      setKeyword("");
      setShowSearch(false);
    }
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/">
          <img className="logo" src={logoToShow} alt="logo" />
        </Link>

        <div className="header-menu">
          <ul>
            <li>
              <Link to="/movie">Movies</Link>
            </li>
            <li>
              <Link to="/tv">Series</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li
              className="active search-btn"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <svg
                className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </li>
          </ul>

          {showSearch && (
            <form
              onSubmit={handleSubmit}
              className={showSearch ? "show-search" : ""}
            >
              <input
                type="search"
                id="search"
                autoComplete="off"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search..."
              />
              <input type="submit" id="submit" value="Search" />
            </form>
          )}
        </div>

        <label className="toggle">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
