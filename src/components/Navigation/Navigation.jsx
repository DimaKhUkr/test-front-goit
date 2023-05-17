import { NavStyled } from './Navigation.styled';

import { AuthNav } from '../AuthNav/AuthNav';
export const Navigation = () => {
  return (
    <>
      <NavStyled to="/">Home</NavStyled>

      <AuthNav />
    </>
  );
};
