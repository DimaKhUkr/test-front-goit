import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: black;
  border-bottom: 2px solid black;

  &:hover {
    color: #87cefa;
    border-bottom: 2px solid #87cefa;
  }

  &.active {
    color: white;
    border-bottom: 2px solid white;
  }
`;
