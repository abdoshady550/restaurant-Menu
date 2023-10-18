import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Cards = ({meals}) => {
  return (
    <Row className="m-3">
      <Col sm="12">
        { meals.length >=1 ?(meals.map((i)=>{
          return(
      <Card
          style={{ backgroundColor: "#F8F8F8" }}
          className="d-flex flex-row my-3"
        >
          <Card.Img className="img-style" variant="top" src={i.img} />
          <Card.Body>
            <Card.Title className=" d-flex flex-row justify-content-between">
              <div>{i.title}</div>
              <div className="price-style">{i.price} E.G</div>
            </Card.Title>
            <Card.Text className="my-3">
              This is a {i.description} a natural lead-in to additional content. This
              content is a little bit longer.
            </Card.Text>
          </Card.Body>
          </Card>
        )})
     ):(<h1 style={{ color:'#224f61',fontfamily: 'cursive'}} className="text-center"> No meals today 😢</h1>)
}
      </Col>
    </Row>
  );
};

export default Cards;
