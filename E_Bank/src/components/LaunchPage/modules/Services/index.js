import React from 'react';
import Icon1 from '../../images/Service-1.svg';
import Icon2 from '../../images/Service-2.svg';
import Icon3 from '../../images/Service-3.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
    ServicesWrapper
} from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Issue Online Credit/Debit Cards</ServicesH2>
                    <ServicesP>Tired of going to bank offices just for a simple card issuance? Issue your brand new credit/debit card online with just few clicks and enjoy various offers!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Easy Transactions</ServicesH2>
                    <ServicesP>Enjoy quick and convenient international or domestic payments and transfers. Transfer money directly between accounts within seconds!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Secure Account</ServicesH2>
                    <ServicesP>Worried about someone accessing your account? Make use of our three-factor authentication which is easy to setup and provides utmost security.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;
