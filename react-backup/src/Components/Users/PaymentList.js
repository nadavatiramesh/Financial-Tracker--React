import React from "react";
import { Container, Row, Col, Card, Form, InputGroup, FormControl, Button, Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../Layout/Header/Header';
import AddPayment from './AddPayment';
import paymentList from './paymentList.json'

//import userlist from './userList.json';
class PaymentList extends React.Component {
    constructor() {
        super();
        this.state = {
            Items: [],
            showPanel: false,
            panelTitle: "",
            editData: [],
            headerLinks: [
                {
                    key: 0,
                    name: "Add Payment",
                    iconName: faPlus,
                    onclick: this.addPayment
                }
            ]
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/User')
            .then(response => { return response.json(); })
            .then(data => {
                this.setState({
                    isLoaded: true,
                    Items: data,
                })
            })

    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    nameChange = () => {
        console.log("namechange")
    }
    colorClick = () => {
        this.setState({
            color: this.props.clr,
            text: this.props.text
        });

    }
    searchFilter = (e, value) => {
        this.setState({
            searchData: value
        })
        const result = this.state.Items.filter(item => item.name.includes(value));
        this.setState({
            searchedItems: result
        })
    }
    addPayment = (item, type) => {
        this.setState({
            showPanel: !this.state.showPanel,
            panelTitle: type
        })
    }
    editUser = (item, type) => {
        var itemData = [item];
        this.setState({
            editData: [...itemData],
            showPanel: !this.state.showPanel,
            panelTitle: type,
        })
    }
    closePanel = (value) => {
        this.setState({
            showPanel: value
        })

    }
    render() {
        console.log("render");
        const { Items, searchData, searchedItems, headerLinks, showPanel, panelTitle } = this.state;
        const listData = paymentList;
        const listCredit = listData.map(list =>
            <tr id={list.paymentId}>
                {list.mode === "CREDIT" ?
                    <>
                        <td style={{ textAlign: "left" }}><Button variant={"light"} size={"sm"} onClick={(e) => this.editUser(list, "Edit User")}>{list.paymentId}</Button></td>
                        <td style={{ textAlign: "left" }}>{list.senderName}</td>
                        <td style={{ textAlign: "left" }}>{list.dateOfpayment}</td>
                        <td style={{ textAlign: "left" }}>{list.amount}</td>
                        <td style={{ textAlign: "left" }}>{list.lastName}</td>
                    </>
                    : ""}
            </tr>
        )
        const listDebit = listData.map(list =>
            <tr id={list.paymentId}>
                {list.mode === "DEBIT" ?
                    <>
                        <td style={{ textAlign: "left" }}><Button variant={"light"} size={"sm"} onClick={(e) => this.editUser(list, "Edit User")}>{list.paymentId}</Button></td>
                        <td style={{ textAlign: "left" }}>{list.receiverName}</td>
                        <td style={{ textAlign: "left" }}>{list.dateOfpayment}</td>
                        <td style={{ textAlign: "left" }}>{list.amount}</td>
                        <td style={{ textAlign: "left" }}>{list.lastName}</td>
                    </>
                    : ""}
            </tr>
        )
        return (
            <>
                <Container fluid className="main-content">
                    <Header menuLinks={headerLinks} />
                    <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="1" title="Debit">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: "left" }} scope="col">Payment Id</th>
                                            <th style={{ textAlign: "left" }} scope="col">Sender Name</th>
                                            <th style={{ textAlign: "left" }} scope="col">Date Of Payment</th>
                                            <th style={{ textAlign: "left" }} scope="col">Amount Paid</th>
                                            <th style={{ textAlign: "left" }} scope="col">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listDebit}
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab eventKey="2" title="Credit">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: "left" }} scope="col">Payment Id</th>
                                            <th style={{ textAlign: "left" }} scope="col">Receiver Name</th>
                                            <th style={{ textAlign: "left" }} scope="col">Date Of Payment</th>
                                            <th style={{ textAlign: "left" }} scope="col">Amount Received</th>
                                            <th style={{ textAlign: "left" }} scope="col">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listCredit}
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
                    {showPanel ? <AddPayment panelType={panelTitle} dataValues={this.state.editData} closePanel={this.closePanel} /> : ""}

                </Container>
            </>
        );
    }
}
// function Header(props) {
//   return <h2 style={{color:props.color}}>{props.name}</h2>;
//     }

export default PaymentList;
