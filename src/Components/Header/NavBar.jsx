import React from "react";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-faded justify-content-center">
            <a href="#" className="navbar-brand d-flex w-50 mr-auto">
                Gabriel
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsingNavbar3"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="navbar-collapse collapse w-100"
                id="collapsingNavbar3"
            >
                <ul className="navbar-nav w-100 justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#resume">
                            Résumé
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end" />
            </div>
        </nav>
    );
};
