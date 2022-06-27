import React, { useEffect, useState } from 'react';
import * as Styled from './TechPage.style';
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

const TechPage = () => {

    const {data, loading} = useQuery(FETCH_ALL);
    const [techList, setTechList] = useState([]);

    useEffect(() => {
       if(!loading) {
        setTechList(data.categories);
       }
    }, [data, loading]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        <Styled.Wrapper>
           {techList.map( item => {
            const techProd = item.products;
            if(item.name === 'tech') {
                return (
                    <>
                    {techProd?.map( (elem) => {
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

export default TechPage;
