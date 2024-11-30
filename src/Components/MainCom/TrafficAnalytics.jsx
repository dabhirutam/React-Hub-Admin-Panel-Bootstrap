import { Card, Col, ListGroup } from "react-bootstrap";
import DonutChart from "../Charts/DonutChart";
import WorldMapChart from '../Charts/WorldMapChart';
import { CircleIcon } from './CircleIcon';

// eslint-disable-next-line react/prop-types
const TrafficAnalytics = ({ trafficData }) => {
    return (
        <Card className="bg-transparent border-secondary rounded-0">
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fs-6 d-flex justify-content-between">TRAFFIC ANALYTICS <i className="bi bi-fullscreen fs-7 btn p-0 border-0"></i></Card.Title>
                <WorldMapChart />
                <div className="d-flex align-items-center">
                    <Col md={6}>
                        <ListGroup className="fw-medium fs-7 pe-3">
                            {
                                // eslint-disable-next-line react/prop-types
                                trafficData[0].map((item, index) => {
                                    return (
                                        <ListGroup.Item className={`bg-transparent border-0 d-flex p-0 text-${index == 0 ? 'light' : index == 3 ? 'success' : ''}`} key={index} >
                                            <Col md={8}>{item.t}</Col>
                                            <Col md={2} className="text-end">{item.v}</Col>
                                            <Col md={2} className="text-end">{item.p}</Col>
                                        </ListGroup.Item>
                                    );
                                })
                            }
                        </ListGroup>
                    </Col>
                    <Col md={6} className="ps-3" style={{ height: '100%' }}>
                        <div className="d-flex align-items-center border border-secondary pe-3" style={{ height: '100%' }}>
                            <div className="px-3" style={{ width: "7rem"}}>
                                <DonutChart segmentData={[53, 64, 88, 90, 38]} />
                            </div>
                            <ListGroup className="fw-medium fs-7 col">
                                {
                                    // eslint-disable-next-line react/prop-types
                                    trafficData[1].map((item, index) => {
                                        return (
                                            <ListGroup.Item className="bg-transparent border-0 d-flex p-0" key={index} >
                                                <Col md={9}>
                                                    <CircleIcon c={item.c} />
                                                    {item.t}
                                                </Col>
                                                <Col md={3} className="text-end">{item.p}</Col>
                                            </ListGroup.Item>
                                        );
                                    })
                                }
                            </ListGroup>
                        </div>
                    </Col>
                </div>
            </Card.Body>
        </Card>
    )
}
export default TrafficAnalytics;