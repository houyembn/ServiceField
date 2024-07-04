/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from 'react';

import './Articles.css';
import './Articles.css';
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Articles() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">

            <Row className="justify-content-md-center">


                <Col  >
                    <Form >
                        <Form.Group className="mb-3" controlId="formItemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Enter item name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control size="lg" as="textarea" rows={3} placeholder="Enter description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSKU">
                            <Form.Label>SKU</Form.Label>
                            <Form.Control type="text" placeholder="Enter SKU" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option>Select category</option>
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInitialQuantity">
                            <Form.Label>Initial Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter initial quantity" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control as="select">
                                <option>Select location</option>
                                <option>Location 1</option>
                                <option>Location 2</option>
                                <option>Location 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSupplier">
                            <Form.Label>Supplier</Form.Label>
                            <Form.Control as="select">
                                <option>Select supplier</option>
                                <option>Supplier 1</option>
                                <option>Supplier 2</option>
                                <option>Supplier 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCondition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control as="select">
                                <option>Select condition</option>
                                <option>New</option>
                                <option>Used</option>
                                <option>Damaged</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save Item
                        </Button>
                    </Form>


                </Col>



            </Row>
            
    
    </Container>
       
    );
}

export default Articles;