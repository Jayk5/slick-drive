import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {

  const signOutHandler = (e) => {
    e.preventDefault();
    setIsLogged(false);
    console.log(isLogged);
    localStorage.removeItem("token");
  };

  const user = localStorage.getItem("token")? true : false;
  const [isLogged, setIsLogged] = useState(user);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>
          Slick Drive⚡
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {!isLogged ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={(e) => {
                    signOutHandler(e);
                  }}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
