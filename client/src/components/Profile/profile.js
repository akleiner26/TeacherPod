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
    const [teacher, setTeacher] = useState({})
    const [pods, setPods] = useState([]);
    let key = props.match.params.id;
    const [profileData, setProfileData] = useState({
        prefix: "",
        firstName: "",
        lastName: "",
        image: "",
        gradesTaught: "",
        location: "",
        bio: ""
    })

    // For modal
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

                setProfileData({
                    prefix: teacher.prefix,
                    firstName: teacher.firstName,
                    lastName: teacher.lastName,
                    image: teacher.image,
                    gradesTaught: teacher.gradesTaught,
                    location: teacher.location,
                    bio: teacher.bio
                })
            }
            ).catch(err => console.log(err));
    }, [key])

    // Displays modal with form to edit profile
    const openProfileEditor = event => {
        setModal(true);
        console.log("==========================")
        console.log(profileData)
    }

    // Captures edits made in modal form
    const handleInputChange = event => {
        console.log(event.target.value)

        setProfileData({
            ...profileData,
            [event.target.name]: event.target.value
        })
    }

    const saveEdits = event => {
        event.preventDefault();

        toggle()

        console.log(event.target.data)

        let updatedProfileData = {
            prefix: "",
            firstName: "",
            lastName: "",
            location: "",
            image: "",
            gradesTaught: "",
            bio: ""
        }

        API.updateTeacherProfile(updatedProfileData)
            .then(res => {
                console.log(res);
                console.log("profile updated!")
            })
            .catch(err => console.log(err));
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
                                <img className="img-fluid teacherImage" alt="" src={`../${teacher.image}`}></img>
                                <Row>
                                    {teacher.username === username ? (
                                        <>
                                            <Col></Col>
                                            <Col className="text-center">
                                                <i className="fa fa-pencil profileIcons hvr-fade" aria-hidden="true" onClick={openProfileEditor}></i>
                                            </Col>
                                            <Col className="text-center">
                                                <i className="fa fa-plus profileIcons hvr-fade" aria-hidden="true"></i>
                                            </Col>
                                            <Col></Col>
                                        </>
                                    ) : (
                                            <Col className="text-center">
                                                <a href="/messages" className="iconHvr-fade">
                                                    <i className="fa fa-envelope profileIcons mailIcon hvr-fade" aria-hidden="true"></i>
                                                </a>
                                            </Col>
                                        )}
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

            {teacher.isTeacher === true ? (
                <PodTable pods={pods} />
            ) : (
                    <h4 className="text-center mt-5 mb-5">Student table coming soon...</h4>
                )}

            <Footer />

            <ProfileModal
                toggle={toggle}
                modal={modal}
                buttonLabe={buttonLabel}
                teacher={teacher}
                saveEdits={saveEdits}
                handleInputChange={handleInputChange}
                profileData={profileData}
            />
        </>
    )
}

export default Profile