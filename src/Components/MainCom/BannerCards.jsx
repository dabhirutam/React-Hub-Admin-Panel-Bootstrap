import { Card, Col, ListGroup } from "react-bootstrap";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PiChart from "../Charts/PiChart";
import DonutChart from "../Charts/DonutChart";

// eslint-disable-next-line react/prop-types
const BannerCards = ({ cardData }) => {
    return (
        <>
            {
                // eslint-disable-next-line react/prop-types
                cardData.map((item, index) => {
                    return (
                        <Col xl={3} lg={6} key={index}>
                            <Card className="bg-transparent border-secondary rounded-0">
                                <Card.Body>
                                    <Card.Title className="fs-6 d-flex justify-content-between">{item.t} <i className="bi bi-fullscreen fs-7 btn p-0 border-0"></i></Card.Title>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h2 className="text-white">{item.v}</h2>
                                        <div style={{ width: "40%", height: "50px" }} >
                                            {item.b == "bar" ? <BarChart /> : item.b == "line" ? <LineChart /> : item.b == "pi" ? <PiChart /> : <DonutChart segmentData={[78, 70, 58, 74, 83]} />}
                                        </div>
                                    </div>
                                    <ListGroup className="fw-medium fs-7">
                                        {item.p.map((item, index) => {
                                            return (
                                                <ListGroup.Item className="bg-transparent border-0 p-0" key={index} >
                                                    <i className={`bi bi-${item.i} me-2`}></i>{" "}{item.t}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            }
        </>
    )
}
export default BannerCards;