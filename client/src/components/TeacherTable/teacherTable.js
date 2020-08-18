import React from "react"
import "./teacherTable.css";
import { Table, Col, Card } from "reactstrap";
import { useMediaQuery } from 'react-responsive';



function TeacherTable(props) {

    const isDesktopOrLaptop = useMediaQuery(
        { minWidth: 800 }
    )


    return (
        <>
            {isDesktopOrLaptop && <>
                <Col xs="10" className="offset-1 mt-4">
                    <Card className="tableMargin">
                        <Table className="teacherTable" hover >
                            <thead className="teacherHeadRow">
                                <tr className="tableHead">
                                    <th className="darkGrayText cameraIcon text-center"><i className="fa fa-camera-retro" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByName}>Name<i id="nameDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="nameUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByGrade}>Grade<i id="gradeDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="gradeUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByPrice}>Price/Week<i id="priceDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="priceUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByPod}>Pods<i id="podDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText">Message</th>
                                </tr>
                            </thead>
                            <tbody className="teacherTable">
                                {props.children}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </>}


            {!isDesktopOrLaptop && <>
                <Col xs="12" className="mt-4 smallTable">
                    {/* <Card className="tableMargin"> */}
                        <Table className="teacherTable" hover >
                            <thead className="teacherHeadRow">
                                <tr className="tableHead">
                                    <th className="darkGrayText cameraIcon text-center"><i className="fa fa-camera-retro" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByName}>Name<i id="nameDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="nameUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByGrade}>Grade<i id="gradeDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="gradeUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByPrice}>Price/Week<i id="priceDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="priceUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText" onClick={props.sortByPod}>Pods<i id="podDown" className="fa fa-caret-down aFirst caret" aria-hidden="true"></i><i id="podUp" className="fa fa-caret-up caret zFirst" aria-hidden="true"></i></th>
                                    <th className="darkGrayText">Message</th>
                                </tr>
                            </thead>
                            <tbody className="teacherTable">
                                {props.children}
                            </tbody>
                        </Table>
                    {/* </Card> */}
                </Col>
            </>}
        </>
    )
}

export default TeacherTable