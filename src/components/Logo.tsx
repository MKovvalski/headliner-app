import React from "react";

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <div className="logo__row logo__row--top" />
            <div className="logo__row logo__row--middle">
                <div className="logo__dot" />
            </div>
            <div className="logo__row logo__row--bottom" />
        </div>
    );
};

export default Logo;
