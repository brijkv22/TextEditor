import React from 'react'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a href="/TextEditor" className="navbar-brand" ><b>{props.title}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/TextEditor" className="nav-link active" aria-current="page" ><b>Home</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="/TextEditor/textForm/" className="nav-link active" aria-current="page" ><b>Text Editor</b></a>
                        </li>
                        <li className="nav-item">
                            <a href="/TextEditor/about/" className="nav-link active" aria-current="page" ><b>{props.About}</b></a>
                        </li>
                    </ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

