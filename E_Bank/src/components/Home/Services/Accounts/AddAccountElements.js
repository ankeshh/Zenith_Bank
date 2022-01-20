import styled from "styled-components";
import {Link} from 'react-router-dom';

export const DefaultAccount = styled.div `
    grid-area: 1 / 2 / 5 / 6;
`;


export const HeadingText = styled.h1`
    padding: 20px 10px 0px 20px;
`;

export const SubText = styled.h3`
    padding: 5px 10px 20px 20px;
    font-weight: lighter;
`;

export const FieldText = styled.h4`
    color: black;
    font-weight: bolder;
`;

export const CardWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    align-items: center;
`;

export const FormField = styled.div`
    max-height: 500px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    background: #01bf71;
    border-radius: 10px;
    padding: 30px ;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    align-items: center;
`;

export const Form = styled.form`
    max-height: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 10px 10px 40px;
`;

export const FieldInput = styled.input`
    margin-top: 5px;
    padding-top: 10px;
    width: 85%;
`;

export const Button = styled(Link)`
    border-radius: 50px;
    background: black;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
`;

export const Picture = styled.img`
    max-width: 95%;
`;