import ScrollToTop from 'react-scroll-up';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

export const ScrollToUp = () => {
  return (
    <ScrollToTop
      showUnder={160}
      style={{
        position: 'fixed',
        bottom: 80,
        right: 40,
        cursor: 'pointer',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s',
      }}
    >
      <MdKeyboardDoubleArrowUp size="42" color="#0000cd " />
    </ScrollToTop>
  );
};
