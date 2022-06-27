import React, { useEffect, useState } from 'react';
import * as Styled from './ClothesPage.style';
import Card from '../../components/Card/Card';
import { gql, useQuery } from "@apollo/client";

const FETCH_ALL = gql`
    query {
        categories {
            name,
            products {
              name,
              gallery,
              prices {
                amount,
                currency {
                  symbol
                }
              }
            }
          }
    }
`;

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
                    {clothesProd?.map( (elem) => {
                        return <Card 
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
