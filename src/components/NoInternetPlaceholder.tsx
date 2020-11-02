import React from "react";

const NoInternetPlaceholder: React.FC = () => {
    return (
        <div className="no-internet">
            <div>
                <div className="no-internet__title">Something went wrong</div>
                <div className="no-internet__subtitle">Please try again later</div>
            </div>
        </div>
    );
};

export default NoInternetPlaceholder;
