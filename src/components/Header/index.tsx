import React from 'react';
import {
    ButtonsContainer,
    HeaderContainer,
    HeaderLink,
    HeaderWrapper,
} from './styled';
import { Wrapper } from '../../global';
import Logo from '../Logo';
import HomeImage from '../../assets/home.png';
import BookmarkImage from '../../assets/bookmark.png';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <HeaderContainer>
            <Wrapper>
                <HeaderWrapper>
                    <Logo />
                    <ButtonsContainer>
                        {location.pathname === '/' ? (
                            <HeaderLink to={'/favorites'}>
                                <img src={BookmarkImage} alt={'bookmark'} />
                                Your favourites
                            </HeaderLink>
                        ) : (
                            <>
                                <HeaderLink to={'/'}>
                                    <img src={HomeImage} alt={'home'} />
                                    Home
                                </HeaderLink>
                                <HeaderLink to={'/favorites'}>
                                    <img src={BookmarkImage} alt={'bookmark'} />
                                    Your favourites
                                </HeaderLink>
                            </>
                        )}
                    </ButtonsContainer>
                </HeaderWrapper>
            </Wrapper>
        </HeaderContainer>
    );
};

export default Header;
