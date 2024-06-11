import React from 'react';
import {
    ArtDate,
    Artist,
    ArtistNationality,
    ArtName,
    CardImage,
    CardInfo,
    CreditLine,
    DetailedCardContainer,
    DetailedCardWrapper,
    Dimensions,
    ImageContainer,
    MainInfo,
    Overview,
    OverviewContainer,
    Repository,
    SaveButton,
} from './styled';
import { Wrapper } from '../../global';
import Art from '@assets/testImage.png';
import SaveImage from '@assets/bookmark.png';

const DetailedCard = () => {
    return (
        <DetailedCardContainer>
            <Wrapper>
                <DetailedCardWrapper>
                    <ImageContainer>
                        <CardImage src={Art} alt={'art image'} />
                        <SaveButton>
                            <img src={SaveImage} alt={'save'} />
                        </SaveButton>
                    </ImageContainer>
                    <CardInfo>
                        <MainInfo>
                            <ArtName>
                                Charles V, bust length, holding a sword, facing
                                right
                            </ArtName>
                            <Artist>Giovanni Britto</Artist>
                            <ArtDate>1989-91</ArtDate>
                        </MainInfo>
                        <OverviewContainer>
                            <Overview>Overview</Overview>
                            <ArtistNationality>
                                <span>Artist nationality:</span> German
                            </ArtistNationality>
                            <Dimensions>
                                <span>Dimensions:</span>Sheet: 19 3/8 × 13 11/16
                                in. (49.2 × 34.8 cm)
                            </Dimensions>
                            <CreditLine>
                                <span>Credit Line:</span> Rogers Fund, 1917
                            </CreditLine>
                            <Repository>
                                <span>Repository:</span> Metropolitan Museum of
                                Art, New York, NY
                            </Repository>
                        </OverviewContainer>
                    </CardInfo>
                </DetailedCardWrapper>
            </Wrapper>
        </DetailedCardContainer>
    );
};

export default DetailedCard;
