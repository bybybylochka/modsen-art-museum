import React from 'react';
import { HighlightCardContainer, HighlightCardImage } from './styled';
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
import defaultImage from '@assets/logo.png';
import useImageLoader from '@utils/useImageLoader';

interface HighlightCardProps {
    art: Art;
}
const HighlightCard: React.FC<HighlightCardProps> = ({ art }) => {
    const src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    const imageLoaded = useImageLoader(src);

    return (
        <Link to={`/detailed-info/${art.id}`}>
            <HighlightCardContainer id={art.id}>
                <HighlightCardImage
                    src={imageLoaded ? src : defaultImage}
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
