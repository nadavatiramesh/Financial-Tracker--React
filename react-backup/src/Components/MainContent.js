import React from "react";
import AddPayment from "./Users/AddPayment";
import PaymentList from "./Users/PaymentList";
import Login from "./Login/Login";
import { Row, Col } from "react-bootstrap";
import SideNav from '../Components/Layout/SideNav/SideNav';
import Header from '../Components/Layout/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headClicked: true,
            visiblePanel: false,
            panelType:"",
            navProps: [{ toggleIcon: faBars, profileIcon: faUser, className: "main-navbar", topFixed: "top" }]
        }
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    headerToggle(Data) {
        const dataUpdate = Data;
        if (Data) {
            this.setState({
                headClicked: dataUpdate
            })
        }
    }
    showSidepanel = (value,item,type) => {
        this.setState({
            visiblePanel: true,
            panelType:type
        })
        
    }
    render() {
        const { headClicked, navProps, headerLinks, visiblePanel, panelType } = this.state;
        return (
            <>
                <Row className="m-0">
                    <Header hideHeader={true} sideClick={this.headerToggle} mainProps={navProps} />
                    {/* <Col xs={3} md={3} className={headClicked ? "sidemenu collapsed" : "sidemenu "}>
                        <SideNav />
                    </Col> */}
                    <Col xs={12} md={12} className={headClicked ? "main-page expand" : "main-page "}>
                        <PaymentList  />
                    </Col>
                </Row>
                {visiblePanel ? <>
                {/* <div className="overlay"></div>
                    <div className="panel" >
                        <>
                            <Button variant="link" onClick={() => this.setState({ visiblePanel: false })} className="panel-close"><FontAwesomeIcon icon={faXmark} /></Button>
                            <h4>{panelType}</h4>
                            <AddUser />
                            <div className="panel-footer">
                                <div className="btn-grp">
                                    <Button variant="primary"  size="sm">Save</Button>
                                    <Button variant="light" size="sm" onClick={() => this.setState({ visiblePanel: false })}>Cancel</Button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </>
                    </div> */}
                    </> 
                    : ""}
            </>
        );
    }
}
// function Header(props) {
//   return <h2 style={{color:props.color}}>{props.name}</h2>;
//     }

export default MainContent;
