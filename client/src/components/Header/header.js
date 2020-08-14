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
    DropdownItem,
    NavbarText
} from 'reactstrap';
import style from "./header.css";
import axios from "axios";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedin, setLogin] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // axios.get("/api/users/login").then(response => {
        //     setLogin(response);
        // })
        //Choose what login setting to display for testing purposes
        //True => logged in
        //False => Not a user
        setLogin(true);
    }, [])

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
                            {isLoggedin ?
                                <NavLink 
                                href="/messages">Messages</NavLink>
                                :
                                <NavLink href="/login">Messages</NavLink>
                            }
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {isLoggedin ?
                                    <DropdownItem href="/profile">
                                        Profile
                                    </DropdownItem>
                                    :
                                    <DropdownItem href="/login">
                                        Profile
                                    </DropdownItem>
                                    }
                                    <DropdownItem href="/signup">
                                        Signup
                                    </DropdownItem>
                                    <DropdownItem href="/login">
                                        Login
                                     </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/login">
                                        Logout
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/contact">
                                        Contact
                                     </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        {/* <NavbarText>Simple Text</NavbarText> */}
                    </Collapse>
                </Navbar>
            </header>


        </>
    );
}

export default Header;
