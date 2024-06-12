import styled from 'styled-components';
import { globalColors } from '@constants/colors';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    position: relative;
    padding-bottom: 20px;
`;

export const SearchInput = styled.input`
    border-radius: 16px;
    padding: 16px 50px 16px 16px;
    width: 50%;
`;

export const SearchImg = styled.img``;

export const SearchButton = styled.button`
    position: absolute;
    top: 8px;
    right: 305px;
    border: none;
    background-color: transparent;
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${globalColors.mainColor};
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:checked {
        background-color: ${globalColors.mainColor};
        border-color: ${globalColors.mainColor};

        &:after {
            content: '\\2713';
            display: block;
            position: relative;
            top: 50%;
            left: 70%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
            font-weight: bold;
        }
    }

    &:hover {
        background-color: #ffcc80;
    }
`;

export const SortLabel = styled.label`
    display: flex;
    align-items: center;
    color: ${globalColors.mainColor};
    font-size: 16px;
    font-weight: 600;
`;

export const ErrorMessage = styled.div`
    color: ${globalColors.textErrorColor};
    font-size: 14px;
    margin-top: 4px;
`;
