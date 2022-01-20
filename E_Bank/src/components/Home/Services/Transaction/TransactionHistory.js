import React from "react";
import { ComponentWrapper } from "../../HomeElements";
import SideMenu from "../../modules/SideMenu";
import { HeadingText, SubText } from "../Accounts/AddAccountElements";
import {Heading} from "./TransactionElements";
import {TransTable} from "./TransactionHistoryElements";
import './TransactionHistory.css';

const colName =  ['From', 'To', 'Amount', 'Date', 'Balance'];
class TransactionHistory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {},
        };
    }

    componentDidMount(){
        fetch(`http://localhost:3000/transactionhistory/${this.props.user.id}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({data: log});
        });
    }

    Table = ({list, colName, width="100%", height="auto"}) => {
        return (
            <div>
                {list.length > 0 && (<table cellSpacing="0" style={{width: width, height: height, padding: "5px 10px"}}>
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
                            </tr>
                        ))}
                    </tbody>
                </table>)}
            </div>
    
        )
    }

    render(){
        return(
            <>
            <ComponentWrapper>
                <SideMenu/>
                <Heading>
                    <HeadingText>Account Statement</HeadingText>
                    <SubText>Below is a list of all account transactions</SubText>
                </Heading>
                <TransTable>
                    <this.Table list={this.state.data} colName={colName}/>
                </TransTable>
                
            </ComponentWrapper>
            </>
        );
    }
}

export default TransactionHistory;

