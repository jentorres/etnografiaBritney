import React, { Component } from "react";
import "./Teoria.css";
class Teoria extends Component {
  render() {
    return (
      <div className="Teoria">
        <div className="pregunta cajaTeoria">
          <div className="tituloPregunta tituloCaja titulo1">
            Pregunta de investigación
          </div>
          <div className="contenidoPregunta contenidoCaja parrafo">
            ¿Cómo las transacciones que se realizan en las comunidades de fb de
            Uniandes definen la vocación de la comunidad?
          </div>
        </div>
        <div className="grupos cajaTeoria">
          <div className="tituloGrupos tituloCaja titulo1">Grupos</div>
          <div className="contenidoGrupos contenidoCaja parrafo">
            Grupos de personas que crean interacciones, significados y dinámicas
            de identificación y cooperación entre sus miembros
          </div>
        </div>
        <div className="comunidades cajaTeoria">
          <div className="tituloComunidades tituloCaja titulo1">
            Comunidades
          </div>
          <div className="contenidoComunidades contenidoCaja parrafo">
            Grupos de personas que crean interacciones, significados y dinámicas
            de identificación y cooperación entre sus miembros.
          </div>
        </div>
        <div className="interacciones cajaTeoria">
          <div className="tituloInteracciones tituloCaja titulo2">
            Interacciones
          </div>
          <div className="contenidoTeoria contenidoCaja parrafo">
            Son reacciones ante un estímulo que generan reacciones que reflejan
            interés, acuerdo o reconocimiento con diferentes niveles de
            involucramiento. Sin el vehículo por medio del cual los grupos
            trascienden al nivel de comunidad.
          </div>
        </div>
        <div className="listaInteracciones">
          <div className="likeCaja cajaTeoria">
            <div className="tituloLike  tituloCaja titulo3">Like</div>
            <div className="contenidoLike contenidoCaja parrafo">
              Primer nivel de interacción que muestra la reacción ante un
              estímulo
            </div>
          </div>
          <div className="upCaja cajaTeoria">
            <div className="tituloUp tituloCaja titulo3">Up</div>
            <div className="contenidoUp contenidoCaja parrafo">
              Ayudan a mantener activa o viva una publicación, significan
              interés por una publicación.
            </div>
          </div>
          <div className="callCaja cajaTeoria">
            <div className="tituloCall tituloCaja titulo3">Call to action</div>
            <div className="contenidoCall  contenidoCaja parrafo">
              Acciones fuera o dentro de la comunidad que genera respuestas en
              ocasiones de aceptación o confrontación frente a lo publicado
            </div>
          </div>
        </div>
        <div className="versus cajaTeoria">
          <div className="tituloVersus tituloCaja titulo1">
            Digital vs Análogo
          </div>
          <div className="contenidoVersus contenidoCaja parrafo">Contenido</div>
        </div>
        <div className="deconstruccion parrafo">Deconstrucción</div>
        <div className="construccion parrafo">Construcción</div>
        <div className="ultimaLista parrafo">
          <ul className="parrafo">
            <li>Posicionamiento</li>
            <li>Relacionamiento</li>
            <li>Reconocimiento</li>
            <li>Sostenimiento</li>
            <li>Permanencia</li>
          </ul>
        </div>
        <div className="conclusion">
          <div className="conclusionTitulo titulo1">CONCLUSIONES</div>
          <div className="conclusion parrafo">
            Y una vez revisado el ejercicio, todo nuestro proceso vemos como
            este ha girado entorno a nuestras relaciones y las formas de
            relacionarnos, evidenciando un continuo ir y venir a partir de
            nuestra memoria, nuestros recuerdos y experiencias, y a su vez de un
            montón de comportamientos y acciones que desarrollamos día a día en
            nuestra cotidianidad y de nuestra relación con la internet. Lo que
            hace evidente como las temporalidades juegan un papel determinante,
            mediante el cual buscamos permanecer o no, trascender o no en la
            vida o las costumbres de otros, se ha evidenciado un continuo
            proceso de construcción y de deconstrución, de transformaciones
            voluntarias y otras no tanto, pero que al final buscan definir un
            nivel de reconocimiento, y algo que se hace evidente es la necesidad
            de hablar de buscar nuevas formas de explicar las nuevas formas de
            relacionarse en el marco de comunidades digitales que a veces no
            llegan a serlo de manera exclusiva y de como “LIkes”, “Ups “y “call
            to action” tienden a tener espejos en nuestra cotidianidad, que a su
            vez implican un ir y venir entre lo digital y lo análogo teniendo
            implicaciones y desarrollos autónomos o no en cada uno de los
            escenarios bien sean públicos o privados.
          </div>
        </div>
        <div className="botonVolver botonPerfil titulo1">
          <a href="http://localhost:3000/home">VER EXPERIENCIA</a>
        </div>
      </div>
    );
  }
}
export default Teoria;
