import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const HighlightCardContainer = styled.div`
    background-color: ${globalColors.backgroundCardColor};
    padding: 16px;
    display: flex;
    justify-content: space-between;
    width: 416px;
`;

export const HighlightCardImage = styled.img`
    width: 80px;
`;
