import { Card, Col, ListGroup } from "react-bootstrap";
import DonutChart from "../Charts/DonutChart";
import TwoBarChart from "../Charts/TwoBarChart";
import { CircleIcon } from "./CircleIcon";


const ServerStatus = () => {
    return (
        <Card className="bg-transparent border-secondary rounded-0">
            <Card.Body className="d-flex flex-column row-gap-2">
                <Card.Title className="fs-6 d-flex justify-content-between">SERVER STATS <i className="bi bi-fullscreen fs-7 btn p-0 border-0"></i></Card.Title>
                <TwoBarChart />
                <div className="d-flex align-ietems-center">
                    <Col md={6}>
                        <div className="d-flex align-items-center">
                            <div className="mb-4" style={{ width: "4rem" }}>
                                <DonutChart segmentData={[53, 64, 88, 90, 38]} />
                            </div>
                            <Card className="bg-transparent border-0 col">
                                <Card.Body className="pb-0">
                                    <Card.Title className="fs-7">DISK USAGE</Card.Title>
                                    <Card.Subtitle className="mb-2 text-light fs-5">20.04 / 256 GB</Card.Subtitle>
                                    <div className="mt-3 d-flex">
                                        <Col md={3} className="rounded-start-2 bg-success pt-1"></Col>
                                        <Col className="rounded-end-2 bg-secondary bg-opacity-50 pt-1"></Col>
                                    </div>
                                    <span className="fs-7 fw-medium">Last updated 1 min ago</span>
                                    <ListGroup className="fw-medium fs-7 mt-2">
                                        <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0 text-light">
                                            <span className="d-flex align-items-center">
                                                <CircleIcon c="3cd2a5" />DISK C
                                            </span>
                                            19.56GB
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0 text-light">
                                            <span className="d-flex align-items-center">
                                                <CircleIcon c="224449" />DISK D
                                            </span>
                                            0.50GB
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex align-items-center">
                            <div className="mb-4" style={{ width: "4rem" }}>
                                <DonutChart segmentData={[23, 53, 54, 72, 75]} />
                            </div>
                            <Card className="bg-transparent border-0 col">
                                <Card.Body className="pb-0">
                                    <Card.Title className="fs-7">BANDWIDTH</Card.Title>
                                    <Card.Subtitle className="mb-2 fs-5 text-light">83.76GB / 10TB</Card.Subtitle>
                                    <div className="mt-3 d-flex">
                                        <Col md={1} className="rounded-start-2 bg-success pt-1"></Col>
                                        <Col className="rounded-end-2 bg-secondary bg-opacity-50 pt-1"></Col>
                                    </div>
                                    <span className="fs-7 fw-medium">Last updated 1 min ago</span>
                                    <ListGroup className="fw-medium fs-7 mt-2">
                                        <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0 text-light">
                                            <span className="d-flex align-items-center">
                                                <CircleIcon c="3cd2a5" />HTTP
                                            </span>
                                            35.47GB
                                        </ListGroup.Item>
                                        <ListGroup.Item className="bg-transparent border-0 d-flex justify-content-between p-0 text-light">
                                            <span className="d-flex align-items-center">
                                                <CircleIcon c="224449" />FTP
                                            </span>1.25GB
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ServerStatus;