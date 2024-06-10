import React from 'react';
import { HighlightCardContainer, HighlightCardImage } from './styled';
import Art from '../../assets/testImage.png';
import {
    InfoContainer,
    PaginationItemArtist,
    PaginationItemDate,
    PaginationItemSaveButton,
    PaginationItemTitle,
} from '../PaginationItem/styled';
import SaveImage from '../../assets/bookmark.png';

const HighlightCard = () => {
    return (
        <HighlightCardContainer>
            <HighlightCardImage src={Art} alt={'image'} />
            <InfoContainer>
                <PaginationItemTitle>
                    Charles V, bust length...
                </PaginationItemTitle>
                <PaginationItemArtist>Giovanni Britto</PaginationItemArtist>
                <PaginationItemDate>1999</PaginationItemDate>
            </InfoContainer>
            <PaginationItemSaveButton>
                <img src={SaveImage} alt={'save'} />
            </PaginationItemSaveButton>
        </HighlightCardContainer>
    );
};

export default HighlightCard;
