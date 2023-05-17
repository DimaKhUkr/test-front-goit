import { useAuth } from 'redux/auth/selectors';
import { NavStyled } from './Navigation.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavStyled to="/">Home</NavStyled>
      {isLoggedIn && <NavStyled to="/contacts">Contacts</NavStyled>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
