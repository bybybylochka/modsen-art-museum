import React, { useEffect, useState } from 'react';
import { OtherArtsContainer } from './styled';
import HighlightCard from '../HighlightCard';
import { ArtsLayout, Subtitle, Title } from '../Global/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadRandomArts } from '@store/reducers/artReducer';
import { AppDispatch, RootState } from '@store/index';
import Preloader from '@components/Preloader';
import ErrorInfo from '@components/Error';
import { UNEXPECTED_ERROR_MESSAGE } from '@constants/messages';

const OtherArts = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const arts = useSelector((state: RootState) => state.art.randomArts);
    const dispatch = useDispatch<AppDispatch>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                await dispatch(loadRandomArts());
            } catch (error) {
                setLoading(false);
                if (error instanceof Error) {
                    console.error('Error fetching other arts:', error.message);
                    setErrorMessage(error.message);
                } else {
                    console.error('Unexpected error occurred:', error);
                    setErrorMessage(UNEXPECTED_ERROR_MESSAGE);
                }
            }
        };
        fetchData().then(() => setLoading(false));
    }, [dispatch]);
    return (
        <OtherArtsContainer>
            <Subtitle>Here some more</Subtitle>
            <Title>Other works for you</Title>
            {errorMessage ? (
                <ErrorInfo info={errorMessage} />
            ) : loading ? (
                <Preloader />
            ) : (
                <ArtsLayout>
                    {arts.map((art) => (
                        <HighlightCard key={art.id} art={art} />
                    ))}
                </ArtsLayout>
            )}
        </OtherArtsContainer>
    );
};

export default OtherArts;
