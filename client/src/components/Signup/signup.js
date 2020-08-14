import React from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText, Col } from "reactstrap";
import style from "./signup.css"

function Signup() {
    return (
        <>
            <Container>
                <Card className="signupCard">
                    <CardTitle className="text-center signupTitle">Signup
                    <hr className="signupLine"></hr>
                    </CardTitle>
                    <CardBody>

                        <Form>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="firstName">First Name</Label>
                                        <Input type="text" name="firstName" id="exampleFirstName" placeholder="First Name" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="lastName">Last Name</Label>
                                        <Input type="text" name="lastName" id="exampleLastName" placeholder="Last Name" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="test@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input type="password" name="confirmpassword" id="confirmPassword" placeholder="Confirm password here" />
                            </FormGroup>
                            <Button className="btnHover hvr-fade">Submit</Button> Already a member? <a className="hrefColor" href="/login">Login </a>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Signup;