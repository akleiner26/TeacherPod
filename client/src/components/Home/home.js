import React, { useState } from "react";
import Header from "../Header/header";
// import Search from "../Search/search"
// import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer";
import TeacherTable from "../TeacherTable/teacherTable";
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

    console.log(loggedIn, username);

    // Captures input from search
    const handleInputChange = event => {
        console.log(event.target.value)

        setSearch({
            ...search,
            [event.target.name]: event.target.value
        })
    }

    // Kicks off search with set criteria when "submit" is clicked
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
            <Header loggedIn={loggedIn} username={username} func={{ setLogin, setUsername }} />
            <Search
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
            <TeacherTable />
            <Footer />
        </>
    )
}

export default Home