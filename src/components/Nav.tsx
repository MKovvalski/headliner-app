import React from "react";

// TODO: implement react-router and change those into routes
const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            <div className="navigation__link navigation__link--active">Headliners</div>
            {/* <div className='navigation__link'>Saved</div> */}
        </div>
    );
};

export default Navigation;
