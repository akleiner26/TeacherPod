import React from "react";
import { Nav,  NavItem, NavLink } from "reactstrap";
import "./footer.css"


function Footer() {
    return (
        <>
            <footer>
                <Nav className="navbar footer footer-fixed shadow" >
                        <NavItem href="/container">
                            <NavLink className="contactLink" href="/contact">Contact</NavLink>
                        </NavItem>
                </Nav>
            </footer>
        </>
    )
}

export default Footer;