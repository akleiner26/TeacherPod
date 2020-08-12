import React from "react"
import { Form, Label, Input, FormGroup, Button } from "reactstrap"





const Search = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="zipCode"><i class="fa fa-map-marker" aria-hidden="true"></i>Zip Code</Label>
                <Input type="text" name="zipCode" id="zipCode" placeholder="12345" />
            </FormGroup>
            <FormGroup>
                <Label for="gradeSelect"><i class="fa fa-graduation-cap" aria-hidden="true"></i>Grade</Label>
                <Input type="select" name="grade" id="gradeSelect">
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
                <Label for="priceSelect"><i class="fa fa-usd" aria-hidden="true"></i>Price Range</Label>
                <Input type="select" name="priceSelect" id="priceSelect">
                    <option>< $100/week</option>
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
            <Button>Submit</Button>
        </Form>
    );
}

export default Example;