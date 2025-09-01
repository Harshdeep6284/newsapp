import React from "react";

const Navbar = ({ setCategory, currentCategory }) => {
  const categories = [
    "Home",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Brand Name */}
        <a className="navbar-brand" href="#">
          News
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
  <li className="nav-item" key={cat}>
    <button
      className="nav-link btn btn-link text-white"
      onClick={() => setCategory(cat.toLowerCase())}
    >
      {cat}
                  </button>
                </li>
              
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;