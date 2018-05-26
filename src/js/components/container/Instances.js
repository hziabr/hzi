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
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="1 "/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Create" stroke="#8884d8" activeDot={{r: 8}}/>
                <Line type="monotone" dataKey="Active" stroke="#b229ab" />
                <Line type="monotone" dataKey="Billed_Instance_Estimated" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

export default Instances;

const wrapper = document.getElementById("instances-wrapper");
wrapper ? ReactDOM.render(<Instances />, wrapper) : false;
