import React from 'react'
import {
    DeveloperContainer, DeveloperWrapper,
    DeveloperRow,Column1,Column2,TextWrapper,
    Name, Intro, Contacts,ImgWrap,Img,SocialIconLink,SocialIcons
} from './OurDevelopersElements';

import {FaGithub, FaLinkedin} from 'react-icons/fa';

const AboutUs = ({id,lightText,topLine,headline,description,imgStart,img,alt,darkText,githubLink,linkedinLink}) => {
    return (
        <>
            <DeveloperContainer id={id}>
                <DeveloperWrapper>
                    <DeveloperRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Name>{topLine}</Name>
                                <Intro lightText={lightText}>{headline}</Intro>
                                <Contacts darkText={darkText}>{description}</Contacts>
                                <SocialIcons>
                                    <SocialIconLink href={linkedinLink} target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                                    <SocialIconLink href={githubLink} target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                        </SocialIcons>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </DeveloperRow>
                </DeveloperWrapper>
            </DeveloperContainer>
        </>
    )
}

export default AboutUs
