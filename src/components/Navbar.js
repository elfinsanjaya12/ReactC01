import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import keranjang from "../assets/images/icon/keranjang.png";

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light border py-1 sticky-top shadow-sm p-1 mb-5 bg-white rounded">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                height="36"
                alt="Logo"
                className="d-inline-block align-center pr-2"
              />
              Gama Textile
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* kanan */}
              <ul className="navbar-nav rm-auto">
                <li>
                  <a className="nav-link" href="#">
                    Kategori <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              {/* akhir kanan */}

              {/* tengah */}
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
              {/* akhir tengah */}
              {/* kiri */}
              <ul className="navbar-nav ml-auto">
                <li>
                  <a className="nav-link" href="#">
                    <img
                      src={keranjang}
                      height="22"
                      alt="Logo"
                      className="d-inline-block align-center pr-2"
                    />
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    |
                  </a>
                </li>

                <div className="container">
                  <li>
                    <a className="nav-link" href="#">
                      Masuk
                    </a>
                  </li>
                </div>
                <div className="container">
                  <li>
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Daftar
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
