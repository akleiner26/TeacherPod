import React, { useState, useEffect} from "react"
import style from "./podTable.css"
import { Table, Col, Card } from "reactstrap"
import PodRow from "../PodRow/podRow"
import API from "../../utils/API"


function PodTable(props) {

    // const [id, setId] = useState("");
    // const [teacher, setTeacher] = useState([])
    // const [pods, setPods] = useState([]);
    
    // useEffect(() => {
    //     API.getTeacher(id)
    //     .then(res =>{
    //         console.log(res);
    //             setTeacher(res.data[0])
    //             setPods(res.data[0].pods)
    //         }
    //         ).catch(err => console.log(err));
    // },[])
    console.log("------------------", props.pods)

    return (
        <Col xs="10" className="offset-1 mt-4">
        <Card className="tableMargin">
        <Table hover >
            <thead>
                <tr>
                    <th>Pod Name</th>
                    <th>Grade</th>
                    <th>Pod Capacity</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Openings</th>
                    <th>Book</th>
                </tr>
            </thead>
            <tbody>
            {props.pods && props.pods.map(pod => <PodRow
                    key={pod._id}
                    name={pod.name}
                    grade={pod.grade}
                    slots={pod.slots}
                    price={pod.price}
                    location={pod.location} 
                    availability={pod.slots-pod.students.length} /> )}
            </tbody>
        </Table>
        </Card>
        </Col>
    )
}

export default PodTable