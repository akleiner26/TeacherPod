import React, { useState } from 'react';
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

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <header>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">TeachPod</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/announcements">Announcements</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/messages">Messages</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/profile">
                                        Profile
                                    </DropdownItem>
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
