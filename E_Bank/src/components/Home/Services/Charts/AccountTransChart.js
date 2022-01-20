import React from 'react';
import {
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer, 
    Area,
    AreaChart
} from 'recharts';

class AccountTransChart extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/accounthistory/${this.props.acc_number}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({data: log})
        });
    }

    render() {
        return (
            <>
                <ResponsiveContainer width="90%" height="90%">
                    <AreaChart width={200} height={100} data={this.state.data}>
                        <XAxis dataKey="date"/>
                        <YAxis />
                        <Tooltip 
                            contentStyle={{borderRadius: 15, fontWeight: "bolder", background: "#01bf71", color: "black"}} 
                            itemStyle={{color: "black"}}
                        />
                        <Area type="monotone" dataKey="balance" stroke="black" fill="#01bf71" strokeWidth={4} />
                    </AreaChart>
                </ResponsiveContainer>
            </>
        )
    }
}

export default AccountTransChart;