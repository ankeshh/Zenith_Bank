import styled from "styled-components";
import {AiOutlineUserAdd, AiFillDelete} from "react-icons/ai";
import {GiCancel} from "react-icons/gi";

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

export const MessageWrapper = styled.div`
    grid-area: 2 / 2 / 6 / 6;
    padding-left: 20px;
    padding-right: 20px;
`;

export const MessageText = styled.h3`
    text-decoration: none;
    padding-left: 20px;
`;

export const MessageHeading = styled.h2`
    text-decoration: underline;
    padding-bottom: 20px;
`;

export const AcceptText = styled(AiOutlineUserAdd)`
    color: green;
    height: 26px;
    width: auto;
    cursor: pointer;
    padding: 0px 10px 0px 20px;
`;

export const RejectText = styled(GiCancel)`
    color: red;
    height: 20px;
    width: auto;
    cursor: pointer;
    padding: 0px 10px 0px 20px;
`;

export const MessageContent = styled.div`
    padding: 20px;
    color: white;
    background-color: black;
    border-radius: 10px;
    margin: 20px;
`;

export const BenefMessage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
`;

export const DeleteMsg = styled(AiFillDelete)`
    color: red;
    height: 20px;
    width: auto;
    cursor: pointer;
    padding: 0px 10px 3px 20px;
`;