import { RotatingLines } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

const sizes = {
  sm: 40,
  md: 60,
  lg: 80,
};

export const Loader = () => {
  return (
    <WrapperLoader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        width={sizes.lg}
        animationDuration="1.2"
      />
    </WrapperLoader>
  );
};
