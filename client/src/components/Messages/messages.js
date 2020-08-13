import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import { Card, CardTitle, CardBody, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import style from "./messages.css";

function Messages() {
    return (
        <div className="overflowMessage">
            <Header />


            <Row className="messageRow">
                <Col className="messageCOL col-4">
                    <Card className="sideCard">
                        <CardTitle className="text-center topSpace">
                            Messages</CardTitle>
                        <CardBody className="text-center">
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                            <Card className="cardPaddingMargin">
                                Test
                            </Card>
                         
                        </CardBody>
                    </Card>

                </Col>
                <Col>
                    <Card className="mainMessageCard col-8">
                        Test
                    </Card>
                    <Form inline  className="formBottom">
                        <FormGroup inline className="messageText">
                            <Label for="message" hidden>Message</Label>
                            <Input type="text" name="message" id="messageID" placeholder="Write Message Here" />
                        </FormGroup>
                        <Button>Send</Button>

                    </Form>
                </Col>

            </Row>
{/* 
            <div className="fixed-bottom">
                <Footer />
            </div> */}
        </div>
    )
}

export default Messages