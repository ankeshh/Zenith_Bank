import { Link } from "react-router-dom";
import styled from "styled-components";

export const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 110px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const Heading = styled.div`
    grid-area: 1 / 2 / 2 / 6;
`;

export const CalendarComponent = styled.div`
    grid-area: 2 / 2 / 6 / 4;
    padding-left: 20px;
    padding-right: 20px;
`;

export const PayComponent = styled.div`
    grid-area: 2 / 4 / 6 / 6;
`;

export const Summary = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,2);
    border-radius: 20px;
    background-color: #01bf71;
    height: 300px;
    width: 95%;
    padding: 0px 10px 0px 0px;
`;

export const SummayHeading = styled.h4`
    padding: 20px 0px 10px 20px;
`;

export const Dues = styled.div`
    padding: 0px 30px 10px 30px;
    display: flex;
    justify-content: space-between;
`;

export const DuesText = styled.h4`
    font-weight: lighter;
`;

export const DuesButton = styled(Link)`
    
`;

export const DefaultAccount = styled.div `
    margin-top: 110px;
    grid-area: 1 / 2 / 5 / 6;
`;