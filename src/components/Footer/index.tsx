import React from 'react';
import { FooterContainer, FooterWrapper } from './styled';
import { Wrapper } from '../../global';
import Logo from '../Logo';
import LogoModsenImage from '../../assets/logo-modsen.png';
import { globalColors } from '../../constants/colors';

const Footer = () => {
    return (
        <FooterContainer>
            <Wrapper>
                <FooterWrapper>
                    <Logo color={globalColors.textColor} />
                    <img src={LogoModsenImage} alt={'modsen logo'} />
                </FooterWrapper>
            </Wrapper>
        </FooterContainer>
    );
};

export default Footer;
