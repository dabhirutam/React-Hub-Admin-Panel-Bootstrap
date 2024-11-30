import { Container, Row, Col } from "react-bootstrap";
import pimg1 from "../../images/products/product-1.jpeg";
import pimg2 from "../../images/products/product-2.jpeg";
import pimg3 from "../../images/products/product-3.jpeg";
import pimg4 from "../../images/products/product-4.jpeg";
import pimg5 from "../../images/products/product-5.jpeg";
import Products from "../MainCom/Products";
import ServerStatus from "../MainCom/ServerStatus";
import BannerCards from "../MainCom/BannerCards";
import TrafficAnalytics from "../MainCom/TrafficAnalytics";
import ActivityLog from "../MainCom/ActivityLog";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const setToggle = useSelector((state) => state.ToggleReducer);

    const cardData = [
        {
            t: "SITE VISITORS",
            v: "4.2m",
            b: "bar",
            p: [
                { i: "graph-up-arrow", t: "33.3% more than last week" },
                { i: "person-fill", t: "45.5% new visitors" },
                { i: "x-circle", t: " 3.25% bounce rate" },
            ],
        },
        {
            t: "STORE SALES",
            v: "$35.2K",
            b: "line",
            p: [
                { i: "graph-up-arrow", t: "33.3% more than last week" },
                { i: "bag-fill", t: "45.5% new visitors" },
                { i: "currency-dollar", t: " 3.25% bounce rate" },
            ],
        },
        {
            t: "$35.2K",
            v: "4,490",
            b: "pi",
            p: [
                { i: "graph-up-arrow", t: "33.3% more than last week" },
                { i: "facebook", t: "45.5% new visitors" },
                { i: "youtube", t: " 3.25% bounce rate" },
            ],
        },
        {
            t: "BANDWIDTH",
            v: "4.5TB",
            b: "donut",
            p: [
                { i: "graph-up-arrow", t: "33.3% more than last week" },
                { i: "window-sidebar", t: "45.5% new visitors" },
                { i: "hand-index", t: " 3.25% bounce rate" },
            ],
        },
    ];

    const contryData = [
        { t: "COUNTRY", v: "VISITS", p: "PCT%" },
        { t: "FRANCE", v: "13,849", p: "40.79%" },
        { t: "SPAIN", v: "3,216", p: "9.79%" },
        { t: "MEXICO", v: "1,398", p: "4.26%" },
        { t: "UNITED STATES", v: "1,090	", p: "4.32%" },
        { t: "BELGIUM", v: "1,045", p: "3.18%" }
    ];

    const browserData = [
        { t: "FEED", p: "25.70%", c: "3cd2a5" },
        { t: "ORGANIC", p: "24.30%", c: "30a78a"},
        { t: "REFERRAL", p: "23.05%", c: "2c8673" },
        { t: "DIRECT", p: "14.85%", c: "27645d" },
        { t: "EMAIL", p: "7.35%", c: "224449" },
    ];

    const productData = [
        { i: pimg1, b: "SKU90400", t: "Huawei Smart Watch", pr: "$399.00", q: "129", r: "$51,471", p: "$15,441" },
        { i: pimg2, b: "SKU85999", t: "Nike Shoes Black Version", pr: "$99.00", q: "108", r: "$10,692", p: "$5,346" },
        { i: pimg3, b: "SKU20400", t: "White Sony PS4", pr: "$599", q: "72", r: "$43,128", p: "$4,312" },
        { i: pimg4, b: "SKU19299", t: "Apple Watch Series 5", pr: "$1,099", q: "53", r: "$58,247", p: "$2,912" },
        { i: pimg5, b: "SKU19299", t: "Black Nikon DSLR", pr: "$1,899", q: "50", r: "$90,950", p: "$2,848" },
    ];

    const activityData = [
        { tt: "You have sold an item - $1,299", ti: "just now", bg: "success" },
        { tt: "Firewall upgrade", ti: "1 min ago", bg: "secondary" },
        { tt: "Push notification v2.0 installation", ti: "1 mins ago", bg: "secondary" },
        { tt: "New Subscription - 1yr Plan", ti: "1 min ago", bg: "success" },
        { tt: "2 Unread enquiry", ti: "2 mins ago", bg: "secondary" },
        { tt: "$30,402 received from Paypal", ti: "2 mins ago", bg: "success" },
        { tt: "3 payment received", ti: "5 mins ago", bg: "success" },
        { tt: "1 pull request from github", ti: "5 mins ago", bg: "secondary" },
        { tt: "3 pending invoice to generate", ti: "5 mins ago", bg: "secondary" },
        { tt: "2 new message from fb messenger", ti: "7 mins ago", bg: "secondary" },
    ]

    return (
        <>
            <section className="border-0 ms-auto py-4 overflow-y-scroll" style={{ width: `calc(100% - ${setToggle ? '300' : '0'}px)`, height: "100vh", transition: "all 0.5s ease-in-out" }}>
                <Container fluid>
                    <Row className="row-gap-4">
                        <BannerCards cardData={cardData} />
                    </Row>
                    <Row className="my-3">
                        <Col md={6}>
                            <ServerStatus />
                        </Col>
                        <Col md={6}>
                            <TrafficAnalytics trafficData={[contryData, browserData]}  />
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={6}>
                            <Products productData={productData} />
                        </Col>
                        <Col md={6}>
                            <ActivityLog  activityData={activityData}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Dashboard;
