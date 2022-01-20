import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container=styled.div`

    grid-area: 1 / 2 / 6 / 6;
    background-color: white;
    height: 700px;
`
export const EditContainer=styled.div`
    grid-area: 1 / 2 / 6 / 6;
    overflow: scroll;
    height: 800px;
    overflow-x:hidden;
`
export const UpdateContainer=styled.div`
    background-color: white;
    grid-area: 1 / 2 / 6 / 6;
    height: 800px;
`

export const FormWrap=styled.div`
    grid-area: 1 / 3 / 4 / 5; 
    background-color: white;
    max-height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 7rem;
    @media screen and (max-width:400px){
        height: 80%;
    }
`
export const EditWrap=styled.div`
    padding-top:20px;
    padding-bottom: 40px ;
`
export const UpdateWrap=styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:20px;
    padding-bottom: 40px ;
    margin-top: 3rem;
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
    background: black;
    max-width: 800px;
    height:60rem;
    width: 60%;
    z-index:1;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    display: grid;
    @media screen and (max-width:480px){
        padding: 32px 32px;
    }
`
export const EditForm=styled.form`
    background: black;
    max-width: 500px;
    max-height:44rem;
    width: 60%;
    z-index:1;
    margin: 0 auto;
    padding: 90px 40px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:480px){
        padding: 32px 32px;
    }
`
export const UpdateForm=styled.form`
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 50%;
    max-height: 50rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    z-index:1;
    border-radius: 10px;
`

export const Headline=styled.h1`
    margin-top: 20px;
    margin-bottom: 20px;
    color:black;
    font-size: 35px;
    font-weight: 700;
    text-align:center;
`;

export const Avatar=styled.img`
    max-width:20%;
    margin-left: 270px;
    margin-bottom: 20px;
`

export const Label=styled.h4`
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 350;
    color: #1fbd71;    
     
`;

export const EnterLabel=styled.h4`
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
    color: #1fbd71;    
`;

export const Detail=styled.h4`
    padding: 8px 8px;
    font-size: 20px;
    font-weight: 350;
    color: whitesmoke;
    text-align:center;
    font-weight: 600;
`

export const EditButton=styled(Link)`
    text-decoration: none;
    text-align: center;
    margin: 30px 260px;
    background: #01bf71;
    padding: 16px 16px;
    border: none;
    border-radius:30px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
    width: 12rem;
`

export const ChangePassword=styled(Link)`
    text-decoration: none;
    text-align: center;
    margin: 30px 260px;
    margin-top:5px;
    background: #01bf71;
    padding: 16px 16px;
    border: none;
    border-radius: 30px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
    width:12rem;

`

export const InputDetail=styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius:4px;
    width: 70%;
`

export const UpdateDetails=styled(Link)`
    text-decoration: none;
    text-align: center;
    margin: 30px 250px;
    background: #01bf71;
    padding: 16px 16px;
    border: none;
    border-radius:30px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
    width: 10rem;
`
export const VerifyPassword=styled(Link)`
    text-decoration: none;
    text-align: center;
    background: #01bf71;
    padding: 16px 16px;
    border: none;
    border-radius:30px;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
    max-width:12rem;
`
export const PasswordImg=styled.img`
    max-width:10.5rem;
    margin: 2rem 2rem 2rem 2rem;
`