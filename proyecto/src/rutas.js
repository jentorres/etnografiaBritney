import React from "react";
import fotoA from "./alvaro.jpg";
import fotoE from "./eli.jpg";
import fotoS from "./silvia.jpg";
import poderesA from "./alvaroBar.png";
import poderesE from "./eliBar.png";
import poderesS from "./silviaBar.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//componentes
import App from "./Components/App/App";
import Home from "./Components/Home/Home";
import Perfil from "./Components/Perfil/Perfil";
import Teoria from "./Components/Teoria/Teoria";
import Momento from "./Components/Momento/Momento";

const AppRutas = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Route path="/perfilA" exact>
            <Perfil
              nombre="Alvaro Guillermo Vargas Colorado"
              apodo="Antropólogo"
              foto={fotoA}
              parrafo="
              Campo Laboral: 
              Conflictividad social y aglomeraciones de alta complejidad."
              poderes={poderesA}
            />
          </Route>
          <Route path="/perfilE" exact>
            <Perfil
              nombre="Elizabeth Mosquera Mosquera"
              apodo="Psicóloga"
              foto={fotoE}
              parrafo="
              Campo laboral: 
              Investigación cualitativa de mercados"
              poderes={poderesE}
            />
          </Route>
          <Route path="/perfilS" exact>
            <Perfil
              nombre="Silvia Victoria Marín Henao"
              apodo="Antropóloga"
              foto={fotoS}
              parrafo="
              Campo laboral: 
              Emprendedora y profesora en procesos de diseño centrado en las personas."
              poderes={poderesS}
            />
          </Route>
          <Route path="/teoria" exact>
            <Teoria />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/m1" exact>
            <Momento
              titulo="Cómo nos configuramos"
              slide1="Al llegar al salón fue imposible no empezar a pensar de donde conocía a la chica rubia que se había sentado en las filas iniciales, al presentarnos pensé que al ser antropólogos nos conocíamos del pregrado, luego nos solicitaron organizarnos en grupos de tres personas allí apareció en escena Eli, y al presentarnos, fue  quien me recordó un ejercicio electoral de hace años y donde yo la había enviado a Usme, lo que nos llevo a recordar ese momento, y definitivamente esta situación define un vinculo emocional frente al desarrollo futuro del proceso."
              slide2="Conocí a mis companeros de equipo por proximidad espacial dentro del salón. Aunque dentro del grupo hay personas que trabajan en investigación de mercados también, me pareció interesante tener miradas distintas y estar con personas que tuvieran roles, actividades e incluso profesiones distintas a la mia. El curso tambien se convierte así para mí en un espacio de desconexión del trabajo al generar otros lenguajes y lógicas dierentes, que me hicieran pensar fuera de la caja. Desde el primer momento me senti muy cómoda con Silvi y Alvaro, quienes me llevaron a ‘el mono’ como inducción a la universidad el primer dia del curso."
              slide3="Al llegar al salón fue imposible no empezar a pensar de donde conocía a la chica rubia que se había sentado en las filas iniciales, al presentarnos pensé que al ser antropólogos nos conocíamos del pregrado, luego nos solicitaron organizarnos en grupos de tres personas allí apareció en escena Eli, y al presentarnos, fue Silvia quien me recordó un ejercicio electoral de hace años y donde yo la había enviado a Usme, lo que nos llevo a recordar ese momento, y definitivamente esta situación define un vinculo emocional frente al desarrollo futuro del proceso."
            ></Momento>
          </Route>
          <Route path="/m2" exact>
            <Momento
              titulo="Inicio - Tema grupos     "
              slide1="Desde el principio como grupo definimos unas reglas mínimas de juego y a su vez establecimos cual seria nuestro nivel de compromiso, y el posible alcance que tendríamos en nuestra experiencia, esto nos llevo a revisar algo que no nos exigiera una inversión de tiempo importante, por lo que seleccionamos la revisión del os grupos de Facebook y la revisión de estos en su fusión de construcción de relaciones sociales.
