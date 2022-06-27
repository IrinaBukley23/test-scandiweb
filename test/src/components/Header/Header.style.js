import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 20px auto;
`;

export const Links = styled.div`
  display: flex;
`;

export const Bag = styled.div`
  height: 32px;
  img {
    
    height: 100%
  }
`;

export const Currency = styled.div`
  select {
    width: 70px;
    border: none;
    margin-right: 38px;
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
  }  
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    margin-right: 20px;
    text-decoration: none;
    text-transform: uppercase;
    color: #1D1F22;
    padding-bottom: 30px;
  }
  active-link {
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
  }
`;