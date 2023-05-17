import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';
import PropTypes from 'prop-types';

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
};

export const Loader = ({ size = 'lg' }) => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        width={sizes[size]}
        animationDuration="1.2"
      />
    </WrapperLoader>
  );
};

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};
