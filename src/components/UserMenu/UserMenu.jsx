import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'redux/auth/selectors';
import styled from 'styled-components';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <StyledName>Welcome, {user.name}</StyledName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export const StyledName = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: white;
`;
