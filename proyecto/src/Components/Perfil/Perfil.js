import React, { Component } from "react";
import "./Perfil.css";
class Perfil extends Component {
  render() {
    console.log(this.props.foto);
    return (
      <div className="Perfil">
        <div className="nombrePerfil titulo1">{this.props.nombre}</div>
        <div className="contenidoPerfil">
          <div className="panelIzquierdaPerfil">
            <div className="fotoPerfil">
              <img styles="width: 100px" alt="foto" src={this.props.foto}></img>
            </div>
            <div className="apodoPerfil titulo2">{this.props.apodo}</div>
            <div className="perfilProfesionalPerfil parrafo">
              {this.props.parrafo}
            </div>
            <div className="botonVolver titulo1">
              <a href="http://localhost:3000/home">VOLVER ATRÁS</a>
            </div>
          </div>
          <div className="panelDerechaPerfil">
            <img styles="width: 30px" alt="foto" src={this.props.poderes}></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Perfil;
