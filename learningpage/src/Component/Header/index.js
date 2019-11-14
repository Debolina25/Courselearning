import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Base from '../Button';
import Image from 'react-bootstrap/Image';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        
        return (
            <div className="TextColor header_fixed bg-primary">
                <Navbar expand="lg" bg="secondary" variant="dark">
                    <Navbar.Brand><Image className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2_bRW-r_Go75qIdX_lX-jOwTo5AMnK7GerWe6ZpWAVlpKKvdh"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                            <Link to="/" className="nav-link">HOME</Link>
                            <Link to="/htmlpage" className="nav-link">HTML</Link>
                            <Link to="/csspage" className="nav-link">CSS</Link>
                            <Link to="/bootstrappage" className="nav-link">BootStrap</Link>
                            <Link to="/javascriptpage" className="nav-link">JavaScript</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/report"><Base variant="success" text="ReportCard"/></Link>
                </Navbar>
            </div>  
        );
    }
}
export default Header;