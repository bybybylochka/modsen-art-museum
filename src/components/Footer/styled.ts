import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const FooterContainer = styled.footer`
    background-color: ${globalColors.backgroundCardColor};
    padding: 20px 0;
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