​
    "
              slide2="Silvi propuso el tema de investigar al rededor de los grupos de la universidad, pues al ser un curso de investigación digital, lo que deberíamos entender debería ser un fenómeno digital. Me pareció super interesante la exploración que hicimos. Si bien la reflexión ética al redor del grupo de parciales Uniandes nos pareció intereante la abandonamos rápidamenteS, pues sugiere un espacio de reflexion mayor.Nos quedamos con los grupos de Clasificados y el de Diseño: mas interesantes, mas dínamicos y por fuera de la discusión étca.
    "
              slide3="El tema de estudio de la clase debía estar vinculado con algo de la Universidad, cuando Juan Felipe hablaba pensé en los grupos den Facebook relacionados con las cosas de la universidad y les propuse que trabajaramos con algo relacionado con estos. 
    "
            ></Momento>
          </Route>
          <Route path="/m3" exact>
            <Momento
              titulo="Descrubimos a Britney
  "
              slide1="Una vez escogido el tema y dispuestos a trabajar sobre este ejercicio Silvia nos presento a Britney, al descubrir una publicación en uno de los grupos de Facebook con un movimiento significativo alrededor de una persona que realizaría un evento para desarrollar un trabajo de una materia, y el logo por esta persona escogido fue el de Britney Spears calvo, lo cual nos llevo a desarrollar un montón de acciones en aras de descubrir que nos podría ejemplificar esta persona en materia de relaciones. Esto asociado al temaae la conversación de la wiki mamis en sobre las cuales empezamos a seguir el tema de likes, up, om los Call to actión.
​
  "
              slide2="Dentro de la exploración de grupos indentificamos las interacciones y las reacciones como un tema interesante. ¿Porque algunas menciones generan reacciones y otras no? Encontramos que todo aquello que genera empatia, permite la recomendación y el posicionarse como experto conduce a más reacciones que aquellas comunicaciones centradas en el ofrecimiento de un producto o servicio. La publicación de Britney resultó especialmente interesante por las interacciones que generó.
  "
              slide3="Después de otro día largo de trabajo iba en un trancón viendo facebook y depronto vi un post del grupo de diseño que llamómucho mia tención no solo por su contenio sino porque tenía varias interacciones, para lo que habíamos visto en redes tenía más likes de lo normal y varios comments que se reflejaban como call to actions a diferentes personas para participar en la actividad. Ahí tomé varios screenshots y se los envié al grupo de whatsaap de la clase donde quedamos de contactar a Britney (cómo decidimos ponerle a la/el creador del post! 
    "
            ></Momento>
          </Route>
          <Route path="/m4" exact>
            <Momento
              titulo="'El pelo' 
"
              slide1="El peludo y el calvo esta nueva conversación entorno al cabello surge nuevamente del ejercicio de Britney, la cual quiere recoger cabello para un tema académico a través de su evento, lo que hace que Silvia me recuerde cuando yo usaba el cabello largo, y junto con Eli, inician a preguntar sobre los posibles significados y vínculos que tuviera mi cabello en relación a la construcción de relaciones, y paralelamente, Eli, recuerda un amigo suyo calvo, el cual nos conto lo que hoy en día significa para el ser calvo y la construcción de su imagen hoy en día.
​
"
              slide2="Entonces, al conocer la intención de la convocatoria de Britney,  llegamos a la reflexión al rededor de lo calvo, lo peludo y sus significados. Entrevistamos a Alvaro, quien por convicción no se raparía nunca, y, a Diego; psicólogo, calvo y con runas en la barba. Con ellos exploramos los significados del pelo y su rol en las relaciones sociales,de pareja e incluso las posturas ideológicas de ambos. Camino interesante de exploracion (carita feliz)
"
              slide3="Ya en clase retomamos la historia de la amiga Britney y empezamos a hablar de la relación que teníamos con el pelo. Para eso hablamos con Alvaro sobre su pelo (cuando yo lo conocí el tenía el pelo largo) el nos contó la relación política que tenía con el y cómo era un acto tambien de resistencia, ahí nos habló de la selección de Argentina de no sé que año durante la dictadura y cómo este era un simbólo de resisitencia, yo pensé en la historía de una chica en Cali que decidió reivindicar el afro en las mujeres negras del pacífico colombiano y les enseña a arreglarlo y cuidarlo. 
"
            ></Momento>
          </Route>
          <Route path="/m5" exact>
            <Momento
              titulo="'Perfiles de interacción 
