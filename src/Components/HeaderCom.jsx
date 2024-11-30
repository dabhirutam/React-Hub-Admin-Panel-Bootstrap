import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/HUD-logo.png';
import avtar from '../images/avtar.jpg';
import { useDispatch } from 'react-redux';
import { ToggleAction } from '../services/actions/toggleAction';

function HeaderCom() {

    const disptch = useDispatch();

    return (
        <Navbar expand="lg" className="px-2" style={{ backgroundColor: '#1d2835f2' }}>
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="column-gap-2 align-items-center">
                        <Nav.Link href="#" onClick={() => disptch(ToggleAction())}>
                            <div className='border-top border-secondary ps-1 px-4'></div>
                            <div className='border-top border-secondary ps-1 px-4 my-1'></div>
                            <div className='border-top border-secondary ps-1 px-4'></div>
                        </Nav.Link>
                        <Nav.Link href="#logo" className='text-white d-flex align-items-center'>
                            <img src={logo} alt="logo" style={{ width: '30px' }} />
                            <span className='ms-3'>Hud Admin</span>
                        </Nav.Link>
                    </Nav>
                    <Nav className="column-gap-2 align-items-center ms-auto">
                        <Nav.Link href="#" className="text-white"><i className="bi bi-search"></i></Nav.Link>
                        <Nav.Link href="#" className='text-white'><i className="bi bi-grid-3x3-gap"></i></Nav.Link>
                        <Nav.Link href="#" className='text-white'>
                            <i className="bi bi-bell position-relative">
                                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle">
                                </span>
                            </i>
                        </Nav.Link>
                        <Nav.Link href="#" className='text-white d-flex align-items-center'>
                            <img style={{width: '30px'}} className='rounded-circle' src={avtar} alt="" />
                            <span className='ms-2'>dabhirutam34@gmail.com</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderCom;