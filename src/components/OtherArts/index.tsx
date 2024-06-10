import React from 'react';
import { OtherArtsContainer } from './styled';
import HighlightCard from '../HighlightCard';
import { ArtsLayout, Subtitle, Title } from '../Global/styled';

const OtherArts = () => {
    return (
        <OtherArtsContainer>
            <Subtitle>Here some more</Subtitle>
            <Title>Other works for you</Title>
            <ArtsLayout>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </ArtsLayout>
        </OtherArtsContainer>
    );
};

export default OtherArts;
