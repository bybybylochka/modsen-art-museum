import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const PaginationItemContainer = styled.div`
    width: 387px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PaginationItemImage = styled.img`
    width: 424px;
`;

export const PaginationItemInfo = styled.div`
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
export const PaginationItemTitle = styled.p`
    font-size: 17px;
    font-weight: 500;
`;

export const PaginationItemArtist = styled.p`
    font-size: 15px;
    color: ${globalColors.highlightTextColor};
`;

export const PaginationItemDate = styled.p`
    font-size: 15px;
    font-weight: 600;
`;

export const PaginationItemSaveButton = styled.button`
    border: none;
    border-radius: 50%;
    padding: 17px;
    height: 60px;
    background-color: ${globalColors.backgroundColor};
    &:hover {
        background-color: ${globalColors.backgroundHeaderColor};
    }
`;
