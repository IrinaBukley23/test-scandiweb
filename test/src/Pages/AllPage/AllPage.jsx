import React, { useEffect, useState } from 'react';
import * as Styled from './AllPage.style';
import Card from '../../components/Card/Card';
import { useQuery } from "@apollo/client";
import {FETCH_ALL} from '../../queries/queries';

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
                    <Styled.Title>{item.name}</Styled.Title>
                    {allProd?.map( (elem) => {
                        return <Card 
                        key={elem.id}
                        id={elem.id}
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
