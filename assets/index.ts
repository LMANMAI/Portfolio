import styled, { StyledFunction } from "styled-components";
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
interface IMenu {
  menuvalue: boolean;
}
interface IHeight {
  height?: Number;
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
  outline: none;
`;
export const MenuLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem 1.5rem;
  gap: 2rem;
`;
export const MenuContainer = styled.nav<IMenu>`
  z-index: 99;
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
  /* display: grid;
  grid-template-rows: auto 1fr; */
  hr {
    width: 90%;
    margin: 10px auto;
  }
  @media (min-width: 768px) {
    /* grid-template-rows: none;
    grid-template-columns: 2fr 1fr; */
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
    color: ${({ theme }) => theme.brown};
  }
  h2 {
    font-size: 14px;
    font-weight: 300;
  }
  p:first-child,
  p > span {
    font-weight: bold;
    font-size: 2rem;
  }
  p,
  h2 {
    text-align: center;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    width: 85%;
  }
`;
export const Social = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialButton = styled.a`
  border: none;
  padding: 9px;
  border-radius: 100%;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.light_brown};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease-in-out;
  svg {
    font-size: 1.925rem;
    color: whitesmoke;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.brown};
  }
`;
/**Skills Page */
export const PanelContainer = styled.section`
  padding: 1rem 2rem;
`;
export const Panel = styled.div`
  //background-color: ${({ theme }) => theme.light_gray};
  display: grid;
  place-items: center;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 1rem;

  /* //tablet
  @media (min-width: 768px) {
  } */
  //desktop
  @media (min-width: 1024px) {
    padding: 2rem;
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  }
`;
export const Separador = styled.div`
  display: block;
  width: 100%;
  height: 5px;
  background-size: 400% 300%;
  background: linear-gradient(45deg, #656d4a, #a4ac86, #7f4f24);
  background-size: 200% 200%;
`;

export const Skill = styled.div`
  height: 90px;
  width: 100%;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: transform 300ms ease-in-out;
  p {
    margin: 0 5px;
  }
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    ${Separador} {
      -webkit-animation: Animation 5s ease infinite;
      -moz-animation: Animation 5s ease infinite;
      animation: Animation 1250ms ease infinite;
      @keyframes Animation {
        0% {
          background-position: 1% 50%;
        }
        50% {
          background-position: 51% 100%;
        }
        100% {
          background-position: 101% 0%;
        }
      }
    }
  }
  @media (min-width: 768px) {
    height: 150px;
  }
`;
export const SkillContainer = styled.div`
  display: flex;
`;

/**Portfolio */
export const PortfolioContainer = styled.section`
  padding: 20px;
  margin: 10px 0px;
`;
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
  padding: 15px;
  transition: all 300ms 200ms ease-in-out;
  width: 95%;
  margin: 0 auto;
  column-count: 4;
  column-width: 150px;
  @media (max-width: 768px) {
    // grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  div {
  }
`;

export const Proyect = styled.div<IHeight>`
  display: inline-block;
  height: ${(props) => `${props.height}px`};
  width: 100%;
  color: ${({ theme }) => theme.white};
  border: 0.2px solid #e6e6e6;
  border-radius: 15px;
  transition: all 200ms ease-in-out;
  padding: 5px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  &:hover {
    cursor: pointer;
    padding: 10px;
    padding-left: 1rem;
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  &:nth-child(2n + 1) {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    }
  }
  @media (max-width: 768px) {
    // grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  }
`;
/**Contacto */
export const ContactSection = styled.section`
  padding: 1rem;
  position: relative;
  z-index: 1;
  h2 {
    text-align: center;
    font-size: 3.625rem;
    font-family: "Julius Sans One", sans-serif;
    font-weight: lighter;
  }
`;
export const BackgrondBox = styled.div`
  background-color: ${({ theme }) => theme.brown};

  max-height: 450px;
  position: absolute;
  top: 15px;
  z-index: -1;
  @media (min-width: 768px) {
    width: 700px;
    height: 70vh;
    right: 0px;
    top: 95px;
  }
`;
export const Formulario = styled.form`
  margin: 0 auto;
  min-height: 200px;
  padding: 1rem;
  height: fit-content;
  background-color: ${({ theme }) => theme.green};
  @media (min-width: 768px) {
    width: 60%;
  }
`;
export const InputContainer = styled.div`
  margin: 5px;

  input[type="text"],
  textarea {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px;
    border-radius: 5px;
  }
  textarea {
    resize: none;
  }
`;
/*Footer */
export const FooterContainer = styled.footer`
  /* position: absolute;
  bottom: 0px; */
  width: 100%;
  background-color: ${({ theme }) => theme.green};
  color: white;
  p {
    text-align: center;
  }
`;
