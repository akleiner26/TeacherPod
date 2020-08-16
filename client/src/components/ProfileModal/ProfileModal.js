import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./ProfileModal.css";

const ProfileModal = (props) => {
    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className="">
            <ModalHeader toggle={props.toggle}>Edit Profile</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="prefix">Prefix</Label>
                        <Input type="text" name="prefix" id="prefix" placeholder="(Mr, Miss, Mrs, etc.)" value={props.profileData.prefix}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="type" name="firstName" id="firstName" placeholder="First Name" value={props.profileData.firstName}  onChange={props.handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="type" name="lastName" id="lastName" placeholder="Last Name" value={props.profileData.lastName}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">Profile Image</Label>
                        <Input type="type" name="image" id="image" placeholder="Enter URL" value={props.profileData.image} />
                        <FormText color="muted">
                            Provide url to image.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="grade">Grade Level</Label>
                        <Input type="select" name="gradesTaught" id="grade" value={props.profileData.gradesTaught} >
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
                        <Label for="location">Location</Label>
                        <Input type="type" name="location" id="location" placeholder="Location" value={props.profileData.location}  />
                        <FormText color="muted">
                            Location must be entered as "remote" or by zip code.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">About</Label>
                        <Input type="textarea" name="bio" id="bio" placeholder="Tell us about yourself!" value={props.profileData.bio} />
                    </FormGroup>
                    <Button onClick={props.saveEdits}>Save</Button>
                    <Button onClick={props.toggle} className="ml-3 mr-0">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default ProfileModal;