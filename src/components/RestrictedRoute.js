import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// ...

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
  // остальные пропсы компонента
};
