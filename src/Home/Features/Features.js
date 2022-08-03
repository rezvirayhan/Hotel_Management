import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bounce from 'react-reveal/Bounce';
import icon2 from'../../images/icon/icon1.png';
import icon1 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon4.png';


const Features = () => {
    return (
        <div className='mt-5 mb-5'>
            <Container>
      <Bounce>
      <Row>
        <Col> 
        <div className='d-flex justify-content-between'>
        <div>
        <img style={{width:'100%'}} className='img-fluid' src={icon3} alt="" />
        </div>
        <div>
        <h3>Room Service</h3>
        <p>Room service is a service in a hotel by which meals or drinks.</p>
        </div>
        </div>
        </Col>
        <Col> 
        <div className='d-flex justify-content-between'>
        <div>
        <img style={{width:'100%'}} className='img-fluid' src={icon2} alt="" />
        </div>
        <div>
       <h3>Smart Key</h3>
        <p>A smart key is an electronic access authorization system. </p>
        </div>
        </div>
        </Col>
        <Col> 
        <div className='d-flex justify-content-between'>
        <div>
        <img style={{width:'100%'}} className='img-fluid' src={icon1} alt="" />
        </div>
        <div className='ml-3'>
        <h3>Checkroom</h3>
        <p>The meaning of CHECKROOM is a room at which baggage, parcels.</p>
        </div>
        </div>
        </Col>

      </Row>
      </Bounce>
    </Container>
        </div>
    );
};

export default Features;