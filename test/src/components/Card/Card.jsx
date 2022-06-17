import React from 'react';
import * as Styled from './Card.style';

const Card = ({galery, name, price, currency}) => {

    return(
        <>
        <Styled.Wrapper>
            <Styled.Image>
                <img src={galery} alt={name}/>
            </Styled.Image>
            <Styled.Name>{name}</Styled.Name>
            <Styled.Price>
                <span>{currency}</span><span>{price}</span>
            </Styled.Price>
        </Styled.Wrapper>
        </>
    )
}

export default Card;
