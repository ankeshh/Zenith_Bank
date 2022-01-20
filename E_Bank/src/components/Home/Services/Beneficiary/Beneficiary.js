import React from "react";
import SideMenu from "../../modules/SideMenu";
import { HeadingText,SubText } from "../Accounts/AddAccountElements";
import { FormHeading, ComponentWrapper, FieldInput, FieldText, Form, AddBeneficiary, BeneficiaryTable, Heading, DeleteText, Button, OptionText, OptionInput } from "./BeneficiaryElements";

const colName = ['Beneficiary Name','Beneficiary Account','Bank','Fee','Action'];


const bankList = [
    {
        id: 1,
        Name: "HDFC Bank",
        Fee: 10
    },
    {
        id: 2,
        Name: "Indian Bank",
        Fee: 2
    },
    {
        id: 3,
        Name: "Punjab National Bank",
        Fee: 4
    },
    {
        id: 4,
        Name: "Emirates NBD",
        Fee: 15
    },
    {
        id: 5,
        Name: "RAK Bank",
        Fee: 5
    }
]
class Beneficiary extends React.Component {
    constructor(props){
        super(props);
        this.state={
           data: {},
           benef_acc_no: 0,
           benef_name: '',
           benef_bank: '',
           transfer_fee: 0
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/beneficiarylist/${this.props.user.id}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({data: log});
        });
    }

    deleteBeneficiary = (acc_no) => {
        fetch(`http://localhost:3000/beneficiary/remove/${acc_no}`)
        .then(respone => respone.json())
        .then(log => {
            alert("Beneficiary deleted")
            window.location.reload(false);
        });
    }

    addBeneficiary = () => {
        fetch('http://localhost:3000/beneficiary/request', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: this.props.user.id,
                user_name: this.props.user.name,
                benef_acc_no: this.state.benef_acc_no,
                benef_name: this.state.benef_name,
                benef_bank: this.state.benef_bank,
                transfer_fee: this.state.transfer_fee
            })
        })
        .then(response => response.json())
        .then(status => {
            alert(status);
            window.location.reload(false);
        })
        .catch(err => console.log(err));
    }

    onNameChange = (event) => {
        this.setState({benef_name: event.target.value})
    }

    onAccountChange = (event) => {
        this.setState({benef_acc_no: event.target.value})
    }

    onBankChange = (event) => {
        const value = event.target.value;
        bankList.map((bank, index) => {
            if(bank.id == value){
                this.setState({
                    benef_bank: bank.Name,
                    transfer_fee: bank.Fee
                })
            }
            
        })
    };

    Table = ({list, colName, width="auto", height="auto"}) => {
        return (
            <div>
                {list.length > 0 && (<table cellSpacing="0" style={{width: width, height: height, padding: "5px 10px", textAlign: 'center'}}>
                    <thead>
                        <tr>
                            {colName.map((headerItem, index)=>(
                                <th key={index}>{headerItem.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>{value}</td> 
                                ))}
                                <td><DeleteText onClick={() => this.deleteBeneficiary(obj.benef_acc_no)}>Remove</DeleteText></td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>)}
            </div>
    
        )
    }

    render() {

        const bank= bankList.map((bank, index) => {
            return <OptionInput key={index} value={bank.id}>{bank.Name} with fee ${bank.Fee}</OptionInput>
        });

        return(
            <>
                <ComponentWrapper>
                    <SideMenu/>
                    <Heading>
                        <HeadingText>Beneficiary</HeadingText>
                        <SubText>Here is a list of all your beneficiaries</SubText>
                    </Heading>
                    <BeneficiaryTable>
                        <this.Table list={this.state.data} colName={colName}/>
                    </BeneficiaryTable>
                    <AddBeneficiary>
                        <Form>
                            <FormHeading>Add a new beneficiary</FormHeading>
                            <FieldText>Beneficiary name: </FieldText>
                            <FieldInput type="text" id="name" required onChange={this.onNameChange}/>
                            <FieldText>Beneficiary bank: </FieldText>
                            <OptionText onChange={this.onBankChange} defaultValue={'DEFAULT'}>
                                <OptionInput value="DEFAULT" disabled>Select bank</OptionInput>
                                {bank}
                            </OptionText>
                            <FieldText>Beneficiary account </FieldText>
                            <FieldInput type="number" id="account" required onChange={this.onAccountChange}/>
                            <Button onClick={this.addBeneficiary}>Send request</Button>
                        </Form>
                    </AddBeneficiary>
                </ComponentWrapper>
            </>
        )
    }
}

export default Beneficiary;