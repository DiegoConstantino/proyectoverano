import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login";
import Logout from "../Logout"

function Menu() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Bos Taurus App
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                INICIO
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/nose">
                CONOCENOS
              </Link>
            </li>
            
            {isAuthenticated ? (
              <>
              <li class="nav-item">
              <Link class="nav-link" to="/Formulario">
                REGISTRO
              </Link>
            </li>
                <li class="nav-item">
                  <p>
                   <Logout></Logout>
                  </p>
                </li>
              </>
            ) : (
              <li class="nav-item">
                <p>
                  <Login></Login>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
