import styled from 'styled-components';
import { globalColors } from '../../constants/colors';

export const ForYouPicturesContainer = styled.div`
    padding-bottom: 60px;
`;
export const ForYouTitle = styled.p`
    font-size: 32px;
    text-align: center;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`;
export const PaginationNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 180px;
    float: right;
`;
export const PaginationNavItem = styled.div`
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 18px;
    &:active {
        background-color: ${globalColors.mainColor};
        color: ${globalColors.textLightColor};
        font-weight: 600;
    }
`;
