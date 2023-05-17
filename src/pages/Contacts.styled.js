import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px;
  align-items: baseline;
  justify-content: space-evenly;
`;
export const TextStyled = styled.h3`
  margin-top: 50px;
  font-size: 22px;
  text-align: center;
`;

export const WrapperContacts = styled.div`
  padding: 15px;
  background-color: rgba(176, 196, 222, 0.9);
  color: #0f1111;

  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
export const ContPage = styled.div`
   {
    background-size: cover;
    overflow -x: hidden;
    padding-top: 50px;

    background-repeat: no-repeat;
    height: calc(100vh - 70px);
  }
`;
