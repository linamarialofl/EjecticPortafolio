import React, {useEffect,useState} from 'react'
import "./Portafolio.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import { TimelineMax, Power4, Linear } from "gsap";
import Image from 'react-bootstrap/Image';
import portafolioVideo from "../Images/video2.mp4";
import foto4 from "../Images/Group 30.png";
import foto5 from "../Images/Group 33.png";
import foto6 from "../Images/Group 34.png";
import publico from "../Images/colombia.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Portafolio = () => {
  const tl = new TimelineMax();
  const [index, setIndex] = useState(0);

const doCoolStuff = () => {
  tl.reversed(!tl.reversed());
}
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
    return (
        
    <div className="portafolio">
      <div className="portafolio__info">
        <video className="portafolio__video" src={portafolioVideo} autoPlay loop muted></video>
        <div className="portafolio__infoContainer">
          <h1 className="portafolio__text">Portafolio</h1>
        </div>
      </div>
            <div className="nosotros__contenidocards"> 
<CardGroup className="card__group">
  <Card className="portafolio__cardconteiner">
  <div className="portafolio__image">
   <Card.Img variant="top" src={foto4 } />
  </div>
   
    <Card.Body>
    
      <Card.Title className="portafolio__titulocard">EJE Básico</Card.Title>
    
     
      <Card.Text>
      Se sugiere para Departamentos: Tercera y Cuarta categoría. Municipios: Cuarta, Quinta y Sexta categoría y todas las entidades del orden descentralizado. Incluye 5 entregables automatizados en la plataforma: PETI, Arquitectura Empresarial, Análisis de Brechas, Matriz de Impactos y Políticas y Estándares de TI 
      </Card.Text>
    </Card.Body>
    <div className="portafolio__botton">
    <Button  variant="primary">Selecciona plan</Button>
    </div>
    
  </Card>
  <Card className="portafolio__cardconteiner">
  <div className="portafolio__image">
   <Card.Img variant="top" src={foto5 } />
  </div>
   
    <Card.Body>
    
      <Card.Title className="portafolio__titulocard">EJE premiun</Card.Title>
    
     
      <Card.Text>
      Departamentos: Segunda categoría. Municipios: Segunda y Tercera categoría y todas las entidades del orden descentralizado. Incluye 10 entregables automatizados en la plataforma: Los 5 de Eje Básico + Acuerdos de niveles de servicio, Portafolio de proyectos de TI, Proyecto de transición del protocolo IPv4 al Protocolo IPv6, Matriz de asignación de responsabilidades (RACI), Matriz de grupos de interés
      </Card.Text>
    </Card.Body>
    <div className="portafolio__botton">
    <Button  variant="warning">Selecciona plan</Button>
    </div>
    
  </Card>
  <Card className="portafolio__cardconteiner">
  <div className="portafolio__image">
   <Card.Img variant="top" src={foto6 } />
  </div>
   
    <Card.Body>
    
      <Card.Title className="portafolio__titulocard">EJE Gold</Card.Title>
    
     
      <Card.Text>
      Departamentos: Segunda categoría. Municipios: Segunda y Tercera categoría y todas las entidades del orden descentralizado. Incluye 10 entregables automatizados en la plataforma: Los 5 de Eje Básico + Acuerdos de niveles de servicio, Portafolio de proyectos de TI, Proyecto de transición del protocolo IPv4 al Protocolo IPv6, Matriz de asignación de responsabilidades (RACI), Matriz de grupos de interés
      </Card.Text>
    </Card.Body>
    <div className="portafolio__botton">
    <Button  variant="success">Selecciona plan</Button>
    </div>
    
  </Card>
</CardGroup>

           </div> 
           <div className="portafolio__textoabajo">

           
           <div className="portafolio_textoContainer">
          <img className="portafolio__ImagenObjetivo2" src={publico}></img>
          <div className="portafolio__Objetivotext">
            <h1 className="portafolio__Objetivotext2">Público Objetivo</h1> 
            <p className="portafolio__Perfil1">
            Grupo Empresarial Ejetic aporta en la construcción del Modelo Integrado de Planeación y Gestión – MIPG. Nuestro principal propósito es consolidar un Estado y ciudadanos competitivos, proactivos, e innovadores, que generen un entorno de confianza digital para aportar en la generación de valor de lo público.
            Nuestros principales clientes son entidades estatales nacionales o territoriales del orden central y descentralizado en todo territorio nacional.

            </p>

           
            
          </div>

        
                    </div>
                    <div className="portafolio__redes"> 
                  <WhatsAppIcon sx={{ fontSize: 40 }}  className="portafolio__icon"/>
                  <InstagramIcon sx={{ fontSize: 40 }}  className="portafolio__icon"/>
                  <FacebookIcon sx={{ fontSize: 40 }}  className="portafolio__icon" />
                
                    </div> 
                    </div>
           </div>
        
    )
}

export default Portafolio
