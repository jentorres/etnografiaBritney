import React, { Component } from "react";
import "./Momento.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="tituloMomento titulo1">{this.props.titulo}</div>
        <div className="voces">
          <div className="voz alvaro titulo3">
            {" "}
            <a className="linkPerfil" href="http://localhost:3000/perfilA">
              Alvaro
            </a>
          </div>
          <div className="voz eli titulo3">
            {" "}
            <a className="linkPerfil" href="http://localhost:3000/perfilE">
              Elizabeth
            </a>
          </div>
          <div className="voz sil titulo3">
            {" "}
            <a className="linkPerfil" href="http://localhost:3000/perfilS">
              Silvia
            </a>
          </div>
        </div>
        ​
        <Carousel interval="10000000">
          <Carousel.Item>
            <div className="contenidoCarrusel1 titulo2">
              <div className="contenidoCarrusel1 titulo2 contenidoSlide">
                {this.props.slide1}
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="contenidoCarrusel2 titulo2">
              <div className="contenidoSlide">{this.props.slide2}</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="contenidoCarrusel3 titulo2">
              <div className="contenidoSlide">{this.props.slide3}</div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default Header;
