import styled from 'styled-components';

export const WrapperHomePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
  align-items: flex-start;

  @media screen and (max-width: 550px) {
    padding: 25px;
  }
`;
export const HomePage = styled.div`
   {
    background-size: cover;
    overflow -x: hidden;

    background-repeat: no-repeat;
    height: calc(100vh - 70px);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 450px;
  background-color: rgba(176, 196, 222, 0.5);
  text-align: center;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
  padding: 20px;
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
`;
export const Logo = styled.img`
  height: 100px;
`;
