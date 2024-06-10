import React from 'react';
import {
    ButtonsContainer,
    HeaderButton,
    HeaderContainer,
    HeaderWrapper,
} from './styled';
import { Wrapper } from '../../global';
import Logo from '../Logo';
import HomeImage from '../../assets/home.png';
import BookmarkImage from '../../assets/bookmark.png';

const Header = () => {
    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderWrapper>
                    <Logo />
                    <ButtonsContainer>
                        <HeaderButton>
                            <img src={HomeImage} alt={'home'} />
                            Home
                        </HeaderButton>
                        <HeaderButton>
                            <img src={BookmarkImage} alt={'bookmark'} />
                            Your favourites
                        </HeaderButton>
                    </ButtonsContainer>
                </HeaderWrapper>
            </Wrapper>
        </HeaderContainer>
    );
};

export default Header;
