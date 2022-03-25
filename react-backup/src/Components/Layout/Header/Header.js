import React from "react";
import { Navbar, Nav, Container, Image, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green",
      text: "Header",
      toggleMenu: false
    }
    console.log("constuctor");
  }
  componentDidMount() {
    console.log("componentdidmount")
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
  sideToggle = (event) => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
    this.props.menuLinks[parseInt(event.target.id)].onclick(this.state.toggleMenu,event.target.innerText);
    event.preventDefault();
  }
  colorClick = () => {
    this.setState({
      color: this.props.clr,
      text: this.props.text
    });

  }
  render() {
    console.log("render");
    const { mainProps, menuLinks } = this.props;
    const menuList = menuLinks?.map((menu) => (
      <Nav.Link  id={menu.key} onClick={this.sideToggle}><FontAwesomeIcon icon={menu.iconName}  /> {menu.name}</Nav.Link>
    ))
    const barIcon = mainProps && mainProps.length && mainProps[0]?.toggleIcon;
    const userIcon = mainProps && mainProps.length && mainProps[0]?.profileIcon;
    const classProps = mainProps && mainProps.length && mainProps[0]?.className;
    const fixProps = mainProps && mainProps.length && mainProps[0].topFixed;
    return (
      <>
        <Navbar  expand="lg" fixed={fixProps} className={classProps} >
          <Container fluid>
            <Navbar />
            {barIcon ? <Button variant="link" ><FontAwesomeIcon icon={barIcon} className="menu-icon" /></Button> : ""}
            <Nav className="me-auto">
              {menuList}
            </Nav>
            <div className="d-flex">
              {userIcon ? <Button variant="outline-secondary"><FontAwesomeIcon icon={userIcon } /></Button> : ""}
            </div>
          </Container>
        </Navbar>

      </>
    );
  }
}
// function Header(props) {
//   return <h2 style={{color:props.color}}>{props.name}</h2>;
//     }

export default Header;
