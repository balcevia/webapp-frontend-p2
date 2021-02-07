import React from 'react';
import {Navbar} from "react-bootstrap";

const Footer = () => (
    <Navbar bg="dark" variant="dark" className="footer">
        <Navbar.Brand href="/main">
            {new Date().getFullYear()}
        </Navbar.Brand>
    </Navbar>
);

export default Footer;