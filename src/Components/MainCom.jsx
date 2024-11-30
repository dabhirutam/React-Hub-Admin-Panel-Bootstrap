import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import BarChart from "../Charts/BarChart";
import TwoBarChart from "../Charts/TwoBarChart";

const MainCom = () => {
  const cardData = [
    {
      t: "SITE VISITORS",
      v: "4.2m",
      b: "Bar",
      p: [
        { i: "graph-up-arrow", t: "33.3% more than last week" },
        { i: "person-fill", t: "45.5% new visitors" },
        { i: "x-circle", t: " 3.25% bounce rate" },
      ],
    },
    {
      t: "STORE SALES",
      v: "$35.2K",
      p: [
        { i: "graph-up-arrow", t: "33.3% more than last week" },
        { i: "bag-fill", t: "45.5% new visitors" },
        { i: "currency-dollar", t: " 3.25% bounce rate" },
      ],
    },
    {
      t: "$35.2K",
      v: "4,490",
      p: [
        { i: "graph-up-arrow", t: "33.3% more than last week" },
        { i: "facebook", t: "45.5% new visitors" },
        { i: "youtube", t: " 3.25% bounce rate" },
      ],
    },
    {
      t: "BANDWIDTH",
      v: "4.5TB",
      p: [
        { i: "graph-up-arrow", t: "33.3% more than last week" },
        { i: "window-sidebar", t: "45.5% new visitors" },
        { i: "hand-index", t: " 3.25% bounce rate" },
      ],
    },
  ];

  return (
    <>
      <section
        className="border-0 border-start ms-auto py-4"
        style={{ width: "calc(100% - 350px)", height: "100vh" }}
      >
        <Container fluid>
          <Row className="row-gap-4">
            {cardData.map((item, index) => {
              return (
                <Col xl={3} lg={6} key={index}>
                  <Card className="bg-transparent border rounded-0">
                    <Card.Body>
                      <Card.Title className="fs-6">{item.t}</Card.Title>
                      <Card.Text>
                        <div className="d-flex align-items-center">
                          <Col xs={6}>
                            <h2 className="text-white">{item.v}</h2>
                          </Col>
                          <Col xs={6}>
                            <div
                              className="ms-auto"
                              style={{
                                width: "250px",
                                height: "70px",
                                padding: "10px",
                              }}
                            >
                              {/* <BarChart /> */}
                            </div>
                          </Col>
                        </div>
                        <ListGroup className="fw-medium fs-7">
                          {item.p.map((item, index) => {
                            return (
                              <ListGroup.Item
                                className="bg-transparent border-0 p-0"
                                key={index}
                              >
                                <i className={`bi bi-${item.i} me-2`}></i>{" "}
                                {item.t}
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-3">
            <Col md={6}>
              <Card className="bg-transparent border rounded-0">
                <Card.Body>
                  <Card.Title className="fs-6">SERVER STATS</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    <TwoBarChart />
                    <div className="d-flex align-ietems-center">
                      <Col md={6}>
                        <div className="d-flex align-items-center">
                          <Col md={4}></Col>
                          <Col md={8}>
                            <Card className="bg-transparent border-0">
                              <Card.Body>
                                <Card.Title className="fs-7">DISK USAGE</Card.Title>
                                <Card.Subtitle className="mb-2 fs-">20.04 / 256 GB</Card.Subtitle>
                                <Card.Text>
                                  <div className="pt-1 rounded-3 bg-success mt-3"></div>
                                  <span className="fs-7">Last updated 1 min ago</span>
                                  <ListGroup className="fw-medium fs-7 mt-3">
                                    <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0">
                                      <span>DISK C</span>19.56GB
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0">
                                      <span>DISK D</span>0.50GB
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="d-flex align-items-center">
                          <Col md={4}></Col>
                          <Col md={8}>
                            <Card className="bg-transparent border-0">
                              <Card.Body>
                                <Card.Title className="fs-7">BANDWIDTH</Card.Title>
                                <Card.Subtitle className="mb-2 fs-">83.76GB / 10TB</Card.Subtitle>
                                <Card.Text>
                                  <div className="pt-1 rounded-3 bg-success mt-3"></div>
                                  <span className="fs-7">Last updated 1 min ago</span>
                                  <ListGroup className="fw-medium fs-7 mt-3">
                                    <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0">
                                      <span>HTTP</span>35.47GB
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0">
                                      <span>FTP</span>1.25GB
                                    </ListGroup.Item>
                                  </ListGroup>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Col md={6}>

          </Col>
        </Container>
      </section>
    </>
  );
};

export default MainCom;
