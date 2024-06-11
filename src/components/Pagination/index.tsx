import React from 'react';
import { PaginationNav, PaginationNavItem } from './styled';

type PaginationProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    onPageClick: (page: number) => void;
    disable: {
        left: boolean;
        right: boolean;
    };
    nav?: {
        current: number;
        total: number;
    };
};
const Pagination = (props: PaginationProps) => {
    const {
        nav = null,
        disable,
        onNextPageClick,
        onPrevPageClick,
        onPageClick,
    } = props;

    const handleNextPageClick = () => {
        onNextPageClick();
    };
    const handlePrevPageClick = () => {
        onPrevPageClick();
    };
    return (
        <PaginationNav>
            <PaginationNavItem
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                &lt;
            </PaginationNavItem>
            {nav && (
                <>
                    <PaginationNavItem current>{nav.current}</PaginationNavItem>
                    {nav.current < nav.total && (
                        <PaginationNavItem
                            onClick={() => onPageClick(nav.current + 1)}
                        >
                            {nav.current + 1}
                        </PaginationNavItem>
                    )}
                    {nav.current < nav.total - 1 && (
                        <PaginationNavItem
                            onClick={() => onPageClick(nav.current + 2)}
                        >
                            {nav.current + 2}
                        </PaginationNavItem>
                    )}
                    {nav.current < nav.total - 2 && (
                        <PaginationNavItem
                            onClick={() => onPageClick(nav.current + 3)}
                        >
                            {nav.current + 3}
                        </PaginationNavItem>
                    )}
                </>
            )}
            <PaginationNavItem
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                &gt;
            </PaginationNavItem>
        </PaginationNav>
    );
};

export default Pagination;
