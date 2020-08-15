import React, { useState, useEffect } from "react"
import "./profile.css"
import { Card, Col, Row, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import PodTable from "../PodTable/podTable"
import ProfileModal from "../ProfileModal/ProfileModal";
import API from "../../utils/API"

const Profile = (props) => {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [teacher, setTeacher] = useState({
        firstName: "",
        lastName: "",
    })
    const [pods, setPods] = useState([]);
    let key = props.match.params.id;
    const {
        buttonLabel
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        API.getTeacher(key)
            .then(res => {
                console.log(res);
                setTeacher(res.data[0])
                console.log(teacher)
                setPods(res.data[0].pods)
            }
            ).catch(err => console.log(err));
    }, [key])

    const openProfileEditor = event => {
        setModal(true);
    }


    return (
        <>
            <Header loggedIn={loggedIn} username={username} id={id} func={{ setLogin, setUsername, setId }} />
            <Row className="mt-5 profileCardRow">
                <Col xs="8" className="offset-2">
                    <Card className="profileCard">
                        <CardTitle className="text-center loginTitle darkGrayText">PROFILE
                    <hr className="line"></hr>
                        </CardTitle>
                        <Row className="m-3">

                            <Col className="proPicCol" xs="6">
                                <img className="img-fluid teacherImage" alt="Lillian Woods" src={`../${teacher.image}`}></img>
                                {/* <Button className="btnHover hvr-fade mt-4" onClick={openProfileEditor}>Edit Profile</Button> */}
                                {/* <a href="/messages" className="iconHvr-fade">
                                    <i class="fa fa-envelope mailIcon fa-2x" aria-hidden="true"></i>
                                </a> */}
                                <Row>
                                    <Col></Col>
                                    <Col className="text-center">
                                        <i className="fa fa-pencil profileIcons hvr-fade" aria-hidden="true" onClick={openProfileEditor}></i>
                                    </Col>
                                    <Col className="text-center">
                                        <i className="fa fa-plus profileIcons hvr-fade" aria-hidden="true"></i>
                                    </Col>
                                    <Col className="text-center">
                                        <a href="/messages" className="iconHvr-fade">
                                            <i class="fa fa-envelope profileIcons mailIcon hvr-fade" aria-hidden="true"></i>
                                        </a>
                                    </Col>
                                    <Col></Col>
                                </Row>


                            </Col>

                            <Col>
                                <Row>
                                    <Col>
                                        <h2>
                                            <strong className="aquaText">{teacher.firstName + " " + teacher.lastName}</strong>
                                        </h2>
                                    </Col>
                                </Row>
                                {teacher.bio}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <PodTable pods={pods} />
            <Footer />

            <ProfileModal
                toggle={toggle}
                modal={modal}
                buttonLabe={buttonLabel}
                teacher={teacher}
            />
        </>
    )
}

export default Profile