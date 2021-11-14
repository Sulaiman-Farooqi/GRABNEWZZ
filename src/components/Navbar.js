
import React, { Component } from 'react'

import {
    BrowserRouter as Router,

    Link

} from "react-router-dom";


export class Navbar extends Component {

    render() {

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                    <Router>
                        <div className="container-fluid">

                            <Link className="navbar-brand" id="nav" style={{ color: "white" }} to="/">GRABNEWZZ-by Sulaiman</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-list" >
                                    <li className="nav-item">
                                        <Link className="nav-link active" style={{ color: "red" }} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/business">business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/science">science</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/entertainment">entertainment</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sports">sports</Link>
                                    </li>

                                    <li className="nav-item">

                                        <Link className="nav-link" to="/health">Health</Link>
                                    </li>
                                    


                                    <li className="nav-item dropdown">
                                        {/* <a className="nav-link dropdown-toggle" style={{ color: "white" }} to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a> */}
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/">Action</Link></li>
                                            <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                        </ul>
                                    </li>

                                </ul>
                              
                            </div>
                        </div>
                    </Router>
                    {/* <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        <label className="form-check-label" htmlfor="flexSwitchCheckChecked">enable dark mode</label>
                    </div> */}


                </nav>

            </div>
        )
    }

}

export default Navbar
