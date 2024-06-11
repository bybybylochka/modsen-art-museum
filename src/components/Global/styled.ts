import styled from 'styled-components';
import { globalColors } from '@constants/colors';

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

export const HighlightTitle = styled.p`
    font-size: 17px;
    font-weight: 500;
`;

export const HighlightArtist = styled.p`
    font-size: 15px;
    color: ${globalColors.highlightTextColor};
`;

export const HighlightDate = styled.p`
    font-size: 15px;
    font-weight: 600;
`;

export const HighlightSaveButton = styled.button`
    border: none;
    border-radius: 50%;
    padding: 17px;
    height: 60px;
    background-color: ${globalColors.backgroundColor};
    &:hover {
        background-color: ${globalColors.backgroundHeaderColor};
    }
`;
