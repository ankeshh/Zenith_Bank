import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='#0'>Developers</FooterLink>
                            <FooterLink to='#0'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Locate Us</FooterLinkTitle>
                            <FooterLink to='#0'>VIT Vellore</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Constact Us</FooterLinkTitle>
                            <FooterLink to='#0' >Contact</FooterLink>
                            <FooterLink to='#0'>Support</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="//www.instagram.com/vellore_vit/">Instagram</FooterLink>
                            <FooterLink href="//www.facebook.com/vituniversity/" >Facebook</FooterLink>
                            <FooterLink href="//twitter.com/VIT_univ">Twitter</FooterLink>
                            <FooterLink href="//www.linkedin.com/school/vellore-institute-of-technology/" >LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='#0'>Zenith Bank</SocialLogo>
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

export default Footer;