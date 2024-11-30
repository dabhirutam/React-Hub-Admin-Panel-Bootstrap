import { Card, Col, ListGroup } from "react-bootstrap";
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Products = ({ productData }) => {

    return (
        <Card className="bg-transparent border-secondary rounded-0">
            <Card.Body>
                <Card.Title className="fs-6 mb-4 d-flex justify-content-between">TOP PRODUCTS <i className="bi bi-fullscreen fs-7 btn p-0 border-0"></i></Card.Title>
                <ListGroup className="fw-medium fs-7 mt-3 row-gap-3">
                    {
                        // eslint-disable-next-line react/prop-types
                        productData.map((pro, index) => {
                            return (
                                <ListGroup.Item key={index + 1} className="bg-transparent border-0 d-flex p-0" >
                                    <Col md={7} className="d-flex align-items-center">
                                        <Card className="bg-transparent me-3">
                                            <Card.Img className="rounded-0 object-fit-cover" style={{ width: '95px', aspectRatio: '3/2' }} src={pro.i} alt="" />
                                            <Card.ImgOverlay style={{ padding: '0%' }}>
                                                <div className="frame bg-success d-flex align-items-center justify-content-center text-dark">{index + 1}</div>
                                            </Card.ImgOverlay>
                                        </Card>
                                        <div>
                                            <span className="bg-secondary px-2 rounded-0 fs-7">{pro.b}</span>
                                            <p className="mb-0 mt-1 text-light">{pro.t}</p>
                                            <span className="">{pro.pr}</span>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <ListGroup>
                                            {
                                                [{ t: 'QTY', v: pro.q }, { t: 'REVENUE', v: pro.r }, { t: 'PROFIT', v: pro.p }].map((item, index) => {
                                                    return (
                                                        <ListGroup.Item className="bg-transparent d-flex border-0 p-0 text-light" key={index}>
                                                            <span className="col-6">{item.t}</span>
                                                            <span className="col-6">{item.v}</span>
                                                        </ListGroup.Item>
                                                    );
                                                })
                                            }
                                        </ListGroup>
                                    </Col>
                                    <Col md={2} className="d-flex align-items-center justify-content-end">
                                        <i className="bi bi-search btn border-0 text-light"></i>
                                    </Col>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Products;