import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DropdownAndBackWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 74px 0 10px;

  margin: 0 30px 10px;
`;

export const GoBackButton = styled(Link)`
  padding: 4px 0 0;
`;

export const UserCartsListAndLoadMoreBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;
`;

export const UserCartsList = styled.ul`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const LoadMoreButton = styled.button`
  display: inline-block;
  margin-top: 40px;
  padding: 14px 56px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
`;
