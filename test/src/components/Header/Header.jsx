import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import { NavLink } from 'react-router-dom';
import * as Styled from './Header.style';
import cart from '../../assets/Vector.svg';
import bag from '../../assets/bag.svg';

const FETCH_CURRENCY = gql`
    query {
        currencies {
            symbol, label
        }
    }
`;

const Header = () => {
    const {data, loading} = useQuery(FETCH_CURRENCY);
    const [currency, setCurrency] = useState([]);
    const [selected, setSelected] = useState('');
    useEffect(() => {
        if(!loading) {
            setCurrency(data.currencies)
        }
    }, [data, loading]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
        console.log(e.target);
    }

    return(
        <>
        <Styled.Wrapper>
            <Styled.Links>
            <Styled.Ul>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>All</NavLink>
            </Styled.Ul>
            <Styled.Ul>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'tech'}>Tech</NavLink>  
            </Styled.Ul>
            <Styled.Ul>
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'clothes'}>Clothes</NavLink>
            </Styled.Ul>
            </Styled.Links>
            <Styled.Bag>
                <img src={bag} alt='bag'/>
            </Styled.Bag>
            <Styled.Currency>
                <select value={selected} onChange={handleSelect}>
                    {currency.map(item => <option value={item.label} key={item.symbol}>{item.symbol}</option>)}
                </select>
                {/* <input type="text" list="country-value" />
                <datalist id="country-value">
                    {currency.map(item => <option value={item.symbol} key={item.symbol}>{item.label}</option>)}
                </datalist> */}
                <img src={cart} alt="cart" />
            </Styled.Currency>
        </Styled.Wrapper>
        </>
    )
}

export default Header;
