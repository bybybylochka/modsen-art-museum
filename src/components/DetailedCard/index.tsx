import React, { useEffect } from 'react';
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
import SaveImage from '@assets/bookmark.png';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { loadDetailedInfo } from '@store/reducers/artReducer';
import useImageLoader from '@utils/useImageLoader';
import defaultImage from '@assets/logo.png';

const DetailedCard = () => {
    const { id } = useParams();
    const art = useSelector((state: RootState) => state.art.detailedInfo);
    const src = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    const imageLoaded = useImageLoader(src);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        console.log('effect' + id);
        dispatch(loadDetailedInfo(id));
    }, [dispatch, id]);
    return (
        <DetailedCardContainer>
            <Wrapper>
                <DetailedCardWrapper>
                    <ImageContainer>
                        <CardImage
                            src={imageLoaded ? src : defaultImage}
                            alt={art.title}
                        />
                        <SaveButton>
                            <img src={SaveImage} alt={'save'} />
                        </SaveButton>
                    </ImageContainer>
                    <CardInfo>
                        <MainInfo>
                            <ArtName>{art.title}</ArtName>
                            <Artist>{art.artist_display}</Artist>
                            <ArtDate>{art.date_display}</ArtDate>
                        </MainInfo>
                        <OverviewContainer>
                            <Overview>Overview</Overview>
                            <ArtistNationality>
                                <span>Artist nationality:</span>{' '}
                                {art.place_of_origin}
                            </ArtistNationality>
                            <Dimensions>
                                <span>Dimensions:</span>
                                {art.dimensions}
                            </Dimensions>
                            <CreditLine>
                                <span>Credit Line:</span> {art.credit_line}
                            </CreditLine>
                            <Repository>
                                <span>Repository:</span> {art.gallery_title}
                            </Repository>
                        </OverviewContainer>
                    </CardInfo>
                </DetailedCardWrapper>
            </Wrapper>
        </DetailedCardContainer>
    );
};

export default DetailedCard;
