import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const LogoContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 48px;
`;

export const LogoText = styled.p`
    letter-spacing: 2px;
    font-size: 16px;
    color: ${(props) => props.color || globalColors.textLightColor};
    & span {
        color: ${globalColors.highlightTextColor};
        font-weight: bold;
    }
`;
