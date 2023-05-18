import { AuthNavStyled } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <div>
      <AuthNavStyled to="/tweets" state={{ from: location }}>
        Tweets
      </AuthNavStyled>
    </div>
  );
};
