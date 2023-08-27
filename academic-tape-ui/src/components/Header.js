import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './style.css'


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => { setIsOpen(!isOpen); };

    return (
        <div>
            <div className="py-1 bg-dark"></div>

            <Navbar className=" container fw-bolder text-center" color="light" light expand="md">
                <NavbarBrand href="/">ACADEMIC TAPE</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup">Signup</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <hr className="p-0 m-0 bg-secondary"/>

        </div>

    );
};

export default Header;