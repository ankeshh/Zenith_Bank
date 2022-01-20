import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container=styled.div`
    min-height: 753px;
    bottom: 0;
    left: 0;
    right: 0;
    top:0;
    z-index:0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1) 100%);
`
export const FormWrap=styled.div`
    margin-top: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:400px){
        height: 80%;
    }
`

export const FormContent=styled.div`
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width:480px){
        padding: 10px;
    }
`

export const Form=styled.form`
    background: #010101;
    max-width: 400px;
    height:auto;
    width: 100%;
    z-index:1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:480px){
        padding: 32px 32px;
    }
`

export const Header=styled.h1`
    margin-bottom: 40px;
    color:#fff;
    font-size: 35px;
    font-weight: 400;
    text-align:center;
`
export const Content=styled.p`
    margin: 25px 10px;
    padding-bottom:20px;
    color:#01bf71;
`

export const OTPInput=styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius:4px;
`
export const OTPVerify=styled(Link)`
    text-decoration: none;
    text-align: center;
    margin-bottom: 20px;
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
`