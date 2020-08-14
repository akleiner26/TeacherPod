import React from "react";
import { Nav, Container, NavItem, NavLink } from "reactstrap";
import style from "./footer.css"


function Footer() {
    return (
        <>
            <footer>
                <Nav className="navbar footer footer-fixed shadow" >
                    {/* <Container> */}
                        <NavItem href="/container">
                            <NavLink className="contactLink" href="/contact">Contact</NavLink>
                        </NavItem>
                    {/* </Container> */}
                </Nav>
            </footer>
        </>
    )
}

export default Footer;