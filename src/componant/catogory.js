import { Row, Col } from "react-bootstrap";

const Category = ({ uniqueCategories, filterByCatogory }) => {




  const filterOn = (cat) => {
    filterByCatogory(cat);

  }

  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center text-center">
        {uniqueCategories.map((cat, index) => (
          <div >
            <button key={index} onClick={() => filterOn(cat)} className="btn-style mx-2">
              {cat}
            </button>

          </div>))}

      </Col>
    </Row>
  );
};

export default Category;
