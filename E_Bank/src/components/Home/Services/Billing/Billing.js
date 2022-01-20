//NOT IMPLEMENTED
import React from "react";
import SideMenu from "../../modules/SideMenu";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ComponentWrapper, CalendarComponent, Heading, PayComponent, Summary, SummayHeading, Dues, DuesText, DuesButton } from "./BillingElements";
import { Button, CardWrapper, FieldInput, FieldText, Form, FormField, HeadingText, Picture, SubText } from "../Accounts/AddAccountElements";
import { DefaultAccount } from "../Billing/BillingElements";
import Invoice from '../../../LaunchPage/images/invoice.svg'

const locales = {"en-IN": require("date-fns/locale/en-IN")}
const localizer = dateFnsLocalizer({format,parse,startOfWeek,getDay,locales})
class Billing extends React.Component {
    constructor(props){
        super(props);
        this.state={
            bill: [],
            events: [],
            title: '',
            amount: 0,
            due_date: new Date(),
            new_bill: true
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/billinginfo/${this.props.user.id}`)
        .then(response => response.json())
        .then(bills => {
            this.setState({bill: bills})
        });

        fetch(`http://localhost:3000/checkdue/${this.props.user.id}`)
        .then(response => response.json())
    }

    createBill = () => {
        fetch('http://localhost:3000/addbill', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    owner_id: this.props.user.id,
                    title: this.state.title,
                    amount: this.state.amount,
                    due_date: this.state.due_date
                })
            })
            .then(response => response.json())
            .then(status => {
                alert(status);
            })
            .catch(err => console.log(err));
    }

    onValueChange = (event) =>{
        const id = event.target.id;
        const value = event.target.value;
        this.setState({[id]: value});
    }

    render() {
        return (
            <>
                <ComponentWrapper>
                    <SideMenu/>

                    {
                        this.state.new_bill
                        ?
                        <>
                        <Heading>
                        <HeadingText>Billing</HeadingText>
                        <SubText>Find your upcoming bills and pay them now</SubText>
                        </Heading>
                        <CalendarComponent>
                            <Calendar localizer={localizer} events={this.state.events} startAccessor="start" endAccessor="end" style={{height: 500, width: "auto"}}/>
                            {/* <Calendar onClickDay={(event)=>console.log(event)} value={new Date(2021,11,2)} value={new Date(2021,10,13)}/> */}
                        </CalendarComponent>
                        <PayComponent>
                            <Summary>
                                <SummayHeading>Upcoming dues</SummayHeading>
                                <Dues>
                                    <DuesText></DuesText>
                                    <DuesButton>Pay now</DuesButton>
                                </Dues>
                                <Dues>
                                    <DuesText>this is testing</DuesText>
                                    <DuesButton>Pay now</DuesButton>
                                </Dues>
                            </Summary>
                        </PayComponent>
                        </>
                        :
                        <>
                        <Heading>
                            <HeadingText>Add bill</HeadingText>
                            <SubText>Fill in the details below to add a new bill</SubText>
                        </Heading>
                        <DefaultAccount>
                        <CardWrapper>
                            <FormField>
                                <Picture src={Invoice}/>
                                <Form>
                                    <FieldText>Bill title</FieldText>
                                    <FieldInput type="text" id="title" onChange={this.onValueChange}></FieldInput>
                                    <FieldText>Amount</FieldText>
                                    <FieldInput type="number" id="amount" onChange={this.onValueChange}></FieldInput>
                                    <FieldText>Due date</FieldText>
                                    <FieldInput type="date" id="due_date" onChange={this.onValueChange}></FieldInput>
                                    <Button to="/billing" type="submit" onClick={this.createBill}>ADD</Button>
                                </Form>
                            </FormField>
                        </CardWrapper>
                        </DefaultAccount>
                        
                        </>
                    }

                    
                </ComponentWrapper>
            </>
        )
    } 
}

export default Billing;