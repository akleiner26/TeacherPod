import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import "./header.css";
import axios from "axios";
// import API from "../../utils/API";

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        axios.get("/api/users/login").then(response => {
            console.log(response.data);
            props.func.setLogin(response.data.status);
            props.func.setUsername(response.data.username);
            props.func.setId(response.data.id);
        })
        //Choose what login setting to display for testing purposes
        //True => logged in
        //False => Not a user
        // props.func.setLogin(true);
    }, [])

    const logOut = event => {
        event.preventDefault();
        axios.post("/api/users/logout")
            .then( ({ data }) => {
                if (data.message === "User logged out"){
                    window.location.replace("/home");
                }
            })
    }
    console.log(props);

    return (
        <>
            <header className="topNav">
                <Navbar color="light" light expand="md" className="nav fixed-top shadow-sm headerNav">
                    <NavbarBrand href="/"><span className="teach">Teach</span><span className="pod">Pod</span> <img className="logo" src="images/icons/peas.png"></img></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/announcements">Announcements</NavLink>
                            </NavItem>
                            <NavItem>
                            {props.loggedIn ?
                                <NavLink 
                                href="/messages">Messages</NavLink>
                                :
                                <NavLink href="/login">Messages</NavLink>
                            }
                            </NavItem>
                            {!props.loggedIn ?
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/signup">
                                        Sign up
                                    </DropdownItem>
                                    <DropdownItem href="/login">
                                        Login
                                     </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/contact">
                                        Contact
                                     </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            :
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/profile">
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={logOut}>
                                        Logout
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/contact">
                                        Contact
                                     </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>


        </>
    );
}

export default Header;
