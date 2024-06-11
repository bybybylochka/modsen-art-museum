import React from 'react';
import { LogoContainer, LogoImage, LogoText } from './styled';
import logoImage from '@assets/logo.png';

interface LogoProps {
    color?: string;
}

const Logo: React.FC<LogoProps> = ({ color }) => {
    return (
        <LogoContainer>
            <LogoImage src={logoImage} alt={'logo'} />
            <LogoText color={color}>
                Museum of <span>Art</span>
            </LogoText>
        </LogoContainer>
    );
};

export default Logo;
