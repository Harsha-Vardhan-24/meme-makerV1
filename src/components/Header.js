import React from "react";
import headerImage from "../images/meme.png";

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src={headerImage}
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                    MeMe Maker
                </a>
            </div>
        </nav>
    );
};

export default Header;
