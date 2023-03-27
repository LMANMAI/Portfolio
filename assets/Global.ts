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
html{
    scroll-behavior: smooth;
}
body{
    font-size: calc(14px + .2vw);
    font-family: 'Fira Sans', 'Lato', sans-serif;
    line-height: 1.7;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.brown};
    &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.green};
    border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.dark_green};
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    }
    &::-webkit-scrollbar {
    width: 10px;     /* Tamaño del scroll en vertical */
    height: 10px;    /* Tamaño del scroll en horizontal */
    }
    &::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
}
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.white}
}
ul{
    list-style: none;
}
section{
  max-height: 95vh;
  width: 90%;
  padding: 1.725rem 0.4rem;
  margin: 0px auto!important;
}
h2 {
    text-align: center;
    font-size: 3.625rem;
    font-family: "Julius Sans One", sans-serif;
    font-weight: lighter;
  }
  .name{
    font-family: "Julius Sans One", sans-serif;
  }
  
`;
export default GlobalStyle;
