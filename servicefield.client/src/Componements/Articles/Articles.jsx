/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from 'react';

import './Articles.css';
import './Articles.css';
 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { useState } from 'react';


function Articles() {


    const [item, setItem] = useState({
        name: '',
        description: '',
        sku: '',
        category_id: '',
        quantity: '',
        location_id: '',
        condition: '',
        supplier_id: '',
        barcodeType: '',
        barcode: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleBarcodeTypeChange = (e) => {
        const { value } = e.target;
        setItem(prevState => ({
            ...prevState,
            barcodeType: value,
            barcode: '' // Reset barcode value when barcode type changes
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            barcode: '' // Reset barcode error when barcode type changes
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('https://localhost:7141/ServiceField.Server/Article', item);
                console.log(response.data);
                // Handle success (e.g., show a success message, clear the form, etc.)
            } catch (error) {
                console.error('There was an error adding the item!', error);
                // Handle error (e.g., show an error message)
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!item.name) newErrors.name = 'Item name is required.';
        if (!item.barcode) {
            newErrors.barcode = 'Barcode is required.';
        } else {
            if (item.barcodeType === 'UPC_A' && !/^\d{12}$/.test(item.barcode)) {
                newErrors.barcode = 'UPC-A barcode must be exactly 12 digits.';
            }
            if (item.barcodeType === 'EAN_13' && !/^\d{13}$/.test(item.barcode)) {
                newErrors.barcode = 'EAN-13 barcode must be exactly 13 digits.';
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">


            <Row className="justify-content-md-center">


                <Col >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formItemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter item name"
                                name="name"
                                value={item.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                                required
                            />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                name="description"
                                value={item.description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSKU">
                            <Form.Label>SKU</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter SKU"
                                name="sku"
                                value={item.sku}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>






                            <Form.Control
                                as="select"
                                name="category_id"
                                value={item.category_id}
                                onChange={handleChange}
                            >
                                <option>Select category</option>
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                                <option value="3">Category 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formInitialQuantity">
                            <Form.Label>Initial Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter initial quantity"
                                name="quantity"
                                value={item.quantity}
                                onChange={handleChange}
                            />


                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                as="select"
                                name="location_id"
                                value={item.location_id}
                                onChange={handleChange}
                            >
                                <option>Select location</option>
                                <option value="1">Location 1</option>
                                <option value="2">Location 2</option>
                                <option value="3">Location 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formSupplier">
                            <Form.Label>Supplier</Form.Label>


                            <Form.Control
                                as="select"
                                name="supplier_id"
                                value={item.supplier_id}
                                onChange={handleChange}
                            >
                                <option>Select supplier</option>
                                <option value="1">Supplier 1</option>
                                <option value="2">Supplier 2</option>
                                <option value="3">Supplier 3</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCondition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control
                                as="select"
                                name="condition"
                                value={item.condition}
                                onChange={handleChange}
                            >
                                <option>Select condition</option>
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                                <option value="Damaged">Damaged</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBarcodeType">
                            <Form.Label>Barcode Type</Form.Label>
                            <Form.Control
                                as="select"
                                name="barcodeType"
                                value={item.barcodeType}
                                onChange={handleBarcodeTypeChange}
                                isInvalid={!!errors.barcode}
                                required
                            >
                                <option value="">Select barcode type</option>
                                <option value="UPC_A">UPC-A</option>
                                <option value="EAN_13">EAN-13</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">{errors.barcode}</Form.Control.Feedback>
                        </Form.Group>

                        {item.barcodeType && (
                            <Form.Group className="mb-3" controlId="formBarcode">
                                <Form.Label>Barcode ({item.barcodeType})</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter ${item.barcodeType} barcode`}
                                    name="barcode"
                                    value={item.barcode}
                                    onChange={handleChange}
                                    isInvalid={!!errors.barcode}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">{errors.barcode}</Form.Control.Feedback>
                            </Form.Group>
                        )}


                        

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