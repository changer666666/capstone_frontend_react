import React from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RightTable.css"
import { Container, Row, Col} from "react-bootstrap";

import { action } from '@storybook/addon-actions';
import { Vega, createClassFromSpec } from 'react-vega';
import data1 from './vega/data1.json';
import spec1 from './vega/spec1';
import spec2 from './vega/spec2';

const BarChart = createClassFromSpec({ spec: spec1 });
const code1 = `<Vega data={this.state.data} spec={this.state.spec} onSignalHover={this.handleHover} />`;

const code2 = `const BarChart = ReactVega.createClassFromSpec(barSpec);
<BarChart data={this.state.data} onSignalHover={this.handleHover} />`;

class RightTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageId : "1",
            source: "placeholder.gif",
            data: "",
            // data: data1,
            info: '',
            spec: spec1,
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleToggleSpec = this.handleToggleSpec.bind(this);
        this.handleUpdateData = this.handleUpdateData.bind(this);
        this.handlers = { tooltip: this.handleHover };
    }
    handleHover(...args) {
        action('hover', {
            limit: 5,
        })(args);
        this.setState({
            info: JSON.stringify(args),
        });
    }
    
    handleToggleSpec() {
        const { spec } = this.state;
        action('toggle spec')(spec);
        if (spec === spec1) {
            this.setState({ spec: spec2 });
        } else {
            this.setState({ spec: spec1 });
        }
    }
    
    handleUpdateData() {
        const table = [];
        for (let i = 1; i <= 20; i += 1) {
            table.push({
            amount: Math.round(Math.random() * 100),
            category: String.fromCharCode(65 + i),
            });
        }
        action('update data')(table);
        this.setState({ data: { table } });
    }    
    componentWillReceiveProps(nextProps) {
        if (this.props.imageId !== nextProps.imageId) {
            // console.log("in Righttable componentWillReceiveProps", nextProps.imageId);
            // this.state.imageId = nextProps.imageId;
            // // this.setState({ imageId: nextProps.imageid });
            // console.log("in Righttable", this.state.imageId);
        
            axios.get("http://localhost:5000/mosfetImage/" + nextProps.imageId, { responseType: 'arraybuffer' }).then((response) => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      '',
                    ),
                );
                this.setState({ source: "data:;base64," + base64 });
            });

            axios.get("http://localhost:5000/mosfetJson/" + nextProps.imageId).then((response) => {
                console.log(response.data);
                this.setState({data: response.data});
                console.log(this.state.data);
            });
        }
    }
    render() {
        const { data, spec, info } = this.state;
        return (
            <Container fluid style={{ margiLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0 }}>
                <Row id="righttable">               
                    <Col id="table" lg={{span: 5, offset: 2}}>
                        {/* <div style={{ float: 'right' }}>
                            <iframe
                                title="star"
                                src="https://ghbtns.com/github-btn.html?user=vega&repo=react-vega&type=star&count=true"
                                frameBorder="0"
                                scrolling="0"
                                width="100px"
                                height="20px"
                            />
                        </div>
                        <button type="button" onClick={this.handleToggleSpec}>
                            Toggle Spec 
                        </button>
                        <button type="button" onClick={this.handleUpdateData}>
                            Update data
                        </button>
                        <h3>
                            <code>&lt;Vega&gt;</code> React Component
                        </h3>
                        Will recompile when spec changes and update when data changes. */}
                        <pre>{code1}</pre>
                        <Vega data={data} spec={spec} signalListeners={this.handlers} />
                        {/* <h3>
                            <code>ReactVega.createClassFromSpec()</code>
                        </h3>
                        Use the given spec to create a reusable component. */}
                        <pre>{code2}</pre>
                        <BarChart data={data} signalListeners={this.handlers} />
                        {/* <div>
                            Hover info: <code>{info}</code>
                        </div> */}
                    </Col>

                    <Col id="table" lg={{span: 2, offset: 3}}>
                        <img class="img-responsive" src={this.state.source}  alt="RUL"/>
                    </Col>
                </Row> 
            </Container>
        );
    }
}

export default RightTable

