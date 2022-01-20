import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

export const FactorComponentContainer=styled.div`
    margin-top: -20%;
    height:2500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #01bf71;
    @media screen and (max-width: 768px){
        height: 4000px;
        margin-top: 30%;
    }
    @media screen and (max-width: 480px){
        height: 4000px;
        margin-top: 200px;
    }
`
export const FactorHeadline=styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color:#010606;
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const RobotComponentWrapper=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 0 50px;
    align-items: center;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const RobotCard=styled.div`
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    background-color: black;
    padding: 43px;
    box-shadow: 0 1px 3px;
    transition: all 0.2s ease-in-out;
    &:hover{
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;

    }
    &:nth-child(9), &:nth-child(10){
        justify-content: center;
    }
`

export const RobotImage=styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 20px;
`

export const RobotName=styled.h2`
    font-size: 1.25rem;
    color: white;
    margin-bottom: 10px;
`
export const RobotSelect=styled.button`
    background-color:#01bf71;
    padding: 10px;
    border-radius: 20px;
    border-color: #01bf71;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;

    &:hover{
        background-color: white;
        border-color: white;
    }
`
export const Check=styled(BsCheckCircleFill)`
    color: #01bf71;
    height: 30px;
    width: auto;
    padding-right: 10px;
    /* padding-top: 10px; */
    cursor: pointer;
`;


export const VerifyButton=styled.button`
    margin-top: 25px;
    height: 60px;
    width: 120px;
    font-size: 25px;
    font-weight: 600;
    border-radius: 20px;
    background-color:black;
    color:white;
    border-color: black;
    cursor: pointer;
    &:hover{
        background-color: goldenrod;
        border-color: goldenrod;
        color:black;
        transform: scale(1.06);
        transition: all 0.3s ease-in-out;
    }
`
export const QuestionSelect=styled.select`
    margin-top:20px;
    height:50px;
    width: 430px;
    margin-bottom: 20px;
    font-size:15px ;
    font-weight: 400;
    background-color: antiquewhite;
    border-radius: 5px;
`
export const QuestionOption=styled.option`
    &:hover{
        background-color: #01bf71;
    }
`
export const Answer=styled.input`
    background-color: antiquewhite;
    width: 400px;
    font-size:20px ;
`
export const Question=styled.h2`
    color:white;
    margin-bottom: 20px;
    letter-spacing: 0.75px;
    font-size: 25px;
    color: white;
`

export const QuestionComponentWrapper=styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    height:200px;
    width: 800px;
    justify-content: center;
    align-items: center;
    padding: 5px ;
    border-radius: 20px;
`

export const QuestionHeadline=styled.h1`
    text-align: center;
    font-size: 2.5rem;
    color:#010606;
    margin-top: 100px;
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`