import React from 'react';
import {
    InfoContainer,
    PaginationCardContainer,
    PaginationCardImage,
    PaginationCardInfo,
} from './styled';
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

interface PaginationCardProps {
    art: Art;
}

const PaginationCard: React.FC<PaginationCardProps> = ({ art }) => {
    const src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    const imageLoaded = useImageLoader(src);
    return (
        <Link to={`/detailed-info/${art.id}`}>
            <PaginationCardContainer id={art.id}>
                <PaginationCardImage
                    src={imageLoaded ? src : defaultImage}
                    alt={art.title}
                />
                <PaginationCardInfo>
                    <InfoContainer>
                        <HighlightTitle>{art.title}</HighlightTitle>
                        <HighlightArtist>{art.artist_display}</HighlightArtist>
                        <HighlightDate>{art.date_display}</HighlightDate>
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
