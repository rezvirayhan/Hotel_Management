import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const TMentor = ({tmentor}) => {
  const {name, descripition,img}= tmentor;
  return (
    <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {descripition}
        </Card.Text>
        <Button variant="primary">Let's Go</Button>
      </Card.Body>
    </Card>
    
    </div>
    
  );
};

export default TMentor;



