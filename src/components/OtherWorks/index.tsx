import React from 'react';
import { OtherWorksContainer } from './styled';
import HighlightCard from '../HighlightCard';
import { ArtsLayout, Subtitle, Title } from '../Global/styled';

const OtherWorks = () => {
    return (
        <OtherWorksContainer>
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
        </OtherWorksContainer>
    );
};

export default OtherWorks;
