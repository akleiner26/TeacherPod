import React from "react"
import style from "./profile.css"
import { Card, Col, Row, CardTitle } from "reactstrap"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import PodTable from "../PodTable/podTable"

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
                            <Col>
                                <Row>
                                    <Col>
                                            <h2>
                                                <strong>Lillian Woods </strong>
                                            </h2>
                                            </Col>
                                </Row>
                                <p><strong>About:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus doloremque laboriosam? Saepe sapiente, atque delectus modi, voluptas quidem voluptatem iure dolorum perspiciatis expedita, voluptates quae eius repellat similique exercitationem?</p>
                                <a href="/messages">
                                <i class="fa fa-envelope mailIcon fa-2x" aria-hidden="true"></i>
                                </a>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <PodTable />
            <Footer />
        </>
    )
}

export default Profile