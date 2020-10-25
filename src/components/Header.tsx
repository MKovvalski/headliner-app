import React from "react";
import Navigation from "../components/Nav";
import Logo from "../components/Logo";

const Header: React.FC = () => {
    return (
        <div className="header">
            <Navigation />
            <Logo />
        </div>
    );
};

export default Header;
