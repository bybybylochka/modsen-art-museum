import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

export const ErrorMessage = styled.p`
    font-size: 20px;
    color: ${globalColors.textErrorColor};
`;
