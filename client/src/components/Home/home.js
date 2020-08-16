import React, { useState, useEffect } from "react";
import Header from "../Header/header";
// import Search from "../Search/search"
// import TeacherTable from "../TeacherTable/teacherTable"
import Footer from "../Footer/footer";
import TeacherTable from "../TeacherTable/teacherTable";
import TeacherRow from "../TeacherRow/teacherRow";
import Search from "../Search/search";
import API from "../../utils/API"
// import { Container, Table } from "reactstrap";
// import style from "./home.css";

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
    const [sortName, setName] = useState([])
    const [sortGrade, setGrade] = useState([])
    const [sortPrice, setPrice] = useState([])
    const [sortPod, setPod] = useState([])
    

    // console.log(loggedIn, username, id);

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

    //Onclick event for profile route
    const getTeacherProfile = (event) => {

    }

    // Kicks off search with selected criteria when "submit" is clicked
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(search);

        API.getTeachers(search)
            .then(res => {
                // console.log("API call is working...")
                // console.log(res)

                setTeachers(res.data)
            })

            setSearch({
                location: "",
                grades: "",
                price: ""
            })
    }

    const clearSearch = event => {
        event.preventDefault();

        loadTeachers();
    }

    const hideArrows = () => {
        document.getElementById("nameUp").style.display="none";
        document.getElementById("nameDown").style.display="none";
        document.getElementById("gradeUp").style.display="none";
        document.getElementById("gradeDown").style.display="none";
        document.getElementById("priceUp").style.display="none";
        document.getElementById("priceDown").style.display="none";
        document.getElementById("podUp").style.display="none";
        document.getElementById("podDown").style.display="none";
    }

    //sort teachers by name//
    const sortByName = () => {

        let sortedNames = teachers.sort((a, b) => {
            const nameA = a.firstName;
            const nameB = b.firstName;
      
      
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
            document.getElementById("nameUp").style.display="block";
          } else {
            setName("DESC");
            hideArrows();
            document.getElementById("nameDown").style.display="block";
          }
          setTeachers(sortedNames);
        }

        //sort teachers by grade
    const sortByGrade = () => {

        let sortedGrades = teachers.sort((a, b) => {
            const gradeA = a.gradesTaught;
            const gradeB = b.gradesTaught;
      
      
            let comparison = 0;
            for(let i=0; i < gradeA.length && i < gradeB.length; i++){
                if (gradeA[i] > gradeB[i]) {
                    comparison = 1;
                    return comparison;
                } else if (gradeA[i] < gradeB[i]) {
                    comparison = -1;
                    return comparison;
                } else if (gradeA[i] !== gradeB[i]){
                    return comparison
                }
            }
          })
      
          if (sortGrade === "DESC") {
            sortedGrades.reverse();
            setGrade("ASC");
            hideArrows();
            document.getElementById("gradeUp").style.display="block";
          } else {
            setGrade("DESC");
            hideArrows();
            document.getElementById("gradeDown").style.display="block";
          }
          setTeachers(sortedGrades);
        }

        //Sort by Price
        const sortByPrice = () => {
            let sortedPrice = teachers.sort((a, b) => {
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
                document.getElementById("priceUp").style.display="block";
              } else {
                setPrice("DESC");
                hideArrows();
                document.getElementById("priceDown").style.display="block";
              }
              setTeachers(sortedPrice);
            }

            const sortByPod = () => {
                let sortedPod = teachers.sort((a, b) => {
                    const podA = a.pod;
                    const podB = b.pod;
              
              
                    let comparison = 0;
                    if (podA > podB) {
                      comparison = 1;
                    } else if (podA < podB) {
                      comparison = -1;
                    } return comparison
                  })
              
                  if (sortPod === "DESC") {
                    sortedPod.reverse();
                    setPod("ASC");
                    hideArrows();
                    document.getElementById("podUp").style.display="block";
                  } else {
                    setPod("DESC");
                    hideArrows();
                    document.getElementById("podDown").style.display="block";
                  }
                  setTeachers(sortedPod);
                }


    return (
        <>
            <Header loggedIn={loggedIn} username={username} id={id} func={{ setLogin, setUsername, setId }} />
            <Search
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                clearSearch={clearSearch}
                search={search}
            />
            {teachers.length ? (
                <TeacherTable sortByName={sortByName} sortByGrade={sortByGrade} sortByPrice={sortByPrice} sortByPod={sortByPod}>
                    {teachers.map(teacher => {
                        let name = teacher.firstName + " " + teacher.lastName;

                        return <TeacherRow
                            key={teacher._id}
                            id={teacher._id}
                            teacherId={teacher._id}
                            image={teacher.image}
                            name={name}
                            gradesTaught={teacher.gradesTaught}
                            price={teacher.pods[0].price}
                            pods={teacher.pods.length}
                            username={teacher.username} />
                    }
                    )}
                </TeacherTable>
            ) : (
                    <TeacherTable>
                        <tr>
                            <td colSpan="6" className="text-center"> <h4 className="mt-5 mb-5">No pods returned from search</h4></td>
                        </tr>
                    </TeacherTable>

                )}
            <Footer />
        </>
    )
}

export default Home