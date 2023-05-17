import Weather from 'WeatherApp/WeatherApp';
import {
  HomeTitle,
  WrapperHomePage,
  HomePage,
  Wrapper,
} from './HomePage.styled';
import { useAuth } from 'redux/auth/selectors';
import HomeBG from '../img/bg.jpeg';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <HomePage style={{ backgroundImage: `url(${HomeBG})` }}>
      <WrapperHomePage>
        <Wrapper>
          {isLoggedIn ? (
            <HomeTitle>
              Go to the "Contacts" tab to see the list of contacts
            </HomeTitle>
          ) : (
            <HomeTitle style={{ color: ' #DC143C' }}>
              To access the list of contacts, you must log in with your
              credentials or register
            </HomeTitle>
          )}
        </Wrapper>
        <Weather />
      </WrapperHomePage>
    </HomePage>
  );
}
