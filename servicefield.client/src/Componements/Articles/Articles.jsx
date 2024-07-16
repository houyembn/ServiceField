import { useState,useEffect } from 'react';
import './Articles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Sidebar from '../SideBar/SideBar';
import ShowNavBar from '../NavBar/NavBar';

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
        barcode: '',
        price: '',
        purchasePrice: '',
        currency: '',
        quantityUnit: '',
        hasSerialNo: false,
        isBatch: false,
        dangerousGoods: false,
        spareParts: false,
        warehouseManaged: false,
        leadTime: '',
        weight: '',
        weightNetto: '',
        length: '',
        width: '',
        height: '',
    });

    const [errors, setErrors] = useState({});

    const [itemTypes, setItemTypes] = useState([]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setItem(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
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
   
    useEffect(() => {
        const fetchItemTypes = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField.Server/ItemTypes');
                setItemTypes(response.data); // Assuming response.data is an array of item types
            } catch (error) {
                console.error('Error fetching item types:', error);
            }
        };

        fetchItemTypes();
    }, []);




    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <Container fluid className="d-flex justify-content-center align-items-center">
                        <Row className="justify-content-md-center">
                            <Col>
                                <h1 className="display-6">Basic Information</h1>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formItemName">
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

                                        <Form.Group as={Col} className="mb-3" controlId="formDescription">
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

                                        <Form.Group as={Col} className="mb-3" controlId="formItemType">
                                            <Form.Label>Item Type</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="itemType"
                                                value={item.itemType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select item type</option>
                                                {itemTypes.map(type => (
                                                    <option key={type.id} value={type.id}>{type.name}</option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formSupplier">
                                            <Form.Label>Manufacturer Article no.</Form.Label>
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

                                        <Row as={Col}>
                                            <Form.Group as={Col} className="mb-3" controlId="formBarcodeType">
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
                                                <Form.Group as={Col} className="mb-3" controlId="formBarcode">
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
                                        </Row>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formCategory">
                                        <Form.Label>Product family</Form.Label>
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

                                   

                                    <h1 className="display-6">Extended Information</h1>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter price"
                                                name="price"
                                                value={item.price}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formPurchasePrice">
                                            <Form.Label>Purchase Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter purchase price"
                                                name="purchasePrice"
                                                value={item.purchasePrice}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formCurrency">
                                            <Form.Label>Currency</Form.Label>
                                            <Form.Control
                                                as="select"
                                                name="currency"
                                                value={item.currency}
                                                onChange={handleChange}
                                            >
                                                <option>Select currency</option>
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="GBP">GBP</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formQuantityUnit">
                                            <Form.Label>Quantity Unit</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter quantity unit"
                                                name="quantityUnit"
                                                value={item.quantityUnit}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter quantity"
                                                name="quantity"
                                                value={item.quantity}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formHasSerialNo">
                                            <Form.Check
                                                type="checkbox"
                                                label="Has Serial No"
                                                name="hasSerialNo"
                                                checked={item.hasSerialNo}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formIsBatch">
                                            <Form.Check
                                                type="checkbox"
                                                label="Is Batch"
                                                name="isBatch"
                                                checked={item.isBatch}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formDangerousGoods">
                                            <Form.Check
                                                type="checkbox"
                                                label="Dangerous Goods"
                                                name="dangerousGoods"
                                                checked={item.dangerousGoods}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formSpareParts">
                                            <Form.Check
                                                type="checkbox"
                                                label="Spare Parts"
                                                name="spareParts"
                                                checked={item.spareParts}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formWarehouseManaged">
                                            <Form.Check
                                                type="checkbox"
                                                label="Warehouse Managed"
                                                name="warehouseManaged"
                                                checked={item.warehouseManaged}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formLeadTime">
                                            <Form.Label>Lead Time (days)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter lead time"
                                                name="leadTime"
                                                value={item.leadTime}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formWeight">
                                            <Form.Label>Weight (kg)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter weight"
                                                name="weight"
                                                value={item.weight}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formWeightNetto">
                                            <Form.Label>Net Weight (kg)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter net weight"
                                                name="weightNetto"
                                                value={item.weightNetto}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row>
                                        <Form.Group as={Col} className="mb-3" controlId="formLength">
                                            <Form.Label>Length (cm)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter length"
                                                name="length"
                                                value={item.length}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formWidth">
                                            <Form.Label>Width (cm)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter width"
                                                name="width"
                                                value={item.width}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} className="mb-3" controlId="formHeight">
                                            <Form.Label>Height (cm)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Enter height"
                                                name="height"
                                                value={item.height}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Button variant="primary" type="submit">
                                        Add Item
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Articles;
