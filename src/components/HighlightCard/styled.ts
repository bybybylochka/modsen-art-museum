import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const HighlightCardContainer = styled.div`
    background-color: ${globalColors.backgroundCardColor};
    display: flex;
    height: 130px;
    width: 416px;
    padding: 16px;
    gap: 16px;
    align-items: center;
`;

export const HighlightCardImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
`;
