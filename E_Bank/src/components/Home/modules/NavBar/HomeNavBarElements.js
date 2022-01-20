import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: black;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.a`
    color: white;
    justify-self: flex-start;
    cursor: default;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: -80px;
    font-weight: bold;
    text-decoration: none;

    @media screen and (max-width: 960px){
        margin-left: 50px;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: white;
        color: #010606;
    }
`;