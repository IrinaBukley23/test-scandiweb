import styled from 'styled-components';

export const Error = styled.div`
  height: 91vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  background-color: var(--color-bg);
`;

export const Image = styled.div`
  width: 65px;
  height: 75px;
  margin-bottom: 42px;
  img {
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 22px;
  line-height: 140%;
  text-align: center;
  font-weight: 400;
  color: var(--color-text);
`;

export const Link = styled.div`
  a {
    text-decoration: none;
    color: var(--color-text);
  }
`;
