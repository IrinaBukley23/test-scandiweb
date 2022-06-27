import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './Card.style';

const Card = ({galery, name, price, currency, id}) => {

    const handleClick = () => {
        console.log(id)
    }

    return(
        <>
        <Link to={`/${id}`}>
            <Styled.Wrapper onClick={handleClick}>
                <Styled.Image>
                    <img src={galery} alt={name}/>
                </Styled.Image>
                <Styled.Name>{name}</Styled.Name>
                <Styled.Price>
                    <span>{currency}</span><span>{price}</span>
                </Styled.Price>
            </Styled.Wrapper>
        </Link>
        </>
    )
}

export default Card;
