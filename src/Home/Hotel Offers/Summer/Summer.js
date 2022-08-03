import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Summer.css'
import offer from '../../../images/Offer/summer_offer.jpg';
import offering from '../../../images/Offer/summer_offering.png';
import summerrom from '../../../images/Offer/summer_offer_room.jpg';
import room from '../../../images/Offer/offer_room.jpg';
import dinner from '../../../images/Offer/offer_dinner.jpg';
import { Fade, Flip } from 'react-reveal';
const Summer = () => {
    return (
        <div className='mt-5'>
            <Container>
                <h1 id='summer_heading' className='mt-2 mb-5'>Best Summer Offers</h1>
      <Row>
        <Col>
        <p id='summer_p' className='font-italic'>BEST SUMMER OFFERS</p>
        <Flip bottom>
        <h1 id='sumer_title' className='mt-4'>Check the <span className='mt-3' style={{color: 'tomato'}}>Promotions</span></h1>
        </Flip>
        <img className='rounded mt-5 img-fluid img-thumbnail p-3' src={dinner} alt="" />

        <p className='mt-4'>Pellentesque maximus pharetra tristique. Vestibulum eget odio blandit, finibus felis non, efficitur diam. Sed condimentum pellentesque eros. Etiam posuere turpis in ultricies ullamcorperMauris ut libero eget erat scelerisque vehicula. Phasellus nec blandit metus. Nulla quis molestie risus. </p>
        </Col>
        <Col>
        <Card>
<Card.Img variant="top" src={summerrom} />
</Card>
         </Col>
        <Col>
        <Fade top>
        <Card className='p-3'>
            <Card.Img variant="top" src={offer} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Fade>
        
         <div className='mt-3'>
            <img className='img-fluid img-thumbnail p-2 ' src={room} alt="" />
         </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Summer;



