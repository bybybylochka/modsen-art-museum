import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const Title = styled.h3`
    font-size: 32px;
    margin: 10px 0;
    text-align: center;
`;

export const Subtitle = styled.h4`
    color: ${globalColors.highlightTextColor};
    margin: 10px 0;
    text-align: center;
`;

export const ArtsLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 30px 0;
`;
