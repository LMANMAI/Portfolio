import { createGlobalStyle } from "styled-components";

import { ThemeType } from "./Theme";

interface Props {
  theme: ThemeType;
}
const GlobalStyle = createGlobalStyle<Props>`
*,*:after, *:before{
box-sizing: border-box;
margin: 0;
outline: none;
}
body{
    font-size: calc(14px + .5 vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.brown};
    scroll-behavior: smooth;

}
a{
    text-decoration: none;
    color: ${({ theme }) => theme.white}
}
ul{
    list-style: none;
}
`;
export default GlobalStyle;
