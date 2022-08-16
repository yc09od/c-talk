import {Link} from "react-router-dom";
import React from "react"

class AppNav extends React.Component{
    myClass = 'container bg-light';

    render() {
        return (
            <div className="container-fluid bg-light">
                <div className={this.myClass}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand" href="*">C Talk</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/app">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <div>
                                        <a className="dropdown-item"
                                           href="src/layout/layout#main-layout.js">Login</a>
                                    </div>
                                    <div className="px-1">/</div>
                                    <div>
                                        <a className="dropdown-item"
                                           href="src/layout/layout#main-layout.js">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}

export default AppNav;
