import React, {useEffect,useState} from 'react';
import "./Nosotros.css";
import nosotrosVideo from "../Images/pre1.mp4";
import { TimelineMax, Power4, Linear } from "gsap";
import Carousel from 'react-bootstrap/Carousel';
import jorge from "../Images/Group 18.png";
import foto1 from "../Images/Group 36.png";
import foto2 from "../Images/hector.png";
import foto3 from "../Images/jesus.png";
import foto4 from "../Images/leonardo.png";
import foto5 from "../Images/lina.png";
import foto6 from "../Images/martha.png";
import foto7 from "../Images/viviana.png";


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Nosotros = () => {
  const tl = new TimelineMax();
  const [index, setIndex] = useState(0);

const doCoolStuff = () => {
  tl.reversed(!tl.reversed());
}
const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
    return (
       
            <div className="nosotros">
                <div className="nosotros__info">
                    <video className="nosotros__video" src={nosotrosVideo} autoPlay loop muted></video>
                    <div className="nosotros__infoContainer">
                      <h1 className="nosotros__text">Nosotros</h1>
                    </div>
                </div>
                  <div className="nosotros__contenidotext"> 
                  <h1 className ="nosotros__text2">  GRUPO EMPRESARIAL EJETIC S.A.S</h1>
           
           <p className="nosotros__titulo2">Es una empresa que propone soluciones tecnológicas en pro de obtener resultados orientados a la consecución de una transformación digital óptima en las entidades públicas del Estado Colombiano. 
Nuestro enfoque está direccionado al cumplimiento de las políticas de Gobierno Digital, para el cual hemos construido un software que permite a las entidades públicas, adoptarla y adaptarla fácilmente y a todos los componentes que por ley incorpora dicha estrategia.
Desde nuestras oficinas en el corazón del Eje Cafetero, brindamos apoyo inmediato a los clientes que se disponen a innovar en el uso estratégico de tecnologías para un Estado moderno y eficiente, que contribuya con el desarrollo social, la gobernanza, la garantía de derechos, la satisfacción de necesidades y la prestación de servicios de calidad. 
La satisfacción de contribuir para que las empresas públicas colombianas cumplan con las políticas del Gobierno Digital y permitan la participación activa de los ciudadanos en la vida cotidiana, es la fuerza que nos impulsa a seguir trabajando.
</p>
           </div> 
           <div className="nosotros__titulo">
                      <h1>NUESTRO LOGO</h1>
                      <p> Nuestro logo es un mono aullador conocido como “el agricultor del bosque”, un primate que tiene como responsabilidad en la naturaleza dispersar las semillas de los frutos de los que se alimenta y expulsarlas listas para germinar. Gracias a esta acción, cumple el rol en el mantenimiento de la diversidad vegetal de los bosques que habita, porque por su acto, favorece la pronta germinación de plántulas, desde que la semilla germina, hasta que adquiere sus primeras hojas.

                        GRUPO EMPRESARIAL EJETIC S.A.S imitando el papel de este primate que habita también en el Eje Cafetero, se impuso como misión esparcir el conocimiento de la política del Gobierno Digital de Colombia a través de su propia semilla (el software). El objetivo es favorecer el cumplimiento del marco normativo, aplicando la experiencia adquirida en las empresas públicas en donde se ha desarrollado tal tecnología. 

                        La principal característica de estos monos, es su aullido, el cual puede viajar cinco kilómetros por los bosques para comunicarse con sus compañeros. Asemejando a este acto, GRUPO EMPRESARIAL EJETIC S.A.S tiene como propósito permitir que las empresas públicas sean más eficientes para atender las necesidades, problemáticas y necesidades de los ciudadanos, a través del uso y apropiación de las tecnologías de la información.
</p>


                    </div>
                    <div className="nosotros__nosotros">
                      <h1>MJISIÓN</h1>
                      <p>Diseñar e implementar soluciones tecnológicas de alto nivel, que permitan el logro de una transformación digital, con estándares de calidad apropiados en entidades públicas y privadas de Latinoamérica y el Caribe.</p>
                    </div>
                    <div className="nosotros__vision">
                      <h1>
                        VISIÓN
                      </h1>
                      <p>
                      En el 2026 Ejetic será una compañía pionera en el uso y aprovechamiento de las tecnologías de la información y las comunicaciones con el fin de consolidar entidades y ciudadanos competitivos, proactivos, e innovadores, que generen valor público en un entorno de confianza digital en Colombia, Latinoamérica y el Caribe.
                      </p>

                    </div>
           <div className="nosotros__team">
           <h1 className="nosotros__tituloteas">Team</h1>
            </div>
            <Carousel className="nosotros__carosel">
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={jorge}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>Jorge Mario Valencia Mesa, Gerente general</h3>
                    <p className="nosostros__contenidopersonas">Ingeniero en Sistemas y Telecomunicaciones de la Universidad del Área Andina, es accionista mayoritario y fundador de la sociedad por acciones simplificadas. 
                        Desde al año 2016 viene trabajando con la estrategia de Gobierno en Línea del Estado Colombiano, actualizándose según los cambios de la política.
                        Inicia sus actividades siendo contratista de la Universidad Tecnológica; posteriormente en el año 2018 construye la Política de Gobierno Digital en la empresa Aguas y Aguas de Pereira, trabajo en el cual se inspiró para crear en el 2019 el Grupo Empresarial Ejetic.
                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto5}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>LINA MARÍA LÓPEZ FLECHAS</h3>
                    <p className="nosostros__contenidopersonas">Desde el año 2021 presta sus servicios al grupo empresarial Ejetic SAS. Es desarrolladora Front con bases de UI/UX; líder de proyectos, estudiante de ingeniería de sistemas con tres años de experiencia en desarrollo front End de páginas web, aplicaciones ecommerce para empresas, también en marketing digital como administrativa y publicista de medios digitales.
                    </p>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto1}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>Diana Milena Pulgarín Santa, Directora administrativa y financiera  </h3>
                    <p className="nosostros__contenidopersonas">Administradora de Empresas, Especialista y magister en administracion gerencial, coach odontologico,l con 18 años de expeciencia en cargos gerenciales, administrativos y financiero.
                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto1}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>DAVID PULGARÍN VALENCIA  </h3>
                    <p className="nosostros__contenidopersonas">
                    Desde el año 2020 presta sus servicios como Igeniero de sistemas y desarrollador de software a grupo empresarial Ejetic S.A.S.  Es Ingeniero de Sistemas y Computación de la Universidad Tecnológica de Pereira; Especialista en Gerencia de Proyectos de la Universidad EAFIT y pendiente de proyecto de la Maestría en Gerencia de proyectos con la misma universidad.

                    Tiene experiencia como Líder de iniciativas de desarrollo de producto en la empresa TALENTA 365 de Medellín; lideró un equipo de trabajo para llevar a cabo el desarrollo de productos de software ProjectMon en Gefetic SAS; profesional de proyectos y líder de soporte del proyecto de Interventoría FITI 160 de la Universidad Tecnológica de Pereira; desarrollador de Software en JAVA/Openxava en la empresa CIDT.

                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto2}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>HÉCTOR JARBY GIRALDO HERNÁNDEZ </h3>
                    <p className="nosostros__contenidopersonas">
                    Desde el año 2020 presta sus servicios como Ingeniero de sistemas a grupo empresarial Ejetic S.A.S.  Es  Ingeniero de Sistemas y Telecomunicaciones de la Universidad Católica de Pereira,  con formación integral humanística, tecnológica y administrativa.

                    Cuenta con experiencia laboral en cargos como secretario de logística y manejo de personal en una Unión temporal entre el departamento de Risaralda y la Universidad Católica de Pereira; docente en el Colegio Sagrados Corazones Pereira, en donde además fue el encargado de mantener la red interna del colegio, brindar soluciones de conectividad; en la Escuela Superior de Administración Pública, ESAP, se desempeñó como Ingeniero de sistemas Territorial Quindío - Risaralda.


                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto3}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>JESÚS DAVID CASAS SOLÓRZANO  </h3>
                    <p className="nosostros__contenidopersonas">
                    Desde Octubre de 2021 hace parte de grupo empresarial Ejetic SAS como Ingeniero Desarrollador de software.  Es  Ingeniero de sistemas recién graduado de la Uiversidad el Bosque.

                    Realizo su práctica en la Casa Editorial El Tiempo, en donde se destacó como Desarrollador del área de Negocios Impresos, realizando seguimiento y correcto funcionamiento de las aplicaciones y páginas Web de la empresa.



                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto1}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>PAULA ANDREA ZAMORA BERRÍO   </h3>
                    <p className="nosostros__contenidopersonas">
                    Desde el mes de noviembre de 2021, acompaña a Grupo Ejetic, se desempeña como Comunicadora Social Periodista, es Especialista en Comunicación Organizacional de la Universidad de Manizales; cuenta con conocimientos en gerencia, planeación de presupuesto, control de la gestión, interventoría y contratación. Así mismo, en programación y gestión de los diferentes medios: radio, prensa y televisión.

                    Tiene experiencia laboral en cargos administrativos y operativos como periodista en medios de comunicación. Fue Interventora de la Oficina de Comunicaciones de la Gobernación de Risaralda; docente del área de Habilidades Comunicativas del programa Técnico Profesional en Programación de Software, de la Corporación Instituto de Administración y Finanzas-CIAF; directora de Comunicaciones de la Sociedad de Mejoras de Pereira – SMP; subdirectora Operativa de Comunicaciones del Instituto Municipal de Cultura y Fomento al Turismo de Pereira y directora de la Emisora Cultural “Remigio Antonio Cañarte”; Comunicadora Social de la Oficina de Comunidades de la Alcaldía de Pereira y periodista en RCN Radio y El Diario del Otún.




                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto4}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>LEONARDO PORRAS DÍAZ  </h3>
                    <p className="nosostros__contenidopersonas">
                    Este ingeniero de sistemas de la Corporación Universitaria Remington, cuenta con formación complementaria en programación y comunicaciones. 

                    Tiene experiencia laboral en el sector de las tecnologías informáticas, énfasis en habilidades en procesos de desarrollo de software, telemática y sistemas de información automatizados para las labores operacionales, científicas, y de investigación para la toma de decisiones, en empresas como Elatin S.A.S, ESE Salud Pereira, Secretaría de las TIC de la Gobernación de Risaralda, Alcaldía de Pereira y la empresa Aguas y Aguas de Pereira.

                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto1}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>MARTHA LUCÍA OSORIO TREJOS  </h3>
                    <p className="nosostros__contenidopersonas">
                    Administradora de Empresas de la Universidad Nacional Abierta y a Distancia, especializada en Gerencia de Proyectos de la Corporación Universitaria Minuto de Dios, cuenta con formación integral en auditorias y competencias para evaluar, planear y ejecutar proyectos.

                    Tiene experiencia laboral en los diferentes procesos que se lideran y gestionan en la administración pública, garantizando el cumplimiento de la normatividad legal vigente, orientada a resultados en entidades como Hospital San Vicente de Paúl de Santa Rosa de Cabal, Alcaldía de Pereira y Gobernación de Risaralda.
                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto6}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>MARTHA NATALIA MONSALVE BOTERO </h3>
                    <p className="nosostros__contenidopersonas">
                    Diseñadora Industrial de la Universidad Católica de Pereira, especialista en Gestión de Calidad y Normalización Técnica de la Universidad Tecnológica de Pereira y estudiante de MBA en Administración y Dirección de Empresas, Máster en Big Data y Business Intelligence y Business English Program.

                    Esta profesional cuenta con 19 años de experiencia en consultoría, implementación y auditoria en Sistemas de Gestión; auditoría de control interno en temas administrativos, operativos y de procesos; construcción, implementación y seguimiento  de planes estratégicos, planes de acción, planes operativos y estrategias corporativas, en entidades como la Empresa de Desarrollo Urbano de Pereira – EDUP, Club del Comercio de Pereira, UPS Comunicaciones y Energía, INFIDER entre otras.

                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto1}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>GISELA ALEJANDRA GÓMEZ VALENCIA</h3>
                    <p className="nosostros__contenidopersonas">
                    Comunicadora social en formación de la Corporación Unificada Nacional – CUN, con interés en ampliar sus conocimientos en el área de redacción, presentación, creación de estrategias y Community Manager.

                    Cuenta con experiencia en comunicaciones en la empresa IMA Comunicaciones y en ventas en diferentes entidades.

                    </p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className=" nosotros__conteinercarru">
                     <img className="nosotros__imgcarr"
                        src={foto7}
                        alt="Third slide"
                    />
                    <div className="nosotros__textopersonas">
                    <h3>VIVIANA ANDREA ARROYAVE GARCIA</h3>
                    <p className="nosostros__contenidopersonas">
                    Con estudios en Derecho, Psicología y actualmente en décimo semestre de Administración Publica de la Escuela de Administración Pública ESAP.

                    Tiene una diversa experiencia laboral en diferentes tareas en entidades como Molinos del Risaralda Cadenas Centrales; EMPOCABAL; Unidad de Víctimas y en la Subsecretaria de Juventudes y Participacion Ciudadana, todos ellos en Santa Rosa De Cabal.

                    </p>
                    </div>
                </div>
            </Carousel.Item>

            </Carousel>
                <div className="nosotros__textoabajo">
                <p className="nosostros__contenidopersonas1">Somos un equipo altamente cualificado, innovador y comprometido en impulsar y apoyar a que las empresas del Estado cumplan los objetivos de la política del Gobierno Digital y logren que la tecnología conecte al Estado con el ciudadano.</p>
                <p className="nosostros__contenidopersonas2">¡Todos somos profesionales apasionados con motivación y dedicación para el éxito de GRUPO EMPRESARIAL EJETIC S.A.S!</p> 
                
                </div>

                 
                    
                    <div className="nosotros__redes"> 
                  <WhatsAppIcon sx={{ fontSize: 40 }}  className="nosotros__icon"/>
                  <InstagramIcon sx={{ fontSize: 40 }}  className="nosotros__icon"/>
                  <FacebookIcon sx={{ fontSize: 40 }}  className="nosotros__icon" />
                
                    </div> 
              </div>
        
    );
}

export default Nosotros;

