import React, { useState } from "react";
import Header from "../Header/header";
// import Search from "../Search/search"
// import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer";
import TeacherTable from "../TeacherTable/teacherTable";
import Search from "../Search/search";
import { Container, Table } from "reactstrap";
import style from "./home.css";


function Home() {
    const [loggedIn, setLogin] = useState("");
    const [username, setUsername] = useState("");

    console.log(loggedIn, username);

    return (
        <>
            <Header loggedIn={loggedIn} username={username} func={{setLogin, setUsername}} />
            <Search />
            <TeacherTable />
            <Footer />
        </>
    )
}

export default Home