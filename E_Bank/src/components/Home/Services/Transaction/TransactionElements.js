import styled from "styled-components";
import { Link } from "react-router-dom";

export const Heading = styled.div`
    grid-area: 1 / 2 / 2 / 6;     
`;

export const FormText = styled.h4`
    color: white;
`;

export const FormField = styled.input`
    border-radius: 10px;
`;

export const TransferButton = styled.a`
    color: black;
    background: #01bf71;
    border-radius: 10px;
    padding: 10px;
    width: 100px;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
`;

export const UserBalance = styled.div`
    padding: 30px 30px 30px 30px;
    background: green;
    
`;

export const Text = styled.p`
    font-weight: bold;
    font-size: larger;
    list-style-type: none;
`;

export const AccountStatement = styled(Link)`
    text-decoration: none;
`;

export const AccountStatementComp = styled.div`
    height: 100%;
    width: 100%;
`;

export const TransactionComponent = styled.div`
    grid-area: 2 / 2 / 6 / 4;
    padding-left: 30px;
`;

export const TransactionForm = styled.form`
    max-height: 500px;
    max-width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px 30px 30px 30px;
    background-color: #01bf71;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
`;

export const FormHeading = styled.h2`
    text-decoration: underline;
    padding-bottom: 25px;
`;

export const Button = styled.h5`
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

export const ButtonField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    
`;

export const ChangeForm = styled.h4`
    text-decoration: underline;
    cursor: pointer;
    font-size: small;
    padding: 10px 10px 0px 0px;
    
`;

export const FieldText = styled.h4`
    color: black;
    font-weight: bolder;
`;

export const FieldInput = styled.input`
    margin-top: 5px;
    padding-top: 10px;
    width: 85%;
`;

export const OptionText = styled.select`
    color: black;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 92%;
    border-radius: 5px;
    background-color: white;
`;

export const OptionInput = styled.option`
`;

export const InformationComponent = styled.div`
    grid-area: 2 / 4 / 6 / 6;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-left: 20px;
`;

export const AccountSelected = styled.div`
    background-color: #01bf71;
    padding: 30px 30px 30px 30px;
    border-radius: 5px;
    width: 80%;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    
`;

export const AccountHeading = styled.h2`
    text-decoration: underline;
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const AccountSubtext = styled.h4`
    padding: 5px;
    font-weight: lighter;
`;

export const Picture = styled.img`
    max-width: 66%;
`;