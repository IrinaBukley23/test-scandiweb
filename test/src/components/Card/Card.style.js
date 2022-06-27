import styled from 'styled-components';

export const Wrapper = styled.div`
    display: block;
    padding: 15px;
    border-radius: 5px;
    width: 386px;
    margin: 50px 20px;
    transition: 0.5s ease-in;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;

export const Image = styled.div`
    margin-bottom: 35px;
    height: 356px;
    overflow: hidden;
    object-fit: cover;
    img {
        width: 100%;
    }
`;

export const Name = styled.h3`
    font-family: 'Raleway';
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: #1D1F22;
`;

export const Price = styled.div`
    display: flex;
`;