"
              slide1="Posterior a nuestras conversaciones en torno al cabello y su significado en la construcción de relaciones, salimos a caminar en aras de utilizar nuevas herramientas para vincularlas a nuestro proceso, así realizamos dos videos, uno con un chico de pregrado, al cual denominamos el hiperconectado ya que a través de su relato nos permitió evidenciar la importancia que tienen las redes en sus procesos de relacionamiento, y paralelamente nos encontramos otra persona de maestría y quien no tiene el más mínimo interés de generar un vinculo con la universidad mas allá del estrictamente académico.
​
"
              slide2="Por fin nos fuimos a la calle. Dentro de la universidad encontramos a Nicálas 19 años estudiante de ingeniería quien nos contó sobre los grupos de los que hacía parte y por otro lado hablamos con un estudiante de maestria, poco  conenctado con los grupos y sus dinámicas.  Éstas conversaciones nos ayudaron a entender que el significado atribuído a los grupos y su interacción con ellos depende del sentido de pertenencia que se construya antes y a través de ellos, en este caso la pertenencia a la  a la unversidad. Este hallazgo nos hizo felices, muy felices 
"
              slide3="Hasta esta clase no habíamos salido a tener contacto físico con nadie, creo que el modo ahorro de enrgía aplicaba tambien para los ejercicios de clase. Juan Felipe (el profesor) insitió un poco en que saliéramos a explorar entonces decidimos salir a preguntarle a gente random en la universidad sobre los grupos en los que estaban y cómo participaba en esto. 
"
            ></Momento>
          </Route>
          <Route path="/m6" exact>
            <Momento
              titulo="Contactamos a Britney
​
"
              slide1="Y de una manera u otra a través de nuestra interminables y divertidas conversaciones, surge la idea de contactar a Britney de ver la respuesta en la red a vincularnos a algo, particularmente a su evento del cabello para su materia, en un principio no hay ningún tipo de respuesta, lo que nos por lo que decidimos visitarla en su evento. Y me comprometo con las chicas de venir el día jueves a visitar y a conversar con Bri, sin embargo, al llegar a la universidad no había tal, situaciones que nos enteramos al siguiente día por Silvia quien identifica en la red que Britney había cancelado a su evento. Sin embargo, ese mismo día nos contesta y nos propone un encuentro para el siguiente sábado. 
​
"
              slide2="Nos acercamos a Britney con la intención de salir del entorno digital y hacerle un montón de preguntas que alimentaran la investigación alrededor de los grupos de la universidad. Nos parecia muy adecuado a nuestra pregunta de investigación inicial poder charlar con alguien que saliera del entorno digital al análogo. Stolkeamos a Britney y nos hicimos a una idea de quien era, algo difusa lo cual despertó aún más nuestra curiosidad. La emoción del momento por ende fue ansiedad
​
"
              slide3="Después de haberle escrito a Britney durante la clase el/ella nos respondió el mensaje por inbox en facebook. Diciendo que el evento (al que había intentado ir Alvaro sin encontrar a nadie) se había cancelado. Le conté por encima lo que estabamos haciendo y le dije que estabamos muy interesados en conocerl@, por eso cuadramos que podíamos conocernos el sábado pues también iba a estar en clase. Ese día estuvimos escribiendole desde temprano intntando coordinar para poder vernos. 
"
            ></Momento>
          </Route>
          <Route path="/m7" exact>
            <Momento
              titulo="Conquista 
"
              slide1="La conquista, creo que este fue el punto que nos llevo a reconocer que el ejercicio etnográfico que veníamos trabajando sobre Britney y sus relaciones, era también sobre nosotros, Eli, Silvia y yo al empezar a contarnos historias de amor y desamor, de como conquistar y morir en el intento o de simplemente con robarle una sonrisa a una niña linda.
​
"
              slide2="La reflexión al rededor de lo digital y análogo nos llevó a hablar de cómo las relaciones que surgen en el entorno digital, paso a paso se van llevando a entornos análogos para generar permanencia. Allí surge para nosotros un nuevo concepto y es el de sostenibilidad y es hacer que la relación/interaccion perdure al migrar a otros entornos, trascendiendo la limitación de lo digital. Exploramos las relaciones de 'antaño' a través de las conquistas análogas de Alvaro, hablamos de Tinder y como las relaciones requieren del entorno digital para denotar interés o presencia 'darle like a la foto del man en Instagram es una forma de decir 'ey, aquí estoy, no me he olvidado de ti' dice Silvia. El estado emocional: ansiosos por Britney, divertidos, contentos. 
