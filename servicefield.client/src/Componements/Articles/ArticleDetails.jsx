import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ShowNavBar from '../NavBar/NavBar';
import Sidebar from '../SideBar/SideBar';
import { HiOutlineDotsVertical } from "react-icons/hi";
import Nav from 'react-bootstrap/Nav';


import { GoPencil } from "react-icons/go";

function ArticleDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

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

    if (!article) {
        return <p>Loading...</p>;
    }

    return (


        
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />

                <Container className="d-flex flex-row-reverse  mb-3">
                    <Button variant="light" size="lg">
                        <GoPencil />


                    </Button>



                </Container>
            
                <div >
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
                 
                   

                   


                    <Container className="">
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
