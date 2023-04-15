import styled from "styled-components";
interface INav {
  open: boolean;
}
//contenedor del header
export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  rigth: 0;
  z-index: 1000;
  transition: all 0.5s ease;
  background-color: #f0efeb;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 2%;
`;
export const ButtonDownloadContainer = styled.div`
  width: fit-content;
  display: flex;
  .download_btn {
    button {
      border: none;
      background-color: transparent;
      color: white;
    }
    width: fit-content;
    border-radius: 15px;
    transition: all 350ms ease;
    background-color: ${({ theme }) => theme.green};
  }

  #menu_boton {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #6b705c;
    display: none;
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    #menu_boton {
      padding: 0px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
    }
  }
`;
export const Navigation = styled.nav<INav>`
  display: flex;
  gap: 15px;
  margin: 0px 30px;
  ul {
    padding: 0px;
    display: flex;
    overflow: hidden;
    li {
      padding: 5px;
      cursor: pointer;
      &:hover {
        a {
          color: white;
        }
        background-color: ${({ theme }) => theme.green};
      }
      a {
        color: #8a5a44;
        transition: all 0.5ms ease;

        &:active {
          color: white;
          background-color: ${({ theme }) => theme.green};
        }
      }
    }
  }

  @media (max-width: 1280px) {
    margin: 0px 20px;
  }

  @media (max-width: 1024px) {
    overflow: hidden;
    position: absolute;
    top: 90%;
    right: 0%;
    width: 250px;
    background-color: ${({ theme }) => theme.white};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: all 0.5s ease;
    border: 1px solid ${({ theme }) => theme.green};
    ul {
      flex-direction: column;
    }

    display: ${(props) => (props.open ? "inherit" : "none")};
  }
`;
