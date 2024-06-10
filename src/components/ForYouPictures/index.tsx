import React from 'react';
import {
    ForYouPicturesContainer,
    Pagination,
    PaginationNav,
    PaginationNavItem,
} from './styled';
import PaginationItem from '../PaginationItem';
import { Subtitle, Title } from '../Global/styled';

const ForYouPictures = () => {
    return (
        <ForYouPicturesContainer>
            <Subtitle>Topics for you</Subtitle>
            <Title>Our special gallery</Title>
            <Pagination>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
                <PaginationItem></PaginationItem>
            </Pagination>
            <PaginationNav>
                <PaginationNavItem>1</PaginationNavItem>
                <PaginationNavItem>2</PaginationNavItem>
                <PaginationNavItem>3</PaginationNavItem>
                <PaginationNavItem>4</PaginationNavItem>
                <PaginationNavItem>&gt;</PaginationNavItem>
            </PaginationNav>
        </ForYouPicturesContainer>
    );
};

export default ForYouPictures;
