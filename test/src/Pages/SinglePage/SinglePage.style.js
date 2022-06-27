import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin: auto;
`;

export const Photo = styled.div`
    width: 55%;
    display: flex;
    margin-right: 50px;
`;

export const Column = styled.div`
    width: 28%;
`;

export const ColumnElem = styled.div`
    width: 90px;
    height: 90px;
    margin-bottom: 32px;
    img{
        width: 100%;
        height: 100%;
    }
`;

export const Image = styled.div`
    width: 560px;
    height: 560px;
    img{
        width: 100%;
        height: 100%;
    }
`;

export const Description = styled.div`
   
`;

export const Brand = styled.h3`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
    margin-bottom: 16px;
`;

export const Name = styled.h4`
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1D1F22;
    margin-bottom: 43px;
`;

export const Attr = styled.div`
font-family: 'Roboto Condensed';
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #1D1F22;
    text-transform: uppercase;
    margin-bottom: 8px;
`;

export const AttrBlock = styled.div`
font-family: 'Roboto Condensed';
    display: flex;
    margin-bottom: 24px;
`;

export const AttrItem = styled.div`
    color: ${(props) => (props.isActive ? "#1D1F22" : "#ffffff")};
    background-color: ${(props) => (props.isActive ? "#ffffff" : "#1D1F22")};
    border: 2px solid #1D1F22;
    width: 63px;
    height: 45px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Source Sans Pro';
    letter-spacing: 0.05em;
`;

export const AttrColor = styled.div`
    background-color: ${(props) => (props.displayValue) ? `${props.displayValue}` : ''};
    border:  ${(props) => (props.displayValue === "White" ? "2px solid #5ECE7B" : "none")} ;
    width: 36px;
    height: 36px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Price = styled.div`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #1D1F22;
`;

export const Text = styled.div`
    width: 292px;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
    color: #1D1F22;
`;

export const Btn = styled.button`
    padding: 16px 32px;
    width: 292px;
    height: 52px;
    background: #5ECE7B;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-bottom: 40px;
`;
