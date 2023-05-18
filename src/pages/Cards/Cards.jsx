import { UserCards } from '../../components/UserCards/UserCards';
import uBG from '../../img/bg_user.jpg';
import { UPage } from './Cards.styled';

export default function Cards() {
  return (
    <UPage style={{ backgroundImage: `url(${uBG})` }}>
      <UserCards />
    </UPage>
  );
}
