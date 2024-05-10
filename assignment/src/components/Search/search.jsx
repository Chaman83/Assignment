import React from "react";
import { SearchMainWrapper, SearchIconWrapper, StyledInput, PlaceholderText } from "./search.style";
import { SearchIcon } from "../../images/image";

const Search = () => {
    return (
        <SearchMainWrapper>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInput placeholder="Search Furniture" />
        </SearchMainWrapper>
    );
};

export default Search;
