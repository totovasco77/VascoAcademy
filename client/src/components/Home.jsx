import React from 'react'
import Logout from './authentication/Logout';
import banner from "../assets/images/banner.jpeg";
import { Image } from 'react-bootstrap';
import './Styles/Home.css';

function Home() {
  return (
  <>
  <div className='Banner'>
    <h1>Conviértete en la próxima estrella FULLSTACK estudiando en Vasco Academy</h1>
  </div>
  <div className="title">     
    <h1>Bienvenido a Vasco Academy</h1>
  </div>
  <div className='text'>
    <h2>Nos complace ofrecer una amplia gama de cursos de informática dseñados para satisfacer sus necesidades de aprendizaje; sin importar su nivel de experiencia. En nuestro instituto encontrará un equipo dedicado de instructores expertos apasionados por la enseñanza y listos para ayudarlo a tener éxito.</h2>

    <h2> Nuestra misión es brindarle las habilidades y conocimientos que necesita para tener éxito en la era digital actual. creemos que todos deberían tener acceso a una educación de calidad, por eso nos esforzamos por brindar opciones opciones de aprendizaje asequibles y flexibles. Nuestros cursos están diseñados para ser prácticos , brindándole la oportunidad de aplicar lo que aprende en entornos dle mundo real.</h2>

    <h2> Únase al mejor instituto de IT y emprenda un viaje de crecimiento y éxito con nosotros.</h2>
  </div>
  
   <div className='logout'>
    <Logout />
   </div>
     
  </>
  );
}

export default Home;