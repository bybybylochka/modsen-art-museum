import React from 'react';
import {
    Checkbox,
    SearchContainer,
    SearchImg,
    SearchInput,
    SortLabel,
} from './styled';
import SearchImage from '@assets/search.png';

const Search = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder={'Search art, artist, work...'} />
            <SearchImg src={SearchImage} alt={'search'} />
            <SortLabel>
                <Checkbox id={'checkbox'} />
                Old first
            </SortLabel>
        </SearchContainer>
    );
};

export default Search;
