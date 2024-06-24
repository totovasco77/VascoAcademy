import React from 'react'
import { Container, Row, Col,Stack, Image, Nav, NavLink } from 'react-bootstrap';
import './Styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
       <Container fluid>

          <Row className='bg-dark text-white'>
             <Col>
               <Stack>
                  <Image
                    src="https://scontent.fmvd2-2.fna.fbcdn.net/v/t1.6435-9/120735430_4034792013202752_4207989933550444268_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHxiopOb4fAKnhE4vNJ-HyRp-cvCSF4v9an5y8JIXi_1nM4OZlkvtUvT46FL1VpMeOiSdAeEsiSHubwqrj11ChZ&_nc_ohc=6UTDkwiEAwQQ7kNvgEdStfo&_nc_ht=scontent.fmvd2-2.fna&oh=00_AYA96Ltpc-mlEDlil9y9fJF2OF2txrfSADv6NfCOf4czBg&oe=66A025DF"
                    alt="company logo"
                    rounded
                    width={150}
                    height={150}
                    />
                    <h2>Vasco Academy</h2>
                    <p>company tagline</p>
               </Stack>
             </Col>
             <Col>
                <Nav className='flex-column fs-5'>
                      Podría interesarte...
                      <NavLink href='./home' className='text-white'>Home</NavLink>
                      <NavLink href='#' className='text-white'>Acerca de...</NavLink>
                      <NavLink href='#' className='text-white'>Cursos</NavLink>
                      <NavLink href='#' className='text-white'>¡Estamos contratando profesores! </NavLink>
                </Nav>
             </Col>
             <Col>
               <h4>Contacto:</h4>
               <p>vascoacademy@gmail.com</p>
               <p>Teléfono: 098328472</p>
             </Col>
          </Row>
       </Container>
    </footer>
  )
}

export default Footer