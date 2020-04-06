import React from 'react';
import Container from '../Container';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Navbar() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link
                    to="/"
                    className="navbar-brand"
                >
                    Employee Directory
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    location.pathname === "/"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/directory"
                                className={
                                    location.pathname === "/directory"
                                        ? "nav-link active"
                                        : "nav-link"
                                }
                            >
                                Directory
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;