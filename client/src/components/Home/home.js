import React from "react"
import Header from "../Header/header"
// import Search from "../Search/search"
// import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer"
import teachers from "../../teachers.json"
import TeacherCard from "../TeacherCard/teacherCard"
import Search from "../Search/search"
import { Container } from "reactstrap"
import style from "./home.css"


function Home() {
    return (
        <>
            <Header />
            <Search />
            <div className="teachCardContainer">
                <>

                    {teachers.map(teacher => <TeacherCard
                        key={teacher.id}
                        name={teacher.name}
                        thumbnail={teacher.thumbnail}
                        subject={teacher.subject}
                        price={teacher.price}
                        capacity={teacher.capacity} />
                    )}
                </>
            </div>
            <Footer />
        </>
    )
}

export default Home