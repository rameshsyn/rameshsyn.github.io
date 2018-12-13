import styled from "styled-components";

const NavItem = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 10px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${props => props.theme.primary};
  }
`;

export default NavItem;
