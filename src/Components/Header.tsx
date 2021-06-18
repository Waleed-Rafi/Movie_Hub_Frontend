import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          MTS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/tickets/all" className="nav-link">
                Tickets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers/all" className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/payments/all" className="nav-link">
                Payments
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/movie/create" className="dropdown-item">
                    Movie
                  </Link>
                </li>
                <li>
                  <Link to="/ticket/create" className="dropdown-item">
                    Ticket
                  </Link>
                </li>
                <li>
                  <Link to="/customer/create" className="dropdown-item">
                    Customer
                  </Link>
                </li>
                <li>
                  <Link to="/payment/create" className="dropdown-item">
                    Payment
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
