import React from 'react';
import {
    ForYouContainer,
    Pagination,
    PaginationNav,
    PaginationNavItem,
} from './styled';
import { Subtitle, Title } from '../Global/styled';
import PaginationCard from '../PaginationCard';

const ForYou = () => {
    return (
        <ForYouContainer>
            <Subtitle>Topics for you</Subtitle>
            <Title>Our special gallery</Title>
            <Pagination>
                <PaginationCard></PaginationCard>
                <PaginationCard></PaginationCard>
                <PaginationCard></PaginationCard>
            </Pagination>
            <PaginationNav>
                <PaginationNavItem>1</PaginationNavItem>
                <PaginationNavItem>2</PaginationNavItem>
                <PaginationNavItem>3</PaginationNavItem>
                <PaginationNavItem>4</PaginationNavItem>
                <PaginationNavItem>&gt;</PaginationNavItem>
            </PaginationNav>
        </ForYouContainer>
    );
};

export default ForYou;
