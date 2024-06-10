import React from 'react';
import { HighlightCardContainer, HighlightCardImage } from './styled';
import Art from '../../assets/testImage.png';
import { InfoContainer } from '../PaginationCard/styled';
import SaveImage from '../../assets/bookmark.png';
import {
    HighlightArtist,
    HighlightDate,
    HighlightSaveButton,
    HighlightTitle,
} from '../Global/styled';

const HighlightCard = () => {
    return (
        <HighlightCardContainer>
            <HighlightCardImage src={Art} alt={'image'} />
            <InfoContainer>
                <HighlightTitle>Charles V, bust length...</HighlightTitle>
                <HighlightArtist>Giovanni Britto</HighlightArtist>
                <HighlightDate>1999</HighlightDate>
            </InfoContainer>
            <HighlightSaveButton>
                <img src={SaveImage} alt={'save'} />
            </HighlightSaveButton>
        </HighlightCardContainer>
    );
};

export default HighlightCard;
