import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-2 fixed-top mb-5">
        <div class="container-fluid">
          <Link class="navbar-brand ms-5 mt-2" to="/">
            <h2>
              <b style={{ fontFamily: "Delicious Handrawn", color: "brown" }}>
                FRASER
              </b>
            </h2>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav mx-auto mb-2 mb-lg-0 "
              style={{ alignItems: "center", alignContent: "center" }}
            >
              <li class="nav-item px-2">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ fontFamily: "Roboto Condensed" }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/shop"
                  style={{ fontFamily: "Roboto Condensed" }}
                >
                  Shop
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/page"
                  style={{ fontFamily: "Roboto Condensed" }}
                >
                  Pages
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/blog"
                  style={{ fontFamily: "Roboto Condensed" }}
                >
                  Cart
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/contact"
                  style={{ fontFamily: "Roboto Condensed" }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div class="d-flex align-middle">
              <ul class="nav mx-auto mb-2 mb-lg-0 ">
                <li class="nav-item ">
                  <span class="mx-3 me-4 " aria-current="page" href="#">
                    <i class="bi bi-search">
                    </i>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="me-4" aria-current="page" href="#">
                    <i class="bi bi-person-circle">
                    </i>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="me-4" aria-current="page" href="#">
                    <i class="bi bi-shuffle">
                    <span class="position-absolute top-1 start-1 translate-middle  badge   rounded-pill bg-dark " >
                        0
                      </span>
                    </i>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="me-4" aria-current="page" href="#">
                    <i class="bi bi-heart">
                    <span class="position-absolute top-10 start-10 translate-middle  badge   rounded-pill bg-dark">
                        0
                      </span>
                    </i>
                  </span>
                </li>
                <li class="nav-item">
                  <span class="me-4" aria-current="page" href="#">
                    <i class="bi bi-bag-plus">
                    <span class="position-absolute top-10 start-10 translate-middle  badge   rounded-pill bg-dark">
                        0
                      </span>
                    </i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
