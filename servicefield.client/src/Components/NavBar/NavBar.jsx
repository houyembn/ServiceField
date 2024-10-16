import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
import { BsBell } from 'react-icons/bs';
import './NavBar.css';

function ShowNavBar() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            try {
                const parsedUser = JSON.parse(userInfo);
                setUser(parsedUser);
            } catch (error) {
                console.error('Error parsing user data:', error);
                // Handle parse error if needed
            }
        }
    }, []);

    const handleBellClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {[true].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" variant="light">
                    <Container fluid>
                        <Navbar.Brand href="#"></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body className="d-flex justify-content-end">
                                <Container fluid className="d-flex align-items-center justify-content-end">
                                    <Form className="d-flex ms-auto">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-primary">Search</Button>
                                    </Form>
                                    <Nav className="d-flex align-items-center">
                                        <Nav.Link href="#action1" className="hover:text-blue-500">Home</Nav.Link>
                                        <Nav.Link href="#action2" className="hover:text-blue-500">Link</Nav.Link>
                                        <NavDropdown
                                            title="Dropdown"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                            className="hover:text-blue-500"
                                        >
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#" onClick={handleBellClick} className="hover:text-blue-500">
                                            <BsBell className="hover:text-blue-500" />
                                        </Nav.Link>
                                        <Navbar.Text>
                                            Signed in as: <a href="#login">{user ? user.email : ''}</a>
                                        </Navbar.Text>
                                    </Nav>
                                </Container>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You have new notifications.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShowNavBar;
