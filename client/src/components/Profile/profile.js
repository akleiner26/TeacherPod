import React from "react"
import style from "./profile.css"
import { Card, Col, Row, CardTitle } from "reactstrap"
import Header from "../Header/header"
import Footer from "../Footer/footer"

const Profile = () => {
    return (
        <>
            <Header />
            <Row className="mt-5">
                <Col xs="8" className="offset-2">
                    <Card className="profileCard">
                        <CardTitle className="text-center loginTitle">Profile
                    <hr className="line"></hr>
                        </CardTitle>
                        <Row className="m-3">
                            <Col className="proPicCol" xs="6">
                                <img className="img-fluid teacherImage" alt="Lillian Woods" src="images/fullSize/lillianWoodsImg.jpg"></img>
                            </Col>
                            <Col xs="6">
                                <h2><strong>Lillian Woods</strong></h2>
                                <p><strong>About:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus doloremque laboriosam? Saepe sapiente, atque delectus modi, voluptas quidem voluptatem iure dolorum perspiciatis expedita, voluptates quae eius repellat similique exercitationem?</p>
                                <Row className="m-2">
                                    <Col className="offset-4" xs="2">
                                <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                </Col>
                                <Col xs="2">
                                <i class="fa fa-book fa-2x" aria-hidden="true"></i>
                                </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Profile