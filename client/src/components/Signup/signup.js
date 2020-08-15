import React, { useState } from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import style from "./signup.css";
import axios from "axios";
import Header from "../Header/header";
import Footer from "../Footer/footer";

function Signup() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [signupInput, setInput] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmed: ""
        // confirm: ""
    })

    const handleInputChange = event => {
        setInput({
            ...signupInput,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(signupInput);
        if (signupInput.confirmed !== signupInput.password) {
            document.getElementById("error").style.display = "block"
            return
        }
        axios.post("/api/users/signup", signupInput)
            .then(({ data }) => {
                if (data.message === "Signed up and logged in") {
                    window.location.replace("/")
                }
            })
    }


    return (
        <>
            <Header loggedIn={loggedIn} id={id} username={username} func={{ setLogin, setUsername, setId }} />
            <Row className="mt-5 profileCardRow loginSignupRowSize">
                <Col xs="8" className="offset-2">
                    <Container>
                        <Card className="signupCard">
                            <CardTitle className="text-center loginTitle darkGrayText">SIGNUP
                    <hr className="signupLine"></hr>
                            </CardTitle>
                            <CardBody>

                                <Form>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleFirstName">First Name</Label>
                                                <Input type="text" name="firstName" id="exampleFirstName" placeholder="First Name" onChange={handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleLastName">Last Name</Label>
                                                <Input type="text" name="lastName" id="exampleLastName" placeholder="Last Name" onChange={handleInputChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="username" id="exampleEmail" placeholder="test@example.com" onChange={handleInputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" onChange={handleInputChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="confirmPassword">Confirm Password</Label>
                                        <Input type="password" name="confirmed" id="confirmPassword" placeholder="Confirm password here" onChange={handleInputChange} />
                                    </FormGroup>
                                    <p id="error" style={{ display: "none" }}>Passwords don't match. Please try again.</p>
                                    <Button className="btnHover hvr-fade" onClick={handleFormSubmit}>Submit</Button> Already a member? <a className="iconHvr-fade2" href="/login">Login </a>
                                </Form>
                            </CardBody>
                        </Card>
                    </Container>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Signup;