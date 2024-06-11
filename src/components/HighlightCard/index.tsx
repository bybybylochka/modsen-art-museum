import React from 'react';
import { HighlightCardContainer, HighlightCardImage } from './styled';
import ArtImage from '@assets/testImage.png';
import { InfoContainer } from '../PaginationCard/styled';
import SaveImage from '@assets/bookmark.png';
import {
    HighlightArtist,
    HighlightDate,
    HighlightSaveButton,
    HighlightTitle,
} from '../Global/styled';
import { Link } from 'react-router-dom';
import { Art } from '@utils/art';

interface HighlightCardProps {
    art: Art;
    image?: string;
}
const HighlightCard: React.FC<HighlightCardProps> = ({ art, image }) => {
    return (
        <Link to={`/detailed-info/${art.id}`}>
            <HighlightCardContainer id={art.id}>
                <HighlightCardImage
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    alt={art.title}
                />
                <InfoContainer>
                    <HighlightTitle>{art.title}</HighlightTitle>
                    <HighlightArtist>{art.artist_display}</HighlightArtist>
                    <HighlightDate>{art.date_display}</HighlightDate>
                </InfoContainer>
                <HighlightSaveButton>
                    <img src={SaveImage} alt={'save'} />
                </HighlightSaveButton>
            </HighlightCardContainer>
        </Link>
    );
};

export default HighlightCard;
