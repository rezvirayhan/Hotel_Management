import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const TMentor = ({ tmentor }) => {
  const { _id, name, descripition, img } = tmentor;
  const navigate = useNavigate();
  const navigatToTMentorDetail = (id) => {
    navigate(`/tmentor/${id}`);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{descripition}</Card.Text>
          <Button onClick={() => navigatToTMentorDetail(_id)} variant="primary">
            Let's Go {name}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TMentor;