"
              slide3="A partir de las reflexiones de la clase sobre la creación de mapas empezamos a pensar como podíamos pensar en construir trayectorias de lo que habíamos hecho hasta ahora, eso nos hizo pensr en cómo se construían las relaciones y cómo en lo digital habían procesos de desarrollo y contrucción de las relaciones. Y ahí llegamos a un caso de la vida real donde había conocido a alguien esa semana y empezamos a hablar por instagram y la red social y las interacciones en ella se convirtieron en la forma de continuar una relación o un contacto que empezó en análogo. 
"
            ></Momento>
          </Route>
          <Route path="/m8" exact>
            <Momento
              titulo="Britney nos deja plantados 
"
              slide1="Pucha, y ya listos para encontrarnos con el o ella, (porque realmente no sabíamos con quién íbamos a interlocutar) simplemente nos ignora y no nos priva de conocernos de tener una nueva fuente sobre el papel que juega la internet en el marco de nuestras relaciones, pero a su vez, entendemos que esto es sobre nosotros, sobre nuestra experiencia en utilizar nuevas herramientas, es como usar gafas nuevas para ver nuevos mundos.
​
"
              slide2="Silvia logra pasar con Britney a un canal más cercano (el chat de Whataspp).  Estamos todos super ansiosos de concerla y con ella dar cierre a los temas que veniamos hablando. La esperamos...varias horas... nos dejó plantados. Pero siempre con buena actitud retomamos el curso de nuestra exploración y seguimos adelante, pero Britney marcó mucho de lo que sería y fué nuestra investigación. Estado emocional: calma, no nos frustramos
​
"
              slide3="El sábado en clase como decía le escribimos desde temprano para poder encontrarnos, le pedimos su nombre y la verdad nunca no lo confirmó. Intentamos verl@ en distitnos momentos y siempre nos decía que más tarde, luego finalmente fuimos a almorzar y nos dijo que mejor hablaramos por llamada otro día y después ya nunca más nos respondió por whatsaap. Nos dejó en visto mal! 
"
            ></Momento>
          </Route>
          <Route path="/m9" exact>
            <Momento
              titulo="Etnografia de lo cotidiano
"
              slide1="Y luego de haber pasado un mes largo conociéndonos vemos como surge un producto de investigación en el ejercicio cotidiano de conversar, de exponernos de ser objetos y sujetos de nuestro propio estudio, de reconocer en nuestro comportamiento, como incluir este o estos ejercicios y reconocer el estar y no estar hace parte de las nuevas dinámicas de procesos de investigación.
​
"
              slide2="Cuando en lo cotidiano hago investigación o etnografía esta se vive más desde el compromiso con un resultado que se debe mostrar, la ansiedad de tener la información completa, los permisos, los incentivos, las matrices de bajada de información y que todos los freelance hagan la tarea. Hoy me encuentro con una forma de hacer etnografía de manera divertida, dejando que mis historias personales permeen lo aprendido, siendo objeto  investigado y e investigadora a la vez. Me gocé este proceso, porque adémas descubrí otros caminos válidos para sumergirme en un tema de investigación, nuevas y divertidas formas de entender fenomenos. Me reí un montón. El trabajo termina siendo una exploración randomizada, así como cuando uno navega en internet. Pica aquí, pica allá, se encuentra con muros y también  encuentra tesoros.
​
"
              slide3="En las dos últimas clases tuvimos un proceso continuo de reflexión sobre el ejercicio etnográfico que habíamos realizado hasta ahora. En este ejercicio nos dimos cuenta que todo lo que habíamos estado haciendo hasta ahora era un proceso de autoreflexión sobre nuestras vidas y nuestras relaciones. Pero sobre todo de cómonos habíamos divertido a lo largo del proceso, como el humor y el disfrute de la actividad se había convertido en el eje del proceso de reflexividad de la etnografía. 
"
            ></Momento>
          </Route>
          <Route path="/m10" exact>
            <Teoria />
          </Route>
        </Switch>
      </App>
    </Router>
  );
};

export default AppRutas;
