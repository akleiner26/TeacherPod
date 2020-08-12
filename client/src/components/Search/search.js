import React from "react"
import { Form, Label, Input, FormGroup, Button, Card, Col } from "reactstrap"
import "./search.css"





const Search = (props) => {
    return (
        <Col className="offset-1" xs="10">
            <Card className="m-3">
                <Col className="offset-1" xs="5">
                <h3>Pod Search</h3>
                    <Card className="m-3">
                    <Form className="m-2">
                        <FormGroup>
                            <Label for="zipCode"><i class="fa fa-map-marker" aria-hidden="true"></i> Zip Code</Label>
                            <Input type="text" name="zipCode" id="zipCode" placeholder="12345" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gradeSelect"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Grade</Label>
                            <Input type="select" name="grade" id="gradeSelect">
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
                            <Label for="priceSelect"><i class="fa fa-usd" aria-hidden="true"></i> Price Range</Label>
                            <Input type="select" placeholder="Price/Week" name="priceSelect" id="priceSelect">
                                <option value="">Select</option>
                                <option>Less than $100/week</option>
                                <option>$100-$200/week</option>
                                <option>$200-$300/week</option>
                                <option>$300-$400/week</option>
                                <option>$400-$500/week</option>
                                <option>Greater than $500/week</option>
                            </Input>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    </Card>
                </Col>
            </Card>
        </Col>
    );
}

export default Search