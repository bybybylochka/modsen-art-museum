import React, { useCallback, useEffect, useState } from 'react';
import { ForYouContainer, PaginationCardContainer } from './styled';
import { Subtitle, Title } from '../Global/styled';
import PaginationCard from '../PaginationCard';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { loadPaginationPage } from '@store/reducers/artReducer';
import Pagination from '@components/Pagination';

const ROWS_PER_PAGE = 3;

const getTotalPageCount = (rowCount: number): number =>
    Math.ceil(rowCount / ROWS_PER_PAGE);

const ForYou = () => {
    const arts = useSelector((state: RootState) => state.art.paginationArts);
    const totalPages = useSelector((state: RootState) => state.art.totalPages);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(loadPaginationPage(page, false, ''));
    }, [page]);

    const handleNextPageClick = useCallback(() => {
        const current = page;
        const next = current + 1;
        const total = arts ? getTotalPageCount(totalPages) : current;

        setPage(next <= total ? next : current);
    }, [page, arts]);

    const handlePrevPageClick = useCallback(() => {
        const current = page;
        const prev = current - 1;

        setPage(prev > 0 ? prev : current);
    }, [page]);

    const handlePageClick = useCallback((page: number) => {
        setPage(page);
    }, []);
    return (
        <ForYouContainer>
            <Subtitle>Topics for you</Subtitle>
            <Title>Our special gallery</Title>
            <PaginationCardContainer>
                {arts
                    ? arts.map((art, index) => (
                          <PaginationCard
                              key={index}
                              art={art}
                          ></PaginationCard>
                      ))
                    : 'no data'}
            </PaginationCardContainer>
            {arts && (
                <Pagination
                    onNextPageClick={handleNextPageClick}
                    onPrevPageClick={handlePrevPageClick}
                    onPageClick={handlePageClick}
                    disable={{
                        left: page === 1,
                        right: page === getTotalPageCount(totalPages),
                    }}
                    nav={{
                        current: page,
                        total: getTotalPageCount(totalPages),
                    }}
                />
            )}
        </ForYouContainer>
    );
};

export default ForYou;
