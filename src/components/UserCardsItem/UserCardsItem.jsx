import { useState } from 'react';
import { updateUser } from '../../Fetch/tweetsApi';

import image from '../../img/picture.png';
import logo from '../../img/Logo.png';

import {
  CardsItem,
  CheckboxContainer,
  Logo,
  BgImage,
  Rectangle,
  AvatarWrap,
  Avatar,
  Tweets,
  Followers,
  CheckboxInput,
  CheckboxInputLabelOff,
  CheckboxInputLabelOn,
} from './UserCardsItem.styled';

export const UserCardsItem = user => {
  const { id, avatar, tweets, followers, isFollowed } = user.user;

  const [checked, setChecked] = useState(isFollowed);
  const [follow, setFollow] = useState(followers);

  const folowersChange = async () => {
    setChecked(!checked);

    if (!checked) {
      setFollow(prevState => prevState + 1);

      await updateUser(id, follow + 1, true);
    } else {
      setFollow(prevState => prevState - 1);
      await updateUser(id, follow - 1, false);
    }
  };

  return (
    <CardsItem key={id}>
      <Logo src={logo} alt="goit logo" />
      <BgImage src={image} alt="background image" />
      <Rectangle />
      <AvatarWrap />
      <Avatar src={avatar} alt="user avatar" />

      <Tweets>{tweets} TWEETS</Tweets>
      <Followers>{follow} FOLOWERS</Followers>
      <CheckboxContainer>
        <CheckboxInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={folowersChange}
        />
        {checked ? (
          <CheckboxInputLabelOn htmlFor={id}>Following</CheckboxInputLabelOn>
        ) : (
          <CheckboxInputLabelOff htmlFor={id}>Follow</CheckboxInputLabelOff>
        )}
      </CheckboxContainer>
    </CardsItem>
  );
};
