import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const HeaderContainer = styled.header`
    background: linear-gradient(
        90deg,
        #343333 16.73%,
        #484848 58.63%,
        #282828 98.63%
    );
    color: ${globalColors.highlightTextColor};
    padding: 27px 0;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const HeaderButton = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: transparent;
    color: ${globalColors.textLightColor};
`;
