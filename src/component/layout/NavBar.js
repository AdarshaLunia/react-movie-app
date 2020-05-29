import React from 'react'

function NavBar() {
    return (
        <div>
          <nav className="navbar navbar-light bg-dark mb-5">
            <div className="container">
              <div className="navbar-header">
              </div>
              <ul className="navbar-nav ml-auto text-light d-inline-block">
                <li className="nav-item d-inline-block mr-4">
                  <i className="fab fa-apple fa-5x" id="imdb-logo" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
}

export default NavBar
