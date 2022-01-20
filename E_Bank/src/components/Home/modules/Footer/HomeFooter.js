import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './HomeFooterElements';

class HomeFooter extends React.Component{
    render(){
        return (
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo>Zenith Bank</SocialLogo>
                            <WebsiteRights>Zenith Banks © 2021 All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com/vituniversity/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                                <SocialIconLink href="//www.instagram.com/vellore_vit/" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                                <SocialIconLink href="//twitter.com/VIT_univ" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/school/vellore-institute-of-technology/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        )
    }
}

export default HomeFooter;