import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const OtherWorksContainer = styled.div`
    padding: 30px 0;
`;
export const OtherWorksSubtitle = styled.p`
    color: ${globalColors.highlightTextColor};
    margin: 0;
    text-align: center;
`;

export const OtherWorksLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 30px 0;
`;
