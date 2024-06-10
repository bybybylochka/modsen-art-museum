import React from 'react';
import { OtherWorksContainer, OtherWorksLayout } from './styled';
import HighlightCard from '../HighlightCard';
import { Subtitle, Title } from '../Global/styled';

const OtherWorks = () => {
    return (
        <OtherWorksContainer>
            <Subtitle>Here some more</Subtitle>
            <Title>Other works for you</Title>
            <OtherWorksLayout>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </OtherWorksLayout>
        </OtherWorksContainer>
    );
};

export default OtherWorks;
