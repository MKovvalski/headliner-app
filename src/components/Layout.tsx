import React from "react";

interface ILayout {
    children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return <div className="layout">{children}</div>;
};

export default Layout;
