import React, { useEffect } from 'react';
import { OtherArtsContainer } from './styled';
import HighlightCard from '../HighlightCard';
import { ArtsLayout, Subtitle, Title } from '../Global/styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadRandomArts } from '@store/reducers/artReducer';
import { AppDispatch, RootState } from '@store/index';

const OtherArts = () => {
    const arts = useSelector((state: RootState) => state.art.randomArts);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(loadRandomArts());
    }, [dispatch]);

    return (
        <OtherArtsContainer>
            <Subtitle>Here some more</Subtitle>
            <Title>Other works for you</Title>
            <ArtsLayout>
                {arts.map((art) => (
                    <HighlightCard key={art.id} art={art} />
                ))}
            </ArtsLayout>
        </OtherArtsContainer>
    );
};

export default OtherArts;
