import React, { useState, useEffect } from "react"
import "./profile.css"
import { Card, Col, Row, CardTitle } from "reactstrap"
import Header from "../Header/header"
import Footer from "../Footer/footer"
import PodTable from "../PodTable/podTable"
import StudentTable from "../StudentTable/StudentTable"
import ProfileModal from "../ProfileModal/ProfileModal";
import PodModal from "../PodModal/PodModal";
import StudentModal from "../StudentModal/StudentModal";
import MessageModal from "../MessageModal/messageModal";
import API from "../../utils/API"

const Profile = (props) => {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [id, setId] = useState("");
    const [teacher, setTeacher] = useState({
        prefix: "",
        firstName: "",
        lastName: "",
        image: "",
        gradesTaught: "",
        location: "",
        bio: ""
    })
    const [pods, setPods] = useState([]);
    let key = props.match.params.id;
    console.log(teacher)
    // For modal
    const { buttonLabel } = props;
    const [profileModal, setProfileModal] = useState(false);
    const [podModal, setPodModal] = useState(false);
    const [studentModal, setStudentModal] = useState(false);
    const [messageModal, setMessageModal] = useState(false);

    const toggle = () => setProfileModal(!profileModal);
    const toggle2 = () => setPodModal(!podModal);
    const toggle3 = () => setStudentModal(!studentModal);
    const toggle4 = () => setMessageModal(!messageModal);

    //For Sort
    const [sortGrade, setGrade] = useState([]);
    const [sortName, setName] = useState([]);
    const [sortLocation, setLocation] = useState([]);
    const [sortPrice, setPrice] = useState([])
    const [sortCapacity, setCapacity] = useState([])
    const [sortOpening, setOpening] = useState([])

    useEffect(() => {
    
        API.getTeacher(key)
            
            .then(res => {
                // console.log(res);
                document.body.style.background = "#fff";
                setTeacher(res.data[0])
                console.log(teacher)
                setPods(res.data[0].pods)
            }
            ).catch(err => console.log(err));
    }, [])

    const refresh = () => {
        API.getTeacher(key)
            .then(res => {
                // console.log(res);
                setTeacher(res.data[0])
                console.log(teacher)
                setPods(res.data[0].pods)
            }
            ).catch(err => console.log(err));
    }

    // Displays modal with form to edit profile
    const openProfileEditor = event => {
        refresh(key);
        setProfileModal(true);
        // console.log("==========================")
        console.log(teacher)
    }

    // Captures edits made in modal form
    const handleInputChange = event => {
        console.log(event.target.value)

        setTeacher({
            ...teacher,
            [event.target.name]: event.target.value
        })
    }

    const saveEdits = event => {
        event.preventDefault();
        console.log(teacher)
        toggle()
        
        API.updateTeacherProfile(id, teacher)
            .then(res => {
                console.log(res);
                console.log("profile updated!")
            })
            .catch(err => console.log(err));
    }

    // Displays modal with form to add pod (for teachers only)
    const openPodForm = event => {
        setPodModal(true);
        console.log(teacher)
    }

    // Displays modal with form to add student (for parents only)
    const openStudentForm = event => {
        // console.log("clicked")
        setStudentModal(true);
        // console.log(teacher)
    }

    const openMessageForm = event => {
        setMessageModal(true);
    }

    const startConvo = () => {
        API.createConversation({ participants: [username, id] })
            .then(() => {
                console.log("message sent");
            })
    }

    ////////////////////////////////////////////////////////////////////
    //Sort Functions

    const hideArrows = () => {
        document.getElementById("podNameUp").style.display = "none";
        document.getElementById("podNameDown").style.display = "none";
        document.getElementById("podGradeUp").style.display = "none";
        document.getElementById("podGradeDown").style.display = "none";
        document.getElementById("podLocationUp").style.display = "none";
        document.getElementById("podLocationDown").style.display = "none";
        document.getElementById("podPriceUp").style.display = "none";
        document.getElementById("podPriceDown").style.display = "none";
        document.getElementById("podCapacityUp").style.display = "none";
        document.getElementById("podCapacityDown").style.display = "none";
        document.getElementById("podOpeningUp").style.display = "none";
        document.getElementById("podOpeningDown").style.display = "none";
    }

    //Sorts pod table by pod name
    const sortByName = () => {

        let sortedNames = pods.sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;


            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            } return comparison
        })

        if (sortName === "DESC") {
            sortedNames.reverse();
            setName("ASC");
            hideArrows();
            document.getElementById("podNameUp").style.display = "block";
        } else {
            setName("DESC");
            hideArrows();
            document.getElementById("podNameDown").style.display = "block";
        }
        setPods(sortedNames);
    }

    //Sorts pod table by grade taught
    const sortByGrade = () => {

        let sortedGrades = pods.sort((a, b) => {
            const gradeA = a.grade;
            const gradeB = b.grade;

            let gradeASplit = gradeA.split(" ")[0];
            if (gradeASplit.length == 3) {
                gradeASplit = gradeASplit.substring(0, 1)
            }
            else if (gradeASplit.length == 4) {
                gradeASplit = gradeASplit.substring(0, 2)
            }
            gradeASplit = parseInt(gradeASplit)

            let gradeBSplit = gradeB.split(" ")[0];
            if (gradeBSplit.length == 3) {
                gradeBSplit = gradeBSplit.substring(0, 1)
            }
            else if (gradeBSplit.length == 4) {
                gradeBSplit = gradeBSplit.substring(0, 2)
            }
            gradeBSplit = parseInt(gradeBSplit)
            console.log(gradeASplit, gradeBSplit)

            let comparison = 0;
            if (gradeASplit > gradeBSplit) {
                comparison = 1;
                return comparison;
            } else if (gradeASplit < gradeBSplit) {
                comparison = -1;
                return comparison;
            } else if (gradeASplit !== gradeBSplit) {
                return comparison
            }
        })

        if (sortGrade === "DESC") {
            sortedGrades.reverse();
            setGrade("ASC");
            hideArrows();
            document.getElementById("podGradeUp").style.display = "block";
        } else {
            setGrade("DESC");
            hideArrows();
            document.getElementById("podGradeDown").style.display = "block";
        }
        setPods(sortedGrades);
    }

    //Sort pod table by location
    const sortByLocation = () => {

        let sortedLocation = pods.sort((a, b) => {
            const nameA = a.location;
            const nameB = b.location;


            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            } return comparison
        })

        if (sortLocation === "DESC") {
            sortedLocation.reverse();
            setLocation("ASC");
            hideArrows();
            document.getElementById("podLocationUp").style.display = "block";
        } else {
            setLocation("DESC");
            hideArrows();
            document.getElementById("podLocationDown").style.display = "block";
        }
        setPods(sortedLocation);
    }

    //Sort pod table by price
    const sortByPrice = () => {
        let sortedPrice = pods.sort((a, b) => {
            const priceA = a.price;
            const priceB = b.price;

            let comparison = 0;
            if (priceA > priceB) {
                comparison = 1;
            } else if (priceA < priceB) {
                comparison = -1;
            } return comparison
        })

        if (sortPrice === "DESC") {
            sortedPrice.reverse();
            setPrice("ASC");
            hideArrows();
            document.getElementById("podPriceUp").style.display = "block";
        } else {
            setPrice("DESC");
            hideArrows();
            document.getElementById("podPriceDown").style.display = "block";
        }
        setPods(sortedPrice);
    }

    //Sort pod table by capacity
    const sortByCapacity = () => {
        let sortedCapacity = pods.sort((a, b) => {
            const podA = a.slots;
            const podB = b.slots;


            let comparison = 0;
            if (podA > podB) {
                comparison = 1;
            } else if (podA < podB) {
                comparison = -1;
            } return comparison
        })

        if (sortCapacity === "DESC") {
            sortedCapacity.reverse();
            setCapacity("ASC");
            hideArrows();
            document.getElementById("podCapacityUp").style.display = "block";
        } else {
            setCapacity("DESC");
            hideArrows();
            document.getElementById("podCapacityDown").style.display = "block";
        }
        setPods(sortedCapacity);
    }

    //Sort pod table by openings
    const sortByOpening = () => {
        let sortedOpening = pods.sort((a, b) => {
            const podA = a.slots - a.students.length;
            const podB = b.slots - b.students.length;


            let comparison = 0;
            if (podA > podB) {
                comparison = 1;
            } else if (podA < podB) {
                comparison = -1;
            } return comparison
        })

        if (sortOpening === "DESC") {
            sortedOpening.reverse();
            setOpening("ASC");
            hideArrows();
            document.getElementById("podOpeningUp").style.display = "block";
        } else {
            setOpening("DESC");
            hideArrows();
            document.getElementById("podOpeningDown").style.display = "block";
        }
        setPods(sortedOpening);
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

                            <Col className="proPicCol text-center" xs="12" md="5" lg="3">
                                {teacher.image !== "" ? (
                                    <img className="img-fluid teacherImage" alt="" src={teacher.image}></img>
                                ) : (
                                        <img className="img-fluid profileImage" alt="" src="../images/fullSize/profile-placeholder.png"></img>
                                    )}

                                <Row>
                                    {teacher.username === username ? (
                                        <>
                                            <Col></Col>
                                            <Col className="text-center">
                                                <i className="fa fa-pencil profileIcons hvr-fade mb-4 hvr-sink" aria-hidden="true" onClick={openProfileEditor}></i>
                                            </Col>
                                            <Col className="text-center">
                                                {teacher.isTeacher === true ? (
                                                    <i onClick={openPodForm} className="fa fa-plus profileIcons hvr-fade hvr-sink" aria-hidden="true"></i>
                                                ) : (
                                                        <i onClick={openStudentForm} className="fa fa-plus profileIcons hvr-fade hvr-sink" aria-hidden="true"></i>
                                                    )}

                                            </Col>
                                            <Col></Col>
                                        </>
                                    ) : (
                                            <Col className="text-center">
                                                {/* <a href="/messages" className="iconHvr-fade"> */}
                                                <i onClick={openMessageForm} className="fa fa-envelope profileIcons mailIcon hvr-fade mb-4 hvr-sink" aria-hidden="true"></i>
                                                {/* </a> */}
                                            </Col>
                                        )}
                                </Row>
                            </Col>

                            <Col xs="12" md="7" lg="9">
                                <Row>
                                    <Col>
                                        {teacher.firstName !== undefined ? (
                                            <h2 className="text-center text-md-left">
                                                <strong className="aquaText">{teacher.prefix + " " + teacher.firstName + " " + teacher.lastName}</strong>
                                            </h2>
                                        ) : (
                                                <h2></h2>
                                            )}

                                    </Col>
                                </Row>
                                {teacher.bio}
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            {teacher.isTeacher === true ? (
                <PodTable pods={pods} teacher={teacher} id={id} refresh={refresh} sortByName={sortByName} sortByGrade={sortByGrade} sortByLocation={sortByLocation} sortByPrice={sortByPrice} sortByCapacity={sortByCapacity} sortByOpening={sortByOpening} />
            ) : (
                    <StudentTable teacher={teacher} id={id} />
                )}

            <Footer />

            <ProfileModal
                toggle={toggle}
                profileModal={profileModal}
                buttonLabe={buttonLabel}
                teacher={teacher}
                saveEdits={saveEdits}
                handleInputChange={handleInputChange}
            />

            <PodModal
                toggle2={toggle2}
                refresh={refresh}
                podModal={podModal}
                buttonLabe={buttonLabel}
                teacher={teacher}
                id={id}
            />

            <StudentModal
                toggle3={toggle3}
                studentModal={studentModal}
                buttonLabe={buttonLabel}
                id={id}
            />

            <MessageModal
                    toggle={toggle4}
                    messageModal={messageModal}
                    username={username}
                    receiver={teacher.username}
            />
        </>
    )
}

export default Profile