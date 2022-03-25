import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import './SideNav.scss';

function SideNav() {
    function navClick  (e){
        // e.preventDefault();
        console.log(e.target.id)
    }
    
    return (
        <><ListGroup variant="flush">
            <ListGroup.Item>  <Button variant="link" id="home" onClick={navClick}><FontAwesomeIcon icon={faHome} className="sidenav-icon" />Home</Button></ListGroup.Item>
            <ListGroup.Item><Button variant="link" id="userlist" onClick={navClick}><FontAwesomeIcon icon={faUsers} className="sidenav-icon" /> List User</Button></ListGroup.Item>
        </ListGroup></>
    );
}

export default SideNav;
