import styled, { css } from 'styled-components';
import { globalColors } from '../../constants/colors';

export const DetailedCardContainer = styled.div`
    padding: 80px 0;
`;

export const DetailedCardWrapper = styled.div`
    display: flex;
    gap: 30px;
`;
export const CardImage = styled.img`
    position: relative;
    display: inline-block;
`;
export const ImageContainer = styled.div`
    position: relative;
    display: inline-block;
`;
export const SaveButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 50%;
    padding: 17px;
    height: 60px;
    background-color: ${globalColors.backgroundColor};
    &:hover {
        background-color: ${globalColors.backgroundHeaderColor};
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ArtName = styled.p`
    font-size: 32px;
    margin-top: 0;
`;
export const Artist = styled.p`
    font-size: 24px;
    color: ${globalColors.highlightTextColor};
`;
export const ArtDate = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

const textHighlight = css`
    font-size: 16px;
    & span {
        font-weight: 600;
        color: ${globalColors.highlightTextColor};
    }
`;

export const OverviewContainer = styled.div``;

export const MainInfo = styled.div``;
export const Overview = styled.p`
    font-size: 32px;
`;
export const ArtistNationality = styled.p`
    ${textHighlight}
`;
export const Dimensions = styled.p`
    ${textHighlight}
`;
export const CreditLine = styled.p`
    ${textHighlight}
`;
export const Repository = styled.p`
    ${textHighlight}
`;
