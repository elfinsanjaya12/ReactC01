import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import logo from "../assets/images/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          className="border py-1 sticky-top shadow-sm p-1 mb-5 bg-white rounded"
        >
          <NavbarBrand href="/">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-center pr-2"
              height="50"
            />
            Gama.Textile
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Kategori</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="success" href="/">
                  Masuk/Daftar
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
