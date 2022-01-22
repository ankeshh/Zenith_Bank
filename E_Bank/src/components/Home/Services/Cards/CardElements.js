import styled, { keyframes } from 'styled-components';
import {Visa} from '@styled-icons/boxicons-logos/Visa';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const cardFront=keyframes`
    from {
      left: 0;
      top: 0;
    }
    to {
      top: 0%;
      left: -50%;
    }
`
const cardBack=keyframes`
    from {
      left: 0;
      top: 0;
    }
    to {
      top: 0%;
      left:50%
    }
`
export const Card=styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: relative;
`
export const CardContainer=styled.div`
    position: relative;
    left: 50%;
    top:50%;
    margin-top:15rem ;  
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 370px;
    height: 240px;
`;

export const HomeCardContainer=styled.div`
    position: relative;
    left: 50%;
    margin-top:10rem ;
    transform: translate(-50%, -50%);
    padding: 10px;
    width: 370px;
    height: 240px;
`;

export const CardFront=styled.div`
    width: 370px;
    height: 240px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 38px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 22;
    animation-name: ${cardFront};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  
`;

export const HomeCardFront=styled.div`
    width: 370px;
    height: 240px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 38px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 22;
`

export const CardFrontBg=styled.div`
    position: absolute;
    background-color: ${({greyBg})=>(greyBg ? '#485461' : '#a4508b')};
    background-image: ${({greyGrad})=>(greyGrad ? 'linear-gradient(315deg, #485461 0%, #28313b 74%)' : 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)')};
    width: 100%;
    height: 100%;
    z-index: 0;
`;

export const CardBrand=styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-left: 50%;
    margin-top: 19px;
    position: absolute;
    transform: translate(-50%);
`;

export const CardBrandLogo=styled.span`
    font-size: 21px;
    color: ${({lightTxt})=>(lightTxt ? 'white' : 'wheat')};
    font-weight: 900;
`;

export const CardBrandName=styled.span`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: ${({lightTxt})=>(lightTxt ? 'white' : 'wheat')};
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

export const CardChip=styled.div`
    position: absolute;
    top: 86px;
    left: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #101010;
`;

export const CardChipShape=styled.div`
    width: 43px;
    height: 9px;
    background: #EFB35B;
    border-radius: 1px;
    margin-bottom: 1px;
    &:last-child{
        margin-bottom: 0;
        border-radius: 1px 1px 3px 3px;
    }
    &:first-child {
        border-radius: 3px 3px 1px 1px;
    }
    &:first-child:after {
        content: "";
        position: absolute;
        background: #EFB35B;
        border: 1px solid #101010;
        width: 12px;
        height: 23px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
    }
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 12px solid #fab25e40;
        border-bottom: 8px solid transparent;
        left: -20px;
        top: 7px;
        }
`;

export const CardNumber=styled.div`
    position: relative;
    top: 62%;
    padding-left: 30px;
    font-size: 18px;
    font-weight: 750;
    color:${({yellowTxt})=>(yellowTxt ? '#ffc500' : 'whitesmoke')};
    letter-spacing: 1px;
`;


export const CardMerchant=styled(Visa)`
    color: white;
    height: 60px;
    float: right;
    margin-top: 50px;
    margin-right: 30px;
`;

export const CardUser=styled.div`
    position: relative;
    top: 70%;
    display: flex;
    left: 30px;
    color: #ffffff;
`;

export const CardUserName=styled.span`
    text-transform: uppercase;
    width: 50%;
    font-size: 15px;
    letter-spacing: 1.4px;
    font-weight: 700;
`;

export const CardUserValid=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom:10px;
    margin-left: 80px;
`;

export const CardUserValidText=styled.div`
    display: inline-flex;
    font-size: 10px;
    margin-bottom: 5px;
    text-shadow: 0 0 3px #060606;
`;

export const CardUserValidDate=styled.div`
    font-size: 13px;
    font-weight: 700;
    text-shadow: 0 0 3px #060606;
`;

export const CardBack=styled.div`
    width: 370px;
    height: 240px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 38px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    background-color: ${({greyBg})=>(greyBg ? '#485461' : '#a4508b')};
    background-image: ${({greyGrad})=>(greyGrad ? 'linear-gradient(315deg, #485461 0%, #28313b 74%)' : 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)')};
    z-index: 11;
    animation-name: ${cardBack};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
`;

