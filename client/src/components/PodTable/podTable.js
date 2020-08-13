import React from "react"
import style from "./podTable.css"
import { Table, Col, Card } from "reactstrap"
import PodRow from "../PodRow/podRow"


function PodTable(props) {
    return (
        <Col xs="10" className="offset-1">
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
                {/* {pods.map(pod => <PodRow
                    key={pod._id}
                    name={pod.name}
                    grade={pod.grade}
                    capacity={pod.slots}
                    price={pod.price}
                    location={pod.location} 
                    availability={pod.slots-pod.students.length()}/>
                )} */}
            </tbody>
        </Table>
        </Card>
        </Col>
    )
}

export default PodTable