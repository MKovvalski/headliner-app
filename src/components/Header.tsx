import React from "react";
import Navigation from "./Nav";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <div className="header">
            <Navigation />
            <Logo />
        </div>
    );
};

export default Header;
