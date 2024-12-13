import { NavLink } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';

export default function Navbar({ children }) {
  const { isGuest, login, logout } = useUserContext();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          {children}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              {isGuest ? (
                <a href="javascript:void(0)" className="nav-link" onClick={() => login()}>
                  Login
                </a>
              ) : (
                <a href="javascript:void(0)" className="nav-link" onClick={() => logout()}>
                  logout
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
