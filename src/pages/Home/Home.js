import Weather from 'WeatherApp/WeatherApp';
import {
  HomeTitle,
  WrapperHomePage,
  HomePage,
  Wrapper,
} from './HomePage.styled';

import HomeBG from '../../img/bg.jpeg';

export default function Home() {
  return (
    <HomePage style={{ backgroundImage: `url(${HomeBG})` }}>
      <WrapperHomePage>
        <Wrapper>
          <HomeTitle>
            Go to the &ldquo;Contacts&ldquo; tab to see the list of contacts
          </HomeTitle>
        </Wrapper>
        <Weather />
      </WrapperHomePage>
    </HomePage>
  );
}
