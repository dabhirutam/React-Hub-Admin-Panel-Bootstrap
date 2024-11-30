import { Card, Col, ListGroup } from "react-bootstrap";
import { CircleIcon } from "./CircleIcon";

// eslint-disable-next-line react/prop-types
const ActivityLog = ({ activityData }) => {
    return (
        <Card className="bg-transparent border-secondary rounded-0">
            <Card.Body>
                <Card.Title className="fs-6 mb-4 d-flex justify-content-between">ACTIVITY LOG <i className="bi bi-fullscreen fs-7 btn p-0 border-0"></i></Card.Title>
                <ListGroup className="fw-medium fs-7 mt-3 p-0 rounded-0">
                    {
                        // eslint-disable-next-line react/prop-types
                        activityData.map((item, index) => {
                            return (
                                <ListGroup.Item className="bg-transparent border-0 d-flex py-1 ps-3 fs-7 activity-item text-light" key={index}>
                                    <Col md={7} className="d-flex align-items-center">
                                        <CircleIcon c={item.bg == 'success' ? '3cd2a5' : '6c757d'} />{item.tt}
                                    </Col>
                                    <Col md={2} className="d-flex align-items-center">{item.ti}</Col>
                                    <Col md={2} className="d-flex align-items-center">
                                        <span className={`bg-${item.bg} text-${item.bg == 'success' ? 'dark' : 'white'} px-2 rounded-0 fs-7 fw-medium`}>PRODUCT</span>
                                    </Col>
                                    <Col md={1} className="d-flex align-items-center justify-content-end">
                                        <i className="bi bi-search btn border-0 text-white fs-7"></i>
                                    </Col>
                                </ListGroup.Item>
                            );
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default ActivityLog;