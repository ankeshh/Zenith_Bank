import styled from 'styled-components'

export const DeveloperContainer=styled.div`
    color:#fff;
    background: #010606;
    margin-bottom:-2rem;
    @media screen and (max-width:768px){
        padding: 100px 0;
    }
`

export const DeveloperWrapper =styled.div`
    display: grid;
    z-index:1;
    height: 450px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 24px;
    justify-content: center;
`
export const DeveloperRow=styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width:768px){
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)} ;
    }
`
export const Column1=styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area: col1;
`
export const Column2=styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area: col2;
`
export const TextWrapper=styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const Name=styled.p`
    color:#01bf71;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-align: left;
`

export const Intro=styled.h1`
    margin-bottom: 24px;
    text-align: left;
    font-size:20px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=>(lightText? '#f7f8fa':'#010606')};

    @media screen and (max-width:480px){
        font-size: 32px;
    }
`
export const Contacts =styled.p`
    text-align: left;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText})=>(darkText ? '#010606' : '#fff')};
`
export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap=styled.div`
    max-width: 350px;
`

export const Img=styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius:150px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
`;

export const SocialIconLink = styled.a`
    color: white;
    font-size: 24px;
`;