import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


// props is passing value to one conponent to another component
export default function Navbar(props) { // returning while use file name
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            {/* using link to for without reloading page */}
                        </li>

                    </ul>
                    <div className={`form-check form-switch text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// we can set prop types
Navbar.propTypes = {
    // title: PropTypes.string.isRequired, // can make required
    title: PropTypes.string,
    aboutText: PropTypes.string
}

// if not passed any value so we set default value
Navbar.defaultProps = {
    title: "SetmyName",
    aboutText: "SetAbout"
}

