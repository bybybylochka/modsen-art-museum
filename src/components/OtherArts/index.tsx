import React, { useEffect, useState } from 'react';
import { OtherArtsContainer } from './styled';
import HighlightCard from '../HighlightCard';
import { ArtsLayout, Subtitle, Title } from '../Global/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadRandomArts } from '@store/reducers/artReducer';
import { AppDispatch, RootState } from '@store/index';
import Preloader from '@components/Preloader';

const OtherArts = () => {
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
                // обработка ошибки
            }
        };
        fetchData().then(() => setLoading(false));
    }, [dispatch]);

    return (
        <OtherArtsContainer>
            <Subtitle>Here some more</Subtitle>
            <Title>Other works for you</Title>
            {loading ? (
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
