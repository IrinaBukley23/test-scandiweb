import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Styled from './Header.style';

class Header extends React.Component {

    render() {
        return(
            <>
            <Styled.Wrapper>
                <Styled.Ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'/'}>All</NavLink>
                </Styled.Ul>
                <Styled.Ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'tech'}>Tech</NavLink>  
                </Styled.Ul>
                <Styled.Ul>
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to={'clothes'}>Clothes</NavLink>
                </Styled.Ul>
            </Styled.Wrapper>
            </>
        )
    }
}

export default Header;
