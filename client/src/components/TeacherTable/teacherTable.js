import React from "react"
import "./teacherTable.css"
import { Table, Col, Card } from "reactstrap"
import teachers from "../../teachers.json"
import TeacherRow from "../TeacherRow/teacherRow"


function TeacherTable(props) {
    return (
        <Col xs="10" className="offset-1">
        <Card>
        <Table hover>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Price/Week</th>
                    <th>Pod Capacity</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {teachers.map(teacher => <TeacherRow
                    key={teacher.id}
                    thumbnail={teacher.thumbnail}
                    name={teacher.name}
                    subject={teacher.subject}
                    price={teacher.price}
                    capacity={teacher.capacity} />
                )}
            </tbody>
        </Table>
        </Card>
        </Col>
    )
}

export default TeacherTable