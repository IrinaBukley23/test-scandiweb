import React, { useEffect, useState } from 'react';
import * as Styled from './AllPage.style';
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

const AllPage = () => {
    const {data, loading} = useQuery(FETCH_ALL);
    const [allList, setAllList] = useState([]);

    useEffect(() => {
       if(!loading) {
        setAllList(data.categories);
       }
    }, [data, loading]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        <Styled.Wrapper>
           {allList.map( item => {
            const allProd = item.products;
            if(item.name === 'all') {
                return (
                    <>
                    {allProd?.map( (elem) => {
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

export default AllPage;
