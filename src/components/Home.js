import React, {useEffect,useState} from "react";
import "./Home.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DraftsIcon from '@mui/icons-material/Drafts';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import homeVideo from "../Images/fondo1.mp4";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Foto from "../Images/foto.png";
import fondoBottom from "../Images/fondo2.png";
import { TimelineMax, Power4, Linear } from "gsap";
import Foto1 from "../Images/Group 9.png";
import Celu from "../Images/Group 7.png";
import contac from "../Images/Group 41.png";


import ReactBootstrapCarousel from "react-bootstrap-carousel";
import Slider from 'infinite-react-carousel';
import transpo from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
import logo4 from "../Images/logo4.png";
import logo5 from "../Images/logo5.png";
import logo6 from "../Images/logo6.png";
import logo7 from "../Images/logo7.png";

const Home = () => {
  const tl = new TimelineMax();
  const [index, setIndex] = useState(0);

const doCoolStuff = () => {
  tl.reversed(!tl.reversed());
}
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};

  
 
  return (
    <div className="home">
      <video className="home__video" src={homeVideo} autoPlay loop muted></video>
      <div className="home__info">
        <div className="home__infoContainer">
          <h1 className="home__text">Explora un mundo de soluciones tecnológicas</h1>
          <a href="https://plataforma.ejetic.com.co">
<Button className="home__buttoninicio" variant="outline-warning">IMPERIUM</Button>
          </a>

          
     
        </div>
      </div>
      <div className="home__Quienessomos">
        <div className="home_textoContainer">
         
          <div className="home__Objetivotext">
              <h1 className="home__Objetivotext2">¿Que nos hace diferentes en el mercado?</h1> 
              <p className="home__Perfil1">
               Grupo Empresarial EJETIC S.A.S ha desarrollado un Software para la adopción de la política pública del Gobierno Digita del Estado Colombiano, acelerando los procesos de diagnóstico y planificación estratégica de TI y 
               con el cual se puede hacer una Implementación coherente y más eficiente que la tradicional.



              </p>
              
          </div>
          <Image className="home__ImagenObjetivo" src={Celu} fluid></Image>
        </div>
    
    

        <div className="home_textoContainer">
          <Image className="home__ImagenObjetivo2" fluid src={Foto1}></Image>
          <div className="home__Objetivotext">
            <h1 className="home__Objetivotext2">Nuestros servicios</h1> 
            <p className="home__Perfil1">
              Software para el seguimiento, evaluación y control de la política de Gobierno Digital.Inscrito en la oficina de Registro de la Unidad Administrativo Especial. 
              Dirección Nacional de Derecho de Autor del Ministerio del Interior y avalado mediante el Registro de Soporte Lógico-Software: Libro 13-Tomo 72-Partida 6 1, con fecha de Registro 19-Feb-2019 
            </p>
            <a href="https://plataforma.ejetic.com.co" >
            <Button variant="warning">Ingresar a IMPERIUM</Button>{' '}

           
            </a>
          </div>
         
        </div>
      </div>
     
      <div className="home__testimonio" >
      <div>
      <h1 className="home__Testtimoniotext1">
     Conoce nuestros aliados
        </h1> 
      <p className="home__Testtimoniotext"> 
        En el Eje Cafetero, nuestra organización ha generado alianzas estratégicas con entidades públicas que han optado por adquirir nuestros servicios como eje fundamental en la construcción de la Política Pública de Gobierno Digital.
        estos aliados han avanzado significativamente en el resultado de la implementación del Modelo Integrado de Planeación y Gestión - MIPG, utilizando el “software para la adopción de la Política de Gobierno igital”.
        </p>
        </div>
        <Carousel className="home__carrucel">
  <Carousel.Item interval={1000}>
    <img
      
      src={transpo}
      alt="First slide"
    />
<img
      
      src={logo4}
      alt="First slide"
    />
    <img
      
      src={logo3}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
   
      src={logo5}
      alt="Second slide"
    />
     <img
   
   src={logo6}
   alt="Second slide"
 />
  <img
   
   src={logo7}
   alt="Second slide"
 />
    
  </Carousel.Item>
 
</Carousel>
        {/* Carrusel */}
    </div>
      <div className="home__contacto">
        <h2 className="home__contactotext">Comunicate con nosotros</h2>
          <div className="home__infoContacto">
             {/* Div para imagen */}
          <div className="home__imagecontac">
          <img className="home__contactoImage"src={contac}></img>
          </div>
          

          {/* Div para contenido */}
          <div className="home__contatext">

      
          <div className="home__whatsapp">
            <a href= "https://api.whatsapp.com/send?phone=3142281086&text=Bienvenido%20a%20EJETIC%20pronto%20nos%20comunicaremos%20con%20usted,%20mientras%20tanto%20puede%20enviarnos%20un%20mensaje%20sobre%20el%20servicio%20que%20le%20intereso.%20">
               <WhatsAppIcon sx={{ fontSize: 50 }}  className="home__whaicon"/>
               </a>
              <div className="home__texticono">
          <h1 className="home__numerotext"> +57 3142281086</h1>
          
          </div>
          </div>
          
            <div className="home__whatsapp">
               <DraftsIcon  sx={{ fontSize: 50 }}  className="home__whaicon"/>
              <div className="home__texticono">
          <h1 className="home__numerotext"> gerencia@ejetic.com.co</h1>
          
          </div>
          </div>
          <div className="home__whatsapp">
               <HomeWorkIcon sx={{ fontSize: 50 }}  className="home__whaicon"/>
              <div className="home__texticono">
          <h1 className="home__numerotext"> Calle 19# 775 Edificio Braulio Londoño Oficina 211</h1>
          
          </div>
          </div>
          <div className="home__whatsapp" 
      >
        <a href="https://www.instagram.com/eje.tic/?hl=es"target="_blank">

        
        
               <InstagramIcon sx={{ fontSize: 50 }}  className="home__whaicon" />
               </a>
              <div className="home__texticono">
          <h1 className="home__numerotext">@eje.tic</h1>
          
          </div>
          </div>
     
      <div className="home__whatsapp" >
      <a  href="https://web.facebook.com/Grupo-Empresarial-Eje-TIC-110899978070878/about" target="_blank">
               <FacebookIcon sx={{ fontSize: 50 }} className="home__whaicon"/>
               </a>
               
              <div className="home__texticono">
          <h1 className="home__numerotext"> Grupo Empresarial Eje TIC </h1>
          
          </div>
          </div>
              </div>
          {/* Fin del div */}
          </div>

         
     
      
     
     </div>
    
      </div>
  );
};


export default Home;
