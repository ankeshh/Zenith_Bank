import styled from "styled-components";
import { GrAddCircle } from "react-icons/gr";
import {Link} from 'react-router-dom';

export const DefaultAccount = styled.div `
    grid-area: 1 / 2 / 5 / 6;    
`;

export const Text = styled.h4`
    padding: 10px 10px 10px 20px;
`;

export const CardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    align-items: center;
`;

export const AccountCard = styled.div`
    max-height: 267px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    align-items: flex-start;
    background: #01bf71;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const AccountText = styled.h6`
    color: black;
    font-weight: bolder;
    font-size: small;
`;

export const AccountNumber = styled.h3`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 20px;
`;

export const AccountBalance = styled.h5`
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

export const AccountType = styled.h5`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const AccountTag = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 64px;
`;

export const AccountIcon = styled(GrAddCircle)`
    
    height: 267px;
    width: 160px;
`;

export const AccountAdd = styled(Link)`
    max-height: 340px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    align-items: flex-start;
    background: #01bf71;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const AboutAccount = styled.div`
    grid-area: 2 / 4 / 6 / 6;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    padding-right: 10px;
`;

export const AccountChart = styled.div`
    grid-area: 2 / 2 / 6 / 4;
`;

export const AccountInformation = styled.div`
    background-color: #01bf71;
    border-radius: 5px;
`;

export const AccountSummary = styled.div`
`;

export const DeleteAccount = styled.h5`
    width: 120px;
    background: #FF4500;
    padding: 10px;
    margin: 10px;
    color: black;
    font-size: 16px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    border-color: darkgreen;
    border-style: solid;
    border-width: 2px;
    text-decoration: none;
    cursor: pointer;
`;

export const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 110px repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;