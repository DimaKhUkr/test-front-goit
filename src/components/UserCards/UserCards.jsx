import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-hot-toast';

import { HiChevronDoubleLeft } from 'react-icons/hi';
import { getUsers } from '../../Fetch/tweetsApi';
import { Loader } from '../Loader/Loader';
import { UserCardsItem } from '../UserCardsItem/UserCardsItem';

import {
  ListContainer,
  DropdownAndBackWrap,
  UserCartsListAndLoadMoreBtnWrap,
  UserCartsList,
  LoadMoreButton,
  GoBackButton,
} from './UserCards.styled';

const selectOptions = [
  { value: '', label: 'All cards' },
  { value: 'false', label: 'Follow' },
  { value: 'true', label: 'Following' },
];

export const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(2);
  const [selectedOption, setSelectedOption] = useState('');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [loadCards, setLoadCards] = useState(true);

  useEffect(() => {
    getUsers().then(data => {
      if (data.length === 0) {
        return toast.error(`User Cards not find`);
      }
      setUsers(data);
    });
  }, []);

  const location = useLocation();

  const handleChange = selectedOption => {
    setPage(2);
    setSelectedOption(selectedOption);
    setShowLoadMoreBtn(true);
    getUsers(selectedOption.value).then(data => {
      setLoadCards(true);
      if (data.length === 0) {
        setLoadCards(false);

        return toast.error(`User Cards not found`);
      }
      if (data.length < 3) {
        setShowLoadMoreBtn(false);
      }
      setUsers(data);
    });
  };

  const handleLoadMore = async () => {
    setLoadMore(true);
    setPage(prevState => prevState + 1);
    console.log(selectedOption);
    const data = await getUsers(selectedOption.value, page);

    if (data.length < 2) {
      setShowLoadMoreBtn(false);
      toast.error(`User Cards ended`);
    }

    setUsers(prevState => [...prevState, ...data]);

    setLoadMore(false);
  };
  return !users.length ? (
    <Loader />
  ) : (
    <section>
      <DropdownAndBackWrap>
        <GoBackButton to={location.state?.from ?? '/'}>
          <span>
            <HiChevronDoubleLeft size="28" color="#0000cd" />
          </span>
        </GoBackButton>
        <Select
          closeMenuOnSelect={true}
          options={selectOptions}
          value={selectedOption}
          onChange={handleChange}
        />
      </DropdownAndBackWrap>
      {loadCards ? (
        <ListContainer>
          <UserCartsListAndLoadMoreBtnWrap>
            <UserCartsList>
              {users.map(user => (
                <UserCardsItem key={user.id} user={user} />
              ))}
            </UserCartsList>

            {loadMore && <Loader />}
            {showLoadMoreBtn && (
              <LoadMoreButton onClick={handleLoadMore} type="button">
                {loadMore ? 'Loading...' : 'LOAD MORE'}
              </LoadMoreButton>
            )}
          </UserCartsListAndLoadMoreBtnWrap>
        </ListContainer>
      ) : (
        toast.error(`User Cards not found!!! Please choose another option!!!`)
      )}
    </section>
  );
};
