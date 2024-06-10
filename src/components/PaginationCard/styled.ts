import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const PaginationCardContainer = styled.div`
    width: 387px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PaginationCardImage = styled.img`
    width: 424px;
`;

export const PaginationCardInfo = styled.div`
    background-color: ${globalColors.backgroundColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    width: 80%;
    position: relative;
    bottom: 70px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & p {
        margin: 0;
    }
`;
