import React from "react";
import { Nav, Container, NavItem, NavLink } from "reactstrap";
import style from "./footer.css"


function Footer() {
    return (
        <>
            <footer>
                <Nav className="navbar footer" >
                    <Container>
                        <NavItem href="/container">
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Container>
                </Nav>
            </footer>
        </>
    )
}

export default Footer;