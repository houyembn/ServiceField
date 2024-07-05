import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ArticleDetails;
