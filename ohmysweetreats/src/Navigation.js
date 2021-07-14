import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


class Navigation extends Component {
    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <div>

                <Navbar>
                    <Container fluid>
                        <nav className="nav-extended">
                            <div className="nav-wrapper">
                                <a href="#" className="brand-logo"><h1>OhMySweeTreats</h1></a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Request a quote</a></li>
                                    <li><a href="#">Our Menu</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                        </nav>
                    </Container>
                </Navbar>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Request a quote</a></li>
                    <li><a href="#">Our Menu</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>

            </div>
        )
    }
}
export default Navigation;