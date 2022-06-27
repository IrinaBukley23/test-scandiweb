import React, { useEffect, useState } from 'react';
import * as Styled from './ClothesPage.style';
import Card from '../../components/Card/Card';
import { useQuery } from "@apollo/client";
import {FETCH_ALL} from '../../queries/queries';

const ClothesPage = () => {

    const {data, loading} = useQuery(FETCH_ALL);
    const [clothesList, setClothesList] = useState([]);

    useEffect(() => {
       if(!loading) {
        setClothesList(data.categories);
       }
    }, [data, loading]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        <Styled.Wrapper>
           {clothesList.map( item => {
            const clothesProd = item.products;
            if(item.name === 'clothes') {
                return (
                    <>
                    <Styled.Title>{item.name}</Styled.Title>    
                    {clothesProd?.map( (elem) => {
                        return <Card 
                        key={elem.id}
                        galery={elem.gallery[0]} 
                        name={elem.name}
                        price={elem.prices[0].amount}
                        currency={elem.prices[0].currency.symbol}
                        />
                    } )}
                    </>)
            }
           } )}
        </Styled.Wrapper>
        </>
    )
}

export default ClothesPage;
