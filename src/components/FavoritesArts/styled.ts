import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const FavoritesArtsContainer = styled.div`
    padding: 80px 0;
    margin-top: 0;
`;
export const FavoritesTitle = styled.h2`
    font-size: 64px;
    font-weight: 700;
    margin: auto;
    text-align: center;
    & span {
        font-size: 64px;
        font-weight: 700;
        color: ${globalColors.mainColor};
    }
`;
