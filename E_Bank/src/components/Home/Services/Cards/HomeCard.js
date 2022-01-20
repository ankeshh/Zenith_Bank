import React from 'react';
import './Cards.css';
import {
    Card, HomeCardContainer, HomeCardFront, CardFrontBg, CardBrand,
    CardBrandLogo, CardBrandName, CardChip, CardChipShape,
    CardNumber,CardMerchant, CardUser, CardUserName,
    CardUserValid, CardUserValidText, CardUserValidDate,
} from './CardElements';

let greyBg='', greyGrad='', lightTxt='', yellowTxt='';

const HomeCard =(props)=>{
        const {cards}=props;
        if(cards.card_type==='credit'){
            greyBg=true; greyGrad=true; lightTxt=false; yellowTxt=true; 
        }
        else{
            greyBg=true; greyGrad=false; lightTxt=true; yellowTxt=false;
        }
        return (
            <Card>
                <HomeCardContainer>
                    <HomeCardFront>
                        <CardFrontBg greyBg={greyBg} greyGrad={greyGrad}>
                            <CardBrand>
                                <CardBrandLogo lightTxt={lightTxt}>Zenith</CardBrandLogo>
                                <CardBrandName lightTxt={lightTxt}>{cards.card_type}</CardBrandName>
                            </CardBrand>
                            <CardChip>
                                <CardChipShape></CardChipShape>
                                <CardChipShape></CardChipShape>
                                <CardChipShape></CardChipShape>
                            </CardChip>
                            <CardNumber  yellowTxt={yellowTxt}>
                                { `${cards.card_number.slice(0,4)} ${cards.card_number.slice(4,8)}
                                    ${cards.card_number.slice(8,12)} ${cards.card_number.slice(12,16)}
                                    `
                                }
                            </CardNumber>
                            <CardMerchant></CardMerchant>
                            <CardUser>
                                <CardUserName>{cards.name}</CardUserName>
                                <CardUserValid>
                                    <CardUserValidText>VALID THRU</CardUserValidText>
                                    <CardUserValidDate>
                                    {
                                        `${cards.expiration_date.slice(5,7)}/${cards.expiration_date.slice(2,4)}` 
                                    }
                                    </CardUserValidDate>
                                </CardUserValid>
                            </CardUser>
                        </CardFrontBg>
                    </HomeCardFront>
                </HomeCardContainer>
            </Card>
        )
}

export default HomeCard