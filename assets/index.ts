import styled from "styled-components";
import { motion } from "framer-motion";
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
  margin-top: 60px;
  h2 {
    text-align: center;
    font-size: 2.125rem;
    font-weight: lighter;
  }
`;
export const HeaderElement = styled.header`
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: ${({ theme }) => theme.white};
  z-index: 99;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme.brown};
  p {
    cursor: pointer;
  }
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
      &:first-of-type {
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
  //margin-bottom: 6rem;
  hr {
    width: 90%;
    margin: 10px auto;
  }
  .button_download_container {
    margin: 1rem auto;
    width: fit-content;
    display: flex;
    .download_btn {
      width: fit-content;
      border-radius: 15px;
      transition: all 350ms ease;
      background-color: ${({ theme }) => theme.green};
    }
  }
  @media (min-width: 1024px) {
    align-items: center;
  }
`;
export const Circle = styled.div`
  grid-row: 1 / 2;
  margin: 0 auto;
  width: 280px;
  height: 280px;
  border-radius: 100% 100% 150% 150%;
  display: flex;
  img {
    width: 280px;
    height: 280px;
    border-radius: 100%;
    left: -10px;
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
  p:first-of-type,
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
  margin: 20px;
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
  button {
    background-color: transparent;
    border: none;
    color: white;
  }
  .download_btn {
    width: fit-content;
    border-radius: none;
  }
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
  position: relative;
  z-index: 2;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  h2 {
    //color: white;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Panel = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 0px auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.725rem;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-image: linear-gradient(
    0deg,
    ${({ theme }) => theme.light_brown},
    ${({ theme }) => theme.green}
  );
  border-image-slice: 1;
  padding: 15px 25px;
  @media (min-width: 768px) {
    width: 80%;
    grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
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
export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Skill = styled.div`
  height: 80%;
  flex-grow: 1;
  width: 100%;
  margin: 10px;
  padding: 1rem;
  transition: transform 300ms ease-in-out;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.3px);
  -webkit-backdrop-filter: blur(7.3px);
  p {
    margin: 0 5px;
  }
  .skil_tittle {
    display: flex;
  }
  .skil_name {
    text-transform: capitalize;
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
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }
`;

/**Portfolio */
export const PortfolioContainer = styled.section`
  padding: 12px;
  margin: 10px 0px;
  height: fit-content;
`;
export const SkillsNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  button {
    border: none;
    outline: none;
    border-radius: 18px;
    padding: 0.525rem 2.125vw;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.light_brown};
    cursor: pointer;
  }
`;

export const ProyectsContainer = styled(motion.div)`
  padding: 15px;
  transition: all 300ms 200ms ease-in-out;
  width: 95%;
  margin: 0 auto;
  column-count: 4;
  column-width: 150px;
`;

export const Proyect = styled(motion.a)<IHeight>`
  display: inline-block;
  width: 100%;

  width: 100%;
  color: ${({ theme }) => theme.white};
  border: 0.2px solid #e6e6e6;
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 15px;
    height: ${(props) => props.height && `${props.height}px`};
  }
  p {
    color: black;
    text-align: center;
    margin: 7px 0px;
  }
  &:hover {
    cursor: pointer;
    //padding: 10px;
    //padding-left: 1rem;
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
`;
export const ProyectName = styled.p`
  padding: 2px;
  font-family: "Fira Sans", "Lato", sans-serif;
  font-weight: 500;
`;
/**Contacto */
export const ContactSection = styled.section`
  padding: 1rem;
  position: relative;
  z-index: 1;
`;
export const BackgrondBox = styled.div`
  background-color: ${({ theme }) => theme.brown};
  max-height: 450px;
  position: absolute;
  top: 15px;
  z-index: -1;

  @media (min-width: 1024px) {
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
  max-width: 450px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-image: linear-gradient(
    0deg,
    ${({ theme }) => theme.light_brown},
    ${({ theme }) => theme.green}
  );
  border-image-slice: 1;
  @media (min-width: 768px) {
    width: 60%;
  }
`;
export const InputContainer = styled.div`
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="submit"] {
    cursor: pointer;
    width: 35%;
    margin: 8px;
    outline: none;
    background-color: ${({ theme }) => theme.brown};
    color: white;
  }
  input[type="text"],
  textarea {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    margin: 3px;
    background: transparent;
    border-bottom: 1px solid #b9b8b8;
    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.brown};
    }
  }
  textarea {
    resize: none;
    height: 90px;
    font-family: Helvetica;
    &::placeholder {
    }
  }
  div {
    width: 100%;
    margin: 0px 3px;
    text-align: center;
    span {
      color: white;
      font-size: 15px;
    }
  }
`;
export const SubmitButton = styled.input`
  padding: 10px;
  border: none;
  border-radius: 16px;
`;
/*Footer */
export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.green};
  color: white;
  p {
    text-align: center;
  }
`;

export const ContainerForm = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoxFormAccepted = styled.div`
  width: 60%;
  height: 90px;
  padding: 15px;
  background-color: ${({ theme }) => theme.green};
  color: whitesmoke;
  text-align: center;
  font-size: 15px;
  display: grid;
  place-items: center;
`;
export const SlugContainer = styled.section`
  display: flex;
  flex-direction: column;
  .slug_link_container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;
export const SlugTechnologies = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  ${Skill} {
    width: fit-content;
    height: fit-content;
    padding: 10px;
  }
`;
export const SlugImgContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  border-radius: 15px;
  img {
    width: 100%;
    height: auto;
    margin: auto;
  }
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;
export const SlugDesc = styled.span`
  margin: 10px auto;
  text-align: center;
  max-width: 500px;
  width: 100%;
`;
export const SlugLinks = styled.a`
  width: fit-content;
  color: black;
  margin: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.brown};
  color: white;
  padding: 7px;
  border-radius: 18px;
`;
export const ModalView = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  width: 90vw;
  border-radius: 15px;
  padding: 15px;
  background-color: white;
  max-height: 85vh;
  height: fit-content;
  overflow: auto;
  h4 {
    text-align: center;
  }
  @media (min-width: 768px) {
    min-width: 40vw;
    width: fit-content;
    padding: 40px;
  }
  .modal_container {
    text-align: center;
    margin: 25px;
  }
`;
export const ModalCloseButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: end;
  width: 100%;
  cursor: pointer;
  svg {
    font-size: 20px;
    font-weight: bold;
  }
`;
