import React from "react";
import "./LandingPage.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function LandingPage() {
  return (
    <div>
      
      <React.Fragment className="fragment">
        <h1 className="text-center text-danger text-capitalize my-5">
          {" "}
          Welcome
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card className="card">
                <Card.Img variant="top" src="" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Card Title</Card.Title>
                  <Card.Text className="card-tex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm">
              <Card className="card">
                <Card.Img variant="top" src="" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Card Title</Card.Title>
                  <Card.Text className="card-tex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm">
              <Card className="card">
                <Card.Img variant="top" src="" />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">Card Title</Card.Title>
                  <Card.Text className="card-tex">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </React.Fragment>
      
      <div className="hr">
        <hr className="line" />
        <h1 className="hospital">HOSPITAL</h1>

      
      
      </div>
    </div>
  );
}

export default LandingPage;
