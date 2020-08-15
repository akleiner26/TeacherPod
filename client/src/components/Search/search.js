import React from "react"
import { Form, Label, Input, FormGroup, Button, Card, Col, Row } from "reactstrap"
import "./search.css"
import ImgCarousel from "../Carousel/carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Search = (props) => {
    return (
        <Col className= "col-12 searchArea">
            {/* <Card className="mb-3"> */}
                <Row>
                <Col className="offset-1" xs="5">
                <h3 className="m-2"><span className="aquaText">Pod</span> Search</h3>
                    <Card className="m-2 mb-4">
                    <Form className="m-2 podSearchForm">
                        <FormGroup>
                            <Label for="zipCode"><i className="fa fa-map-marker" aria-hidden="true"></i> Location</Label>
                            <Input onChange={props.handleInputChange} type="text" name="location" id="zipCode" placeholder='Enter "remote" or zip code' value={props.search.location} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gradeSelect"><i className="fa fa-graduation-cap" aria-hidden="true"></i> Grade</Label>
                            <Input onChange={props.handleInputChange} type="select" name="grades" id="gradeSelect" value={props.search.grades}>
                                <option value="">Select</option>
                                <option>PreSchool</option>
                                <option>Kindergarten</option>
                                <option>1st Grade</option>
                                <option>2nd Grade</option>
                                <option>3rd Grade</option>
                                <option>4th Grade</option>
                                <option>5th Grade</option>
                                <option>6th Grade</option>
                                <option>7th Grade</option>
                                <option>8th Grade</option>
                                <option>9th Grade</option>
                                <option>10th Grade</option>
                                <option>11th Grade</option>
                                <option>12th Grade</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="priceSelect"><i className="fa fa-usd" aria-hidden="true"></i> Price Range</Label>
                            <Input onChange={props.handleInputChange} type="select" placeholder="Price/Week" name="price" id="priceSelect" value={props.search.price}>
                                <option value="">Select</option>
                                <option>Less than $100/week</option>
                                <option>$100-$200/week</option>
                                <option>$200-$300/week</option>
                                <option>$300-$400/week</option>
                                <option>$400-$500/week</option>
                                <option>Greater than $500/week</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={props.handleFormSubmit}className="btnHover hvr-fade mr-2">Submit</Button>

                        <Button onClick={props.clearSearch}className="btnHover hvr-fade">Clear</Button>
                    </Form>
                    </Card>
                </Col>
                <Col className="m-2 mt-5" xs="5">
                   <ImgCarousel className="carousel"/>
                </Col>
                </Row>
            {/* </Card> */}
        </Col>
    );
}

export default Search