import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import relaxation1 from'../../images/Relaxation/relaxation_carousel_1.jpg'
import relaxation2 from'../../images/Relaxation/relaxation_carousel_2.jpg'
import relaxation3 from'../../images/Relaxation/relaxation_carousel_3.jpg'
import { Fade } from 'react-reveal';

const Relaxation = () => {
    return (
        <div>
             <div className="mt-5">
             <Container>
      <Row>
        <Col sm={4}>
            <p style={{letterSpacing:'3px'}}>INTERNAL SPA</p>
      
       <Fade left>
       <b> <h1 style={{fontSize:'55px'}}> <span style={{color:'coral'}}>Relaxation</span> <span style={{color:'slateblue'}}> & </span> <span style={{color:'mediumvioletred'}}> Wellness</span> </h1> </b>
       <p className='mt4' style={{letterSpacing:'2px'}}> <em>
       It's a process that decreases the stress effects on your mind and body. Relaxation techniques can help you cope with everyday stress. And these techniques can help with long-term stress or stress related to various health problems, such as heart disease and pain.
       </em> </p>
        </Fade>
        </Col>
        <Col sm={8}>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={relaxation1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={relaxation2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={relaxation3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </Col>
      </Row>
      
    </Container>
             </div>
        </div>
    );
};

export default Relaxation;