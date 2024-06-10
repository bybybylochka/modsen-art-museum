import React from 'react';
import {
    InfoContainer,
    PaginationItemArtist,
    PaginationItemContainer,
    PaginationItemDate,
    PaginationItemImage,
    PaginationItemInfo,
    PaginationItemSaveButton,
    PaginationItemTitle,
} from './styled';
import Art from '../../assets/testImage.png';
import SaveImage from '../../assets/bookmark.png';

const PaginationItem = () => {
    return (
        <PaginationItemContainer>
            <PaginationItemImage src={Art} alt={'image'} />
            <PaginationItemInfo>
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
            </PaginationItemInfo>
        </PaginationItemContainer>
    );
};

export default PaginationItem;
