import React, { useEffect, useState } from 'react';
import * as Styled from './AllPage.style';
import { gql, useQuery } from "@apollo/client";

const FETCH_ALL = gql`
    query {
        categories {
            name,
            products {
              name,
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

    console.log(allList);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        <h2>All</h2>
        <Styled.Wrapper>
            <ul>
           {allList.map(item => {
            if(item.name === 'all') {
                return <li>{item.name}</li>
            }
           })}
           </ul>
        </Styled.Wrapper>
        </>
    )
}

export default AllPage;
