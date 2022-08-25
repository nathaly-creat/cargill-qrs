import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #333333;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "100%")};
  gap:8px;
  width: 100%;
  height: 30vh;
  transition: right 0.3s linear;
  font-family:'Helvetica Neue';


  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: #FFFFFF;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: #FFFFFF;
  }
  a {
    padding: 0.5rem 0.8rem;
    color: #;
    text-decoration: none;
  }
  a:hover {
    color: #CF7F00;
    font-weight: bold;
  }
`;
