import React from 'react';
import { FavoritesArtsContainer, FavoritesTitle } from './styled';
import { Wrapper } from '../../global';

import { ArtsLayout } from '../Global/styled';
import SaveImage from '@assets/bookmarkDark.png';
import useFavorites from '@utils/useFavorites';
import HighlightCard from '@components/HighlightCard';

const FavoritesArts = () => {
    const { favorites } = useFavorites();
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
                    {favorites.map((art) => (
                        <HighlightCard art={art} key={art.id} />
                    ))}
                </ArtsLayout>
            </Wrapper>
        </FavoritesArtsContainer>
    );
};

export default FavoritesArts;
