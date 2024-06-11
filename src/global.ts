import styled, { createGlobalStyle } from 'styled-components';
import { globalColors } from './constants/colors';

export default createGlobalStyle`
  * {
    font-family: "Roboto Thin", sans-serif;
    font-size: 14px;
    color: ${globalColors.textColor};
    text-decoration: none;
  }
  body{
    background-color: ${globalColors.backgroundColor};
    margin: 0;
  }
`;

export const Wrapper = styled.div`
    width: 1280px;
    margin: auto;
`;
