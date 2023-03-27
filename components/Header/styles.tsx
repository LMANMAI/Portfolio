import styled from "styled-components";
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
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
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  padding: 5px 10px;
  ul {
    padding: 0px;
    display: flex;
    gap: 15px;
    li {
      color: #8a5a44;
    }
  }
`;
