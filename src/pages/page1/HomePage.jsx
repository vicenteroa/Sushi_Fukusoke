import React from 'react';
import '../page1/Home.css';
import imagen1 from '../../img/somos.jpg';
import Header from '../../components/header.jsx';
import Login from '../page3/Login.jsx';

function HomePage() {
  return (
    <div>
      <Header
        text1="Inicio de Sesion"
        link1={'/login'}
        text3="Ubicacion"
        link3={"https://www.google.com/maps/place/Fukusuke+sushi+delivery/@-33.4845971,-70.7736224,15.65z/data=!4m6!3m5!1s0x9662c2e6da0ed15d:0x6b10e7a0b0f966cf!8m2!3d-33.4838353!4d-70.771446!16s%2Fg%2F11b6rrpmx8?entry=ttu"}
        showBackground={true}
        textBackground="SUSHI FUKOSUKE"
      />

      <section className="seccion1">
        <div className="sobre-nosotros">
          <h3>¿QUIENES SOMOS?</h3>
          <p>
            El restaurante de sushi Fukusuke, es una empresa dedicada a la
            preparación y venta de sushi en su propio local. El local se
            encuentra ubicado en la comuna de Maipú, es de tamaño pequeño y
            tiene capacidad de mesas para atender a 12 personas en forma
            simultánea.
          </p>
          <img src={imagen1} alt="concienero" className="imgseccion1" />
        </div>
      </section>

      <footer className="contacto" id="contact">
        <h1 className="titcontact">CONTACTANOS</h1>
        <p className="pcontac">+56 92287945</p>
        <p className="pcontac2">fukusukesushi@sushi.cl</p>
      </footer>
    </div>
  );
}

export default HomePage;
