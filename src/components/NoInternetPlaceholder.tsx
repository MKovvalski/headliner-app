import React from "react";

const NoInternetPlaceholder: React.FC = () => {
    return (
        <div className="no-internet">
            <div>
                <div className="no-internet__title">No Internet</div>
                <div className="no-internet__subtitle">Check connection</div>
            </div>
        </div>
    );
};

export default NoInternetPlaceholder;
