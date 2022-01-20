import React from 'react';
import {
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer, 
    AreaChart,
    Area
} from 'recharts';

class HomeTransChart extends React.Component {

    constructor(props){
        super(props);
        this.state={
            id: this.props.user,
            data: null
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/transactionhistory/${this.state.id}`)
        .then(respone => respone.json())
        .then(log => {
            this.setState({data: log});
        });     
    }

    render() {
        return (
            <>
                <ResponsiveContainer width="80%" height="70%">
                    <AreaChart width={300} height={50} data={this.state.data}>
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

export default HomeTransChart;