export const CardPlast=styled.div`
    position: absolute;
    left: 0;
    width: 15px;
    height: 100%;
`;

export const CardContact=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardContactText=styled.p`
    font-size: 9px;
    font-weight: 700;
    padding: 7px 20px;
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

export const CardStrip=styled.div`
    width: 100%;
    height: 45px;
    background: #131313;
    margin: 4px 0;
`;

export const CardCompany=styled.div`
    width: 90%;
`;

export const CardCompanyAddress=styled.div`
    font-size: 8px;
    margin-top: 15px;
    margin-left: 20px;
`;

export const CardCompanyMsg=styled.div`
    font-size: 8px;
    margin-top: 2px;
    margin-left: 20px;
`;

export const CardCVV=styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
`;

export const CardCVVStrip=styled.div`
    width: 200px;
    background-color: ${({greyCVV})=>(greyCVV? '#b3b3b3' : 'wheat')};
    height: 45px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const CardCVVNum=styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
`;

export const CardCVVText=styled.span`
    background-color: ${({greyCVV})=>(greyCVV? '#b3b3b3' : 'wheat')};
    margin-left: 15px;
    padding: 2px 7px;
    font-style: italic;
    font-weight: 700;
    color: #000000;
    font-size: 16px;
`;

export const CardCVVWarning=styled.p`
    font-size: 5.5px;
    margin-left: -150px;
    margin-top: 4px;
`;

export const CardBackBottom=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 7px;
    position: absolute;
    bottom: 0;
    left: 30%;
    font-size: 10px;
`;

export const CompanyDec=styled.p`
    margin-bottom: 5px;
    margin-left: 160px;
`;

export const AccNo=styled.h4`
    font-size: 1.5rem;
    text-align: center;
    position: relative;
    bottom: 7rem;
`

export const IndexContainer=styled.div`
    grid-area: 1 / 2 / 6 / 6;
    max-width: 100%;
    overflow: hidden;
`
export const IndexWrap=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-height:28rem;
`
export const ArrowLeft=styled(FaArrowAltCircleLeft)`
    height: 50px;
    width: 50px;
    position: relative;
    right:11rem;
    bottom: 3rem;
    cursor: pointer;
`
export const ArrowRight=styled(FaArrowAltCircleRight)`
    height: 50px;
    width: 50px;
    position: relative;
    left:45rem;
    bottom: 3rem;
    cursor: pointer;
`

export const Headline=styled.h1`
    margin-top:2rem;
    margin-left: 2rem;
    font-weight: 700;
    text-align:left;
`
export const Headline1=styled.h2`
    font-size: 1.75rem;
    font-weight: 600;
    text-align:center;
`

export const AddIcon = styled(GrAddCircle)`
    height: 5rem;
    width: 5rem;
`;


export const AddCard=styled(Link)`
    background-color: #1fbd71;
    padding: 5rem 1rem 1rem 1rem;
    border-radius: 50%;
    position: relative;
    top:2rem;
    left: 36rem;
`

export const AddContainer=styled.div`
    grid-area: 1 / 2 / 6 / 6;
`

export const AddCardWrapper=styled.div`
    background-color: #1fbd71;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr;
    grid-column-gap: 21px;
    grid-row-gap: 0px;
    padding: 40px 30px 50px 30px;
    margin-top: 3rem;
    height: 25rem;
    max-width: 80%;
    margin-left: 10%;
    border-radius: 10px;
`
export const AddCardForm=styled.form`
    grid-area: 1 / 2 / 6 / 3; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 3rem 1rem 1rem 2rem;
    width: 90%;
    z-index:1;
`
export const AddCardImg=styled.img`
    grid-area: 1 / 1 / 6 / 2;
    max-height: 30rem;
    max-width: 30rem;
`

export const Label=styled.label`
    margin-bottom: 0.75rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: black;

`;
export const CardSelect=styled.select`
    padding: 8px 8px;
    font-size: 17px;
    color: black;
    background-color: black;
    color: white;
    margin-bottom: 1rem;
`
export const CardOptions=styled.option`
    font-size: 17px;
`

export const AddCardBtn=styled(Link)`
    text-decoration: none;
    text-align: center;
    margin-top:2rem;
    background: black;
    padding: 10px 10px;
    border: none;
    border-radius: 30px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
    width:8rem;
`
