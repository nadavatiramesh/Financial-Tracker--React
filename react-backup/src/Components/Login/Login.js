import React, {useState} from "react";
import { ListGroup, Button, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from "react-bootstrap";
import { MAIN_LOGO } from "../../images/images"
import './Login.scss';

const changeForm =(formtype)=>{
console.log(formtype);
}
function Login() {
    const [formname, setFormname] = useState(0);

    return (
        <div className="login-page"><Row className="m-0"  >
            <Col lg={8} md={12} sm={12} className="login-left">
                <Image src={MAIN_LOGO} />
                <div className="login-btn">
                <Button variant="secondary" onClick={changeForm("signin")}>Sign In</Button>
                <Button variant="secondary" onClick={changeForm("register")}>Register</Button>
                </div>
            </Col>
            <Col lg={4} md={12} sm={12}className="login-right">
                {/* <div className="login-form">
                <h3>Sign In</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="sm" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="sm" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" size="sm" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="sm" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div> */}
                <div className="registor-form">
                <h3>Register</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" size="sm" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" size="sm" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" size="sm" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" size="sm" placeholder="Confirm Password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="sm" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row></div>
    );
}

export default Login;
