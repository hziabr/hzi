import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from '../../../db/mock.json';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Instances extends Component {
    constructor() {
        super();
        this.state = { data: data };

    }
    handleChange(event) {
    }
    render() {
        return (
            <LineChart width={1200} height={300} data={this.state['data']}
                       margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid vertical={false} stroke="#e1e1e1" strokeDasharray="0"/>
                <Tooltip/>
                <Legend iconType={"circle"} align={'left'}/>
                <Line type="monotone" activeDot={false} dot={false} dataKey="Create" stroke="#b229ab"/>
                <Line type="monotone" activeDot={false} dot={false} dataKey="Active" stroke="#1fbec6"/>
                <Line type="monotone" activeDot={false} dot={false} dataKey="Billed_Instance_Estimated" stroke="#089141" />
            </LineChart>
        );
    }
}

export default Instances;

const wrapper = document.getElementById("instances-wrapper");
wrapper ? ReactDOM.render(<Instances />, wrapper) : false;
