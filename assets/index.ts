import styled from "styled-components";
{
  /*
 //tablet
  @media (min-width: 768px) {
  }
  //desktop
  @media (min-width: 1024px) {
  }
*/
}
interface IMenuValue {
  menuvalue: boolean;
}
export const LayoutContainer = styled.main`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  margin: 10px auto;
`;
export const HeaderElement = styled.header``;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.brown};

  font-size: 1.14rem;
  svg {
    font-size: 1.75rem;
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.brown};
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    button {
      display: none;
    }
  }
`;
export const Button = styled.button`
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.brown};
  cursor: pointer;
`;
export const MenuLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem 1.5rem;
  gap: 2rem;
`;
export const MenuContainer = styled.nav<IMenuValue>`
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${(props) => (props.menuvalue ? "5px" : "-100%")};
  left: 0;
  width: 100%;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 1.5rem 1.5rem;
  background-color: ${({ theme }) => theme.white};
  transition: 0.3s ease-in-out;

  li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.brown};
    svg {
      margin: 0 5px;
      font-size: 1.25rem;
    }
  }
  button {
    position: absolute;
    right: 1rem;
  }

  //tablet
  @media (min-width: 768px) {
  }
  //desktop
  @media (min-width: 1024px) {
    box-shadow: none;
    position: initial;
    border-radius: 0;
    padding: 0 1rem;
    li {
      flex-direction: row;
    }
    ${Button} {
      &:first-child {
        display: none;
      }
    }
    ${MenuLinks} {
      display: flex;
      padding: 0;
      justify-content: flex-end;
    }
  }
`;
/*About me Page */
export const AboutMeContainer = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
`;
export const Circle = styled.div`
  grid-row: 1 / 2;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.brown};
  width: 280px;
  height: 280px;
  border-radius: 100% 100% 150% 150%;
  display: flex;
  img {
    border: 1px solid red;
  }
  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;
export const Presentiation = styled.div`
  padding: 1rem 0.5rem;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    font-weight: bolder;
    font-size: 15px;
    color: ${({ theme }) => theme.red};
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    width: 85%;
  }
`;
/**Skills Page */
export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const Panel = styled.div`
  width: 90%;
  height: 65vh;
  background-color: ${({ theme }) => theme.light_gray};
  /* //tablet
  @media (min-width: 768px) {
  } */
  //desktop
  @media (min-width: 1024px) {
    width: 28%;
  }
`;

/**Portfolio */
export const SkillsNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.525rem;
  gap: 5px;
  button {
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 1.25vw 2.125vw;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.light_brown};
    cursor: pointer;
  }
`;

export const ProyectsContainer = styled.div`
  border: 1px solid red;
  display: grid;
  gap: 10px;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  div {
    height: 150px;
    border: 1px solid blue;
    border-radius: 15px;
  }
`;
/*Footer */
export const FooterContainer = styled.footer`
  /* position: absolute;
  bottom: 0px; */
  width: 100vw;
  background-color: ${({ theme }) => theme.brown};
  color: white;
  p {
    text-align: center;
  }
`;
