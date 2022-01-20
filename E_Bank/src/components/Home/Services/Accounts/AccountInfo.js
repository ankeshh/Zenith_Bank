import React from "react";
import {AccountStatementComp} from "../Transaction/TransactionElements"
import '../Transaction/TransactionHistory.css';

const colName =  ['From', 'To', 'Amount', 'Date', 'Balance'];
class AccountInfo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {},
        };
    }

    componentDidMount(){
        fetch(`http://localhost:3000/accounthistory/${this.props.account}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({data: log});
        });
    }

    Table = ({list, colName, width="100%", height="auto"}) => {
        return (
            <div>
                {list.length > 0 && (<table cellSpacing="1" style={{width: width, height: height}}>
                    <thead>
                        <tr>
                            {colName.map((headerItem, index)=>(
                                <th key={index} style={{fontSize: "13px", color: "black"}}>{headerItem.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(list).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2} style={{fontSize: "15px"}}>{value}</td>
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
            <AccountStatementComp>
                <this.Table list={this.state.data} colName={colName}/>
            </AccountStatementComp>
            </>
        );
    }
}

export default AccountInfo;

