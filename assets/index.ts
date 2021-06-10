import styled from 'styled-components';

export const LayoutContainer = styled.main`
    width: 65vw;
    max-width: 980px;
    height: 55vh;
    max-height: 600px;
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
    margin: 10px auto;
`;
export const HeaderElement = styled.header`
    border: 1px solid red;
`;