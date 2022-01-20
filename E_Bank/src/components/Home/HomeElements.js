import styled from "styled-components";
import { RiHome4Line } from "react-icons/ri";
import { FaCashRegister, FaSearchLocation} from "react-icons/fa";
import { BsFillCreditCardFill, BsFillCalendar2Fill} from "react-icons/bs";
import { GiPiggyBank } from "react-icons/gi";
import {AiFillNotification} from "react-icons/ai"
import {IoIosContacts} from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


export const ComponentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 110px repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const SideGrid = styled.div`
    grid-area: 1 / 1 / 6 / 2;
    background: black;
    min-height:800px;
    max-height:auto;
    width: auto;
    padding-left: 0;
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const UserProfile = styled.img`
    width: 10px;
    height: 10px;
`;

export const UserDetail = styled.h2`
    font-weight: bold;
    color: black;
`;

export const SideGridElementComponent = styled.ul`
    padding-top: 20px;
    padding-left: 35px;
`;

export const SideGridElements = styled.li`
    display: flex;
    justify-items: center;
    padding-bottom: 10px;
    list-style-type: none;
`;


export const Heading = styled.div`
    grid-area: 1 / 2 / 2 / 6;
`;

export const HeadingText = styled.h1`
    padding: 20px 10px 0px 20px;
`;

export const SubText = styled.h3`
    padding: 5px 10px 20px 20px;
    font-weight: lighter;
`;

export const TransactionInfoGrid = styled.div`
    grid-area: 2 / 4 / 6 / 6;
`;

export const OtherServicesGrid = styled.div`
    grid-area: 4 / 2 / 6 / 4;
`;

export const IconText = styled(Link)`
    font-weight: bold;
    padding-bottom: 20px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
`;

export const DashboardIcon = styled(RiHome4Line)`
    color: #01bf71;
    height: 30px;
    width: auto;
    padding-right: 10px;
    cursor: pointer;
`;

export const TransactionIcon = styled(FaCashRegister)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const BeneficiaryIcon = styled(IoIosContacts)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const AccountIcon = styled(GiPiggyBank)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const CardIcon = styled(BsFillCreditCardFill)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const BillingIcon = styled(BsFillCalendar2Fill)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const MessageIcon = styled(AiFillNotification)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const LocationIcon = styled(FaSearchLocation)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`;

export const SettingsIcon=styled(IoSettingsSharp)`
    color: #01bf71;
    height: 25px;
    width: auto;
    padding-right: 10px;
    padding-left: 5px;
    cursor: pointer;
`

export const Balance = styled.div`
    border-radius: 20px;
    background: #ffffff;
    box-shadow:  10px 10px 28px #c4c4c4,
                -10px -10px 28px #ffffff;
    height: 300px;
    width: 400px;
`;

export const TotalBalanceText = styled.p`
    color: black;
    font-size: 10px;
    padding-top: 20px;
    align-items: center;
    
`;

export const TotalBalanceAmount = styled.h2`
    color: #01bf71;
    font-weight: bold;
    padding-left: 40px;
`;

export const Graph = styled.div`
    height: 200px;
`;

export const MessageCountWrapper = styled.div`
    height: 50px;
    width: 90%;
    background-color: #01bf71;
    display: flex;
    justify-content: space-between;
    margin-bottom:1rem ;
`;

export const MessageCountText = styled.h3`
    padding-top: 10px;
    padding-left: 10px;
`;

export const MessageCountBubble = styled.h3`
    width: 10px;
    background: black;
    padding: 15px 20px 15px 20px;
    color: white;
    font-size: 16px;
    height: 20px;
    text-align: center;
`;

export const CardInfoGrid = styled.div`
    grid-area: 2 / 2 / 4 / 4;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`;

export const BalanceGrid = styled.div`
    background-color: #01bf71;
    width: 90%;
    height: 100px;
    margin-bottom:1rem ;

`;

export const AmountCotainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BalanceText = styled.h3`
    padding-top: 10px;
    padding-left: 10px;
`;

export const BalanceAmount = styled.h1`
    padding: 10px 0px 0px 20px;
`;

export const BalanceStatement = styled(Link)`
    width: 100px;
    background: black;
    padding: 15px 20px 15px 20px;
    margin: 10px;
    color: white;
    font-size: 16px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
`;

export const TopCard = styled.div`
    background-color: #01bf71;
    width: 90%;
    height: 22rem;
`;

export const TopCardText = styled.h3`
    padding-top: 10px;
    padding-left: 10px;
`;