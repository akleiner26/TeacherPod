import React, { useState, useEffect} from "react"
import "./podTable.css"
import { Table, Col, Card } from "reactstrap"
import PodRow from "../PodRow/podRow"
import API from "../../utils/API"


function PodTable(props) {

    return (
        <Col xs="10" className="offset-1 mt-4">
        <Card className="tableMargin text-center">
        <Table hover >
            <thead className="tableHead">
                <tr className="darkGrayText">
                    <th>Pod Name</th>
                    <th>Grade</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Pod Capacity</th>
                    <th>Openings</th>
                    <th>Book</th>
                </tr>
            </thead>
            <tbody>
            {props.pods && props.pods.map(pod => <PodRow className="podTable"
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