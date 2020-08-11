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
                                <NavLink href="/components/">Announcements</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Messages</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem>
                                        Signup
                                    </DropdownItem>
                                    <DropdownItem>
                                        Login
                                     </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Logout
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
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
