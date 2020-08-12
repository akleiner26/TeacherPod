import React from "react";
import { Container, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Button, FormText, Row, CardText } from "reactstrap";
import style from "./login.css"

function Login() {
    return (
        <>
            <Container>
                <Card className="loginCard">
                    <CardTitle className="text-center loginTitle">Login
                    <hr className="line"></hr>
                    </CardTitle>
                    <CardBody>
                  
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="test@example.com" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Enter password here" />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Login;