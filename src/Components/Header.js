import React from 'react';

export default function Header() {
  return (
    <header id="nav" className="site-header position-fixed text-white bg-dark">
      <nav id="navbar-example2" className="navbar navbar-expand-lg py-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt="image" />
          </a>

          <button className="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <ion-icon name="menu-outline" style={{ fontSize: '30px' }}></ion-icon>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav align-items-center justify-content-end flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link active me-md-4" href="#billboard">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#residence">Properties</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#about-us">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-md-4" href="#help">Contact</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                    aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    {/* Add the dropdown items here */}
                    <li><a href="/" className="dropdown-item">About</a></li>
                    {/* Other dropdown items */}
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-md-4" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
                </li>
                <li className="nav-item">
                  <a className="btn-medium btn btn-primary" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal2">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal content (e.g., login/signup) can go here */}
    </header>
  );
}
