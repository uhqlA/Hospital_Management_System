import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #00B4D8;
    height: 100px;
    display: flex;
    padding: 0 auto;
    padding: 0.2rem calc((130vw - 1000px) / 2);
    position: relative;
    justify-content: space-between;
    
`;
export const NavLink = styled(Link)`
    color: brown;
    display: flex;
    text-align: center;
    align-items: left;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active { color: #000000}
`;
export const NavMenu = styled.div`
    display: flex;
    margin-right: -24px;
    text-align: center;
    align-items: center;
    @media screen and (max-width: 768px) {display: none;}
`;
export const NavBtn = styled.nav`
    width: 40vw;
    display: flex;
    margin-right: 24px;
    align-items: center;
    @media screen and (max-width: 768px) {display: none;}
`;
export const NavBtnLink = styled(Link)`
     margin-right: 0;
    border-radius: 4px;
    background: green;
    padding 10px 24px;
    color: #000000;
    border: 1px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    margin-left: 24px;
    transition: all 0.2s ease-in-out;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: brown;
        color: blue;
      }
`;
