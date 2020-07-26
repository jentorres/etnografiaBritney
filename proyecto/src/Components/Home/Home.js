import React, { Component } from "react";
import "./home.css";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import britney from "./britney.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="tituloGeneral titulo1">
          <div className="cajaTitulo">TODO ES CULPA DE BRITNEY </div>
          <img
            className="britney"
            alt="Britney"
            height="102%"
            margin="0"
            src={britney}
          ></img>
        </div>

        <div className="preguntaOrden titulo1">
          <h1> ¿Cómo quieres conocer esta historia?</h1>
        </div>
        <div>
          <div className="titulo2 tituloOrden">En orden:</div>
          <div className="gridOrden">
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m1">
                1
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m2">
                2
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m3">
                3
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m4">
                4
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m5">
                5
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m6">
                6
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m7">
                7
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m8">
                8
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m9">
                9
              </a>
            </div>
            <div className="momentoOrden titulo1">
              {" "}
              <a className="linkMomentoO" href="http://localhost:3000/m10">
                10
              </a>
            </div>
          </div>
        </div>

        <div className="titulo2 tituloOrden">En desorden:</div>
        <div className="gridDesorden">
          <div className="momentoDesorden monen1 rosa">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m1"
            >
              Cómo nos configuramos
            </a>
          </div>
          <div className="momentoDesorden monen2 verde">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m2"
            >
              Inicio - Tema grupos
            </a>
          </div>
          <div className="momentoDesorden momen3 azul">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m3"
            >
              Descubrimos a Britney
            </a>
          </div>
          <div className="momentoDesorden momen4 rosa">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m4"
            >
              "El pelo"
            </a>
          </div>
          <div className="momentoDesorden momen5 verde">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m5"
            >
              Perfiles de interacción
            </a>
          </div>
          <div className="momentoDesorden momen6 azul">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m6"
            >
              Contactamos a Britney
            </a>
          </div>
          <div className="momentoDesorden momen7 rosa">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m7"
            >
              Conquista
            </a>
          </div>
          <div className="momentoDesorden momen8 verde">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m8"
            >
              Britney nos deja plantados
            </a>
          </div>
          <div className="momentoDesorden momen9 azul">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m9"
            >
              Etnografia de lo cotidiano
            </a>
          </div>
          <div className="momentoDesorden momen10 rosa">
            <a
              className="linkMomento tituloDesorden"
              href="http://localhost:3000/m10"
            >
              Teoria
            </a>
          </div>
        </div>
        <div className="videos">
          <video src={video1} controls></video>
          <video src={video2} controls></video>
        </div>
      </div>
    );
  }
}
export default Header;
