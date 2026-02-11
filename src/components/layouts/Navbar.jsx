import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("themeMode") === "dark"
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // 🌙 Dark Mode Toggle with persistence & icon animation
  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("themeMode", newTheme);
    setDarkMode(!darkMode);

    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.style.transform = "rotate(360deg)";
      setTimeout(() => {
        themeIcon.className = !darkMode ? "bi bi-sun" : "bi bi-moon";
        themeIcon.style.transform = "rotate(0deg)";
      }, 300);
    }
  };

  // Apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("themeMode") || "light";
    const isDark = savedTheme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    document.body.classList.toggle("bg-gray-900", isDark);
    document.body.classList.toggle("text-gray-100", isDark);
    document.body.classList.toggle("bg-white", !isDark);
    document.body.classList.toggle("text-gray-800", !isDark);

    setDarkMode(isDark);
  }, []);

  // Smooth transition whenever darkMode changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("text-gray-100", darkMode);
    document.body.classList.toggle("bg-white", !darkMode);
    document.body.classList.toggle("text-gray-800", !darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2 text-xs uppercase tracking-widest">
        FREE SHIPPING ON ALL ORDERS ABOVE 3500
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className="navbar border-bottom py-3"
        style={{ zIndex: 1100, position: "relative", transition: "background-color 0.3s, color 0.3s" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Brand */}
          <Link
            to="/"
            className="navbar-brand fw-bold mx-3"
            style={{
              fontFamily: "serif",
              letterSpacing: "4px",
              fontSize: "32px",
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000",
              transition: "color 0.3s"
            }}
          >
            ALZA HMZA
          </Link>

          {/* Search – Desktop only */}
          <div className="d-none d-md-flex mx-auto w-50">
            <input
              className="form-control border rounded-pill px-4"
              type="search"
              placeholder="Search for products"
              style={{
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#000",
                borderColor: darkMode ? "#444" : "#ced4da",
                transition: "all 0.3s"
              }}
            />
          </div>

          {/* Right Icons */}
          <div className="d-flex align-items-center me-3">
            {user ? (
              <button
                onClick={logout}
                className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"} mx-2`}
              >
                LOGOUT
              </button>
            ) : (
              <Link to="/login" className="me-3 fs-5" style={{ color: darkMode ? "#fff" : "#000", transition: "color 0.3s" }}>
                <i className="bi bi-person"></i>
              </Link>
            )}

            {/* Hamburger – Mobile only */}
            <button
              className="navbar-toggler d-md-none border-0 mx-2"
              type="button"
              onClick={toggleSidebar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* 🌙 Dark Mode Toggle */}
            <button
              id="themeToggle"
              onClick={toggleDarkMode}
              className="border-0 bg-transparent fs-6"
            >
              <i
                id="themeIcon"
                className={darkMode ? "bi bi-sun" : "bi bi-moon"}
                style={{ color: darkMode ? "#fff" : "#000", transition: "color 0.3s, transform 0.3s" }}
              ></i>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= LAPTOP CATEGORY MENU ================= */}
      <nav className="navbar navbar-expand-lg border-bottom py-2 d-none d-lg-block">
        <div className="container justify-content-center">
          <ul
            className="navbar-nav text-uppercase fw-semibold text-center"
            style={{ fontSize: "12px" }}
          >
            {["HOME","NEW IN","ROZMARA WINTER VOL. I","ABOUT","CREATE ITEM","VIEW ALL ITEMS","CONTACTS"].map((item, idx) => (
              <li key={idx} className="nav-item mx-3">
                <Link
                  className="nav-link"
                  to={
                    item === "HOME" ? "/" :
                    item === "NEW IN" ? "/new-in" :
                    item === "ROZMARA WINTER VOL. I" ? "/rozmara" :
                    item === "ABOUT" ? "/about" :
                    item === "CREATE ITEM" ? "/create-item" :
                    item === "VIEW ALL ITEMS" ? "/view-all-items" :
                    "/contact"
                  }
                  style={{
                    color: darkMode ? "#fff" : (item === "HOME" ? "red" : "#000"),
                    transition: "color 0.3s"
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={toggleSidebar}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1200,
              transition: "background-color 0.3s"
            }}
          />

          {/* Sidebar */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "260px",
              backgroundColor: darkMode ? "#1e1e1e" : "#fff",
              color: darkMode ? "#fff" : "#000",
              zIndex: 1300,
              padding: "1rem",
              overflowY: "auto",
              transition: "all 0.3s"
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold">MENU</h5>
              <button className="btn-close" onClick={toggleSidebar}></button>
            </div>

            <ul className="list-unstyled text-uppercase fw-semibold" style={{ fontSize: "13px" }}>
              {["HOME","NEW IN","ROZMARA WINTER VOL. I","ABOUT","CREATE ITEM","VIEW ALL ITEMS","CONTACTS"].map((item, idx) => (
                <li key={idx} className="mb-3">
                  <Link
                    to={
                      item === "HOME" ? "/" :
                      item === "NEW IN" ? "/new-in" :
                      item === "ROZMARA WINTER VOL. I" ? "/rozmara" :
                      item === "ABOUT" ? "/about" :
                      item === "CREATE ITEM" ? "/create-item" :
                      item === "VIEW ALL ITEMS" ? "/view-all-items" :
                      "/contact"
                    }
                    onClick={toggleSidebar}
                    style={{ color: darkMode ? "#fff" : "#000", transition: "color 0.3s" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
