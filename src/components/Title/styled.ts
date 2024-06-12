import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const TitleContainer = styled.h1`
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    width: 684px;
    margin: auto;
    padding: 100px 0 50px;
    & span {
        font-size: inherit;
        color: ${globalColors.mainColor};
    }
`;
