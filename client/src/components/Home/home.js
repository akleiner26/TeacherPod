import React, { useState, useEffect } from "react";
import Header from "../Header/header";
// import Search from "../Search/search"
// import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer";
import TeacherTable from "../TeacherTable/teacherTable";
import TeacherRow from "../TeacherRow/teacherRow";
import Search from "../Search/search";
import API from "../../utils/API"
import { Container, Table } from "reactstrap";
import style from "./home.css";

function Home() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");
    const [search, setSearch] = useState({
        location: "",
        grades: "",
        price: ""
    })
    const [teachers, setTeachers] = useState([])
    const [id, setId] = useState("");

    console.log(loggedIn, username, id);

    useEffect(() => {
        loadTeachers();
        // console.log(teachers)
    }, [])

    const loadTeachers = () => {
        API.getAllTeachers()
            .then(res => {
                console.log(res.data)
                setTeachers(res.data)
            })
            .catch(err => console.log(err));
    }

    // Captures input from search
    const handleInputChange = event => {
        // console.log(event.target.value)

        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    // Kicks off search with selected criteria when "submit" is clicked
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(search);

        API.getTeachers(search)
            .then(res => {
                console.log("API call is working...")
                console.log(res)
            })

    }

    return (
        <>
            <Header loggedIn={loggedIn} username={username} id={id} func={{ setLogin, setUsername, setId }} />
            <Search
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <TeacherTable>
                {teachers.map(teacher => {
                    let name = teacher.firstName + " " + teacher.lastName;

                    return <TeacherRow
                        key={teacher._id}
                        image={teacher.image}
                        name={name}
                        gradesTaught={teacher.gradesTaught}
                        price={teacher.pods[0].price}
                        capacity={teacher.pods[0].slots} />
                }
                )}
            </TeacherTable>
            <Footer />
        </>
    )
}

export default Home