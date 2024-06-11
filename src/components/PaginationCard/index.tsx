import React from 'react';
import {
    InfoContainer,
    PaginationCardContainer,
    PaginationCardImage,
    PaginationCardInfo,
} from './styled';
import Art from '../../assets/testImage.png';
import SaveImage from '../../assets/bookmark.png';
import {
    HighlightArtist,
    HighlightDate,
    HighlightSaveButton,
    HighlightTitle,
} from '../Global/styled';
import { Link } from 'react-router-dom';

const PaginationCard = () => {
    const cardId = '234';
    return (
        <Link to={`/detailed-info/${cardId}`}>
            <PaginationCardContainer id={cardId}>
                <PaginationCardImage src={Art} alt={'image'} />
                <PaginationCardInfo>
                    <InfoContainer>
                        <HighlightTitle>
                            Charles V, bust length...
                        </HighlightTitle>
                        <HighlightArtist>Giovanni Britto</HighlightArtist>
                        <HighlightDate>1999</HighlightDate>
                    </InfoContainer>
                    <HighlightSaveButton>
                        <img src={SaveImage} alt={'save'} />
                    </HighlightSaveButton>
                </PaginationCardInfo>
            </PaginationCardContainer>
        </Link>
    );
};

export default PaginationCard;
