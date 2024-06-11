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
import { useNavigate } from 'react-router-dom';
import { Art } from '@utils/art';
import defaultImage from '@assets/logo.png';
import useImageLoader from '@utils/useImageLoader';
import useFavorites from '@utils/useFavorites';

interface PaginationCardProps {
    art: Art;
}

const PaginationCard: React.FC<PaginationCardProps> = ({ art }) => {
    const navigate = useNavigate();
    const src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    const imageLoaded = useImageLoader(src);
    const { addToFavorites, isFavorites } = useFavorites();
    const handleAddToFavorites = (art: Art) => {
        addToFavorites(art);
    };
    const handleClick = () => {
        navigate(`/detailed-info/${art.id}`);
    };
    return (
        <PaginationCardContainer id={art.id} onClick={handleClick}>
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
                <HighlightSaveButton
                    onClick={(e) => {
                        e.stopPropagation();
                        handleAddToFavorites(art);
                    }}
                    saved={isFavorites(art)}
                >
                    <img src={SaveImage} alt={'save'} />
                </HighlightSaveButton>
            </PaginationCardInfo>
        </PaginationCardContainer>
    );
};

export default PaginationCard;
