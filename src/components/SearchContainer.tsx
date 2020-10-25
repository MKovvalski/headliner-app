import React from "react";
import SearchParameters from "./SearchParameters";
import SearchSources from "./SearchSources";
import SearchButton from "./SearchButton";

const SearchContainer: React.FC = () => {
    return (
        <div className="search-container">
            <h2 className="search-container__title">Choose parameters</h2>
            <div className="search-container__description">
                First, select the basic parameters that will allow us to provide you with relevant news
                sources
            </div>
            <SearchParameters />
            <h2 className="search-container__title">Available Sources</h2>
            <div className="search-container__description">
                Pick the ones that interest you and confirm the choice
            </div>
            <SearchSources />
            <SearchButton />
        </div>
    );
};

export default SearchContainer;
