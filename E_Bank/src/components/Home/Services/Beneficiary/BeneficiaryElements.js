import styled from "styled-components";

export const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 110px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const DeleteText = styled.h5`
    color: red;
    cursor: pointer;
`;

export const Heading = styled.div`
    grid-area: 1 / 2 / 2 / 6; 
`;

export const BeneficiaryTable = styled.div`
    grid-area: 2 / 2 / 6 / 4;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px 0px 20px;
    
`;

export const AddBeneficiary = styled.div`
    grid-area: 2 / 4 / 6 / 6;
    align-content: center;
    width: 90%;
`;

export const Form = styled.form`
    max-height: 500px;
    max-width: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 30px 30px 30px 30px;
    background-color: #01bf71;
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    border-radius: 20px;
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

export const FormHeading = styled.h2`
    text-decoration: underline;
    padding-bottom: 25px;
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

export const FieldText = styled.h4`
    color: black;
    font-weight: bolder;
`;

export const FieldInput = styled.input`
    margin-top: 5px;
    padding-top: 10px;
    width: 85%;
`;