import Weather from 'WeatherApp/WeatherApp';
import { WrapperHomePage, HomePage, Wrapper, Logo } from './HomePage.styled';
import { Link } from 'react-router-dom';
import logoGoIt from '../../img/goit.png';

import HomeBG from '../../img/bg.jpeg';

export default function Home() {
  return (
    <HomePage style={{ backgroundImage: `url(${HomeBG})` }}>
      <WrapperHomePage>
        <Wrapper>
          <Link to="https://m.goit.global/ua/new/">
            <Logo src={logoGoIt} alt="GOIT Logo" />
          </Link>
        </Wrapper>
        <Weather />
      </WrapperHomePage>
    </HomePage>
  );
}
