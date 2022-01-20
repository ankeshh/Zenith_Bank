import React from 'react';
import './Cards.css';
import {
    Card, CardContainer, CardFront, CardFrontBg, CardBrand,
    CardBrandLogo, CardBrandName, CardChip, CardChipShape,
    CardNumber,CardMerchant, CardUser, CardUserName,
    CardUserValid, CardUserValidText, CardUserValidDate, CardBack,
    CardPlast, CardContact, CardContactText, CardStrip, CardCompany,
    CardCompanyAddress, CardCompanyMsg, CardCVV, CardCVVStrip,
    CardCVVNum, CardCVVText, CardCVVWarning, CardBackBottom, CompanyDec,AccNo
} from './CardElements';

let greyBg='', greyGrad='', lightTxt='', yellowTxt='', greyCVV='';

const CardDesign =(props)=>{
        const {cards}=props;
        if(cards.card_type==='credit'){
            greyBg=true; greyGrad=true; lightTxt=false; yellowTxt=true; greyCVV=false;
        }
        else{
            greyBg=true; greyGrad=false; lightTxt=true; yellowTxt=false; greyCVV=true;
        }
        return (
            <Card>
                <CardContainer>
                    <CardFront>
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
                    </CardFront>
                    <CardBack greyBg={greyBg} greyGrad={greyGrad}>
                        <CardPlast></CardPlast>
                        <CardContact>
                            <CardContactText>Customer Service: 0855 0055 0055</CardContactText>
                            <CardContactText>www.zenithbank.com</CardContactText>
                        </CardContact>
                        <CardStrip></CardStrip>
                        <CardCompany>
                            <CardCompanyAddress>7741 Hayvenhurst Ave, Van Nuys, CA 91406 Los Angeles / Californiya - USA</CardCompanyAddress>
                            <CardCompanyMsg>A credit card is different from a debit card. Installments are cut from the account on monthly basis</CardCompanyMsg>
                        </CardCompany>
                        <CardCVV>
                            <CardCVVStrip greyCVV={greyCVV}>
                            </CardCVVStrip>
                            <CardCVVNum>
                                <CardCVVText greyCVV={greyCVV}>
                                    { cards.cvv.length<3 ? '0'.concat(cards.cvv) : cards.cvv  }
                                </CardCVVText>
                                CVV
                            </CardCVVNum>
                        </CardCVV>
                        <CardCVVWarning>NOT VALID WITHOUR AUTHORIZED SIGNATURE</CardCVVWarning>
                        <CardBackBottom>
                            <CompanyDec>Zenith Bank</CompanyDec>
                        </CardBackBottom>
                    </CardBack>
                </CardContainer>
                <AccNo>Your linked account number is {cards.acc_no}</AccNo>
            </Card>
        )
}

export default CardDesign