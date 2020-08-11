import Header from "../Header/header"
import Search from "../Search/search"
import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer"


function Home() {
    return (
        <>
            <Header />
            <Search />
            <TeacherTable />
            <Footer />
        </>
    )
}

export default Home