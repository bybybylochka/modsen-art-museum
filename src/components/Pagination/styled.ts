import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const PaginationNav = styled.div`
    display: flex;
    float: right;
    gap: 15px;
`;
interface PaginationNavItemProps {
    onClick?: () => void;
    current?: boolean;
}
export const PaginationNavItem = styled.button<PaginationNavItemProps>`
    padding: 4px 10px;
    border-radius: 4px;
    border: none;
    font-size: 18px;
    background-color: ${({ current }) =>
        current ? `${globalColors.mainColor}` : 'transparent'};
    color: ${({ current }) =>
        current ? `${globalColors.textLightColor}` : 'inherit'};
    &:active {
        background-color: ${globalColors.mainColor};
        color: ${globalColors.textLightColor};
        font-weight: 600;
    }
    &:disabled {
        color: ${globalColors.textDisabledColor};
    }
`;
