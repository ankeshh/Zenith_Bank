import React, {useState} from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    Heroh1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection= () => {
    const [hover,setHover]=useState(false);
    const onHover=()=>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <Heroh1>Virtual Banking Experience like never before</Heroh1>
            <HeroP>Sign up to use our services</HeroP>
            <HeroBtnWrapper>
                <Button onClick={() => window.location.href = "/signin"}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true">
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
