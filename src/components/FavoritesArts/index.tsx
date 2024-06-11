import React from 'react';
import { FavoritesArtsContainer, FavoritesTitle } from './styled';
import { Wrapper } from '../../global';
import HighlightCard from '../HighlightCard';
import { ArtsLayout } from '../Global/styled';
import SaveImage from '@assets/bookmarkDark.png';

const FavoritesArts = () => {
    return (
        <FavoritesArtsContainer>
            <Wrapper>
                <FavoritesTitle>
                    Here Are Your
                    <br />
                    <span>
                        <img src={SaveImage} alt={'save'} />
                        Favorites
                    </span>
                </FavoritesTitle>
                <ArtsLayout>
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                    <HighlightCard />
                </ArtsLayout>
            </Wrapper>
        </FavoritesArtsContainer>
    );
};

export default FavoritesArts;
