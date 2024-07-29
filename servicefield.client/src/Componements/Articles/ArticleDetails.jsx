import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ShowNavBar from '../NavBar/NavBar';
import Sidebar from '../SideBar/SideBar';
import { GoPencil } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function ArticleDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`https://localhost:7141/ServiceField.Server/Article/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching the item:', error);
            }
        };

        fetchItem();
    }, [id]);

    const handleEditClick = () => {
        navigate(`/edit-article/${id}`);
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`https://localhost:7141/ServiceField.Server/Article/${id}`);
            navigate('/articles'); // Redirect to the articles list after deletion
        } catch (error) {
            console.error('Error deleting the item:', error);
        }
    };

    if (!article) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />

                <Container className="d-flex flex-row-reverse mb-3">
                    <Button variant="light" size="lg" onClick={handleDeleteClick}>
                        <FaTrash />
                    </Button>
                    <Button variant="light" size="lg" onClick={handleEditClick} className="me-2">
                        <GoPencil />
                    </Button>
                </Container>

                <div>
                    <Container>
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="#">Overview</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">History</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Header>Article Details</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{article.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Description: </strong> {article.description}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>SKU: </strong> {article.sku}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Category: </strong> {article.category_id}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Quantity: </strong> {article.quantity}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Location: </strong> {article.location_id}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Condition: </strong> {article.condition}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Supplier: </strong> {article.supplier_id}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Barcode Type: </strong> {article.barcodeType}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Barcode: </strong> {article.barcode}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Price: </strong> {article.price}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Purchase Price: </strong> {article.purchasePrice}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Currency: </strong> {article.currency}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Quantity Unit: </strong> {article.quantityUnit}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Has Serial No: </strong> {article.hasSerialNo ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Is Batch: </strong> {article.isBatch ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Dangerous Goods: </strong> {article.dangerousGoods ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Spare Parts: </strong> {article.spareParts ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Warehouse Managed: </strong> {article.warehouseManaged ? 'Yes' : 'No'}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Lead Time: </strong> {article.leadTime} days
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Weight: </strong> {article.weight} kg
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Net Weight: </strong> {article.weightNetto} kg
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Length: </strong> {article.length} cm
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Width: </strong> {article.width} cm
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Height: </strong> {article.height} cm
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ArticleDetails;
