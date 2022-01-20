import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    padding: 0 50px;
    align-items: center;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    max-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    align-items: center;
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

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1= styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const ServicesH2= styled.h2`
    font-size: 1rem;
    font-weight: bolder;
    margin-bottom: 10px;
    color: white;
`;

export const ServicesP= styled.p`
    font-size: 1rem;
    text-align: center;
    color: black;
`;