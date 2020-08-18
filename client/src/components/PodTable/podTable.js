import React from "react"
import "./podTable.css"
import { Table, Col, Card } from "reactstrap"
import PodRow from "../PodRow/podRow"
import { useMediaQuery } from 'react-responsive';

function PodTable(props) {

    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 900 }
    )

    return (

        <>
            {isDesktopOrLaptop && <>

                <Col xs="10" className="offset-1 mt-4">
                    <Card className="tableMargin text-center">
                        <Table hover >
                            <thead className="tableHead">
                                <tr className="darkGrayText">
                                    <th onClick={props.sortByName}>Pod Name<i id="podNameDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podNameUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByGrade}>Grade<i id="podGradeDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podGradeUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByLocation}>Location<i id="podLocationDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podLocationUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByPrice}>Price<i id="podPriceDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podPriceUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByCapacity}>Pod Capacity<i id="podCapacityDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podCapacityUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByOpening}>Openings<i id="podOpeningDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podOpeningUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    {props.teacher._id === props.id ? (
                                        <>
                                            <th>Enroll Student</th>
                                            <th>Remove Student</th>
                                        </>
                                    ) : (
                                            ""
                                        )}
                                </tr>
                            </thead>
                            <tbody>
                                {props.pods && props.pods.map(pod => <PodRow className="podTable"
                                    refresh={props.refresh}
                                    teacher={props.teacher._id}
                                    pods={props.pods}
                                    students={pod.students}
                                    id={props.id}
                                    key={pod._id}
                                    podId={pod._id}
                                    name={pod.name}
                                    grade={pod.grade}
                                    slots={pod.slots}
                                    price={pod.price}
                                    location={pod.location}
                                    availability={pod.slots - pod.students.length} />)}
                            </tbody>
                        </Table>
                    </Card>
                </Col>

            </>}

            {!isDesktopOrLaptop && <>

                <Col xs="12" className=" mt-4 mb-0 smallPodTable">
                        <Table hover >
                            <thead className="tableHead">
                                <tr className="darkGrayText">
                                    <th onClick={props.sortByName}>Pod Name<i id="podNameDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podNameUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByGrade}>Grade<i id="podGradeDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podGradeUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByLocation}>Location<i id="podLocationDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podLocationUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByPrice}>Price<i id="podPriceDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podPriceUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByCapacity}>Pod Capacity<i id="podCapacityDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podCapacityUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th onClick={props.sortByOpening}>Openings<i id="podOpeningDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podOpeningUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    {props.teacher._id === props.id ? (
                                        <>
                                            <th>Enroll Student</th>
                                            <th>Remove Student</th>
                                        </>
                                    ) : (
                                            ""
                                        )}
                                </tr>
                            </thead>
                            <tbody>
                                {props.pods && props.pods.map(pod => <PodRow className="podTable"
                                    refresh={props.refresh}
                                    teacher={props.teacher._id}
                                    pods={props.pods}
                                    students={pod.students}
                                    id={props.id}
                                    key={pod._id}
                                    podId={pod._id}
                                    name={pod.name}
                                    grade={pod.grade}
                                    slots={pod.slots}
                                    price={pod.price}
                                    location={pod.location}
                                    availability={pod.slots - pod.students.length} />)}
                            </tbody>
                        </Table>
                </Col>
            </>}
        </>
    )
}

export default PodTable