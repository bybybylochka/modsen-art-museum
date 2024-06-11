import React from 'react';
import { FavoritesArtsContainer, FavoritesTitle } from './styled';
import { Wrapper } from '../../global';

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
                <ArtsLayout></ArtsLayout>
            </Wrapper>
        </FavoritesArtsContainer>
    );
};

export default FavoritesArts;
