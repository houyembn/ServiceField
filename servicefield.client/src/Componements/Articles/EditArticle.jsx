import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import ShowNavBar from '../NavBar/NavBar';
import Sidebar from '../SideBar/SideBar';

function EditArticle() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({
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
        height: ''
    });

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setArticle(prevArticle => ({
            ...prevArticle,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7141/ServiceField.Server/Article/${id}`, article);
            navigate(`/edit-article/${id}`);
        } catch (error) {
            console.error('Error updating the item:', error);
        }
    };
    

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />

                <Container>
                    <h2>Edit Article</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={article.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={article.description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="sku">
                            <Form.Label>SKU</Form.Label>
                            <Form.Control
                                type="text"
                                name="sku"
                                value={article.sku}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="category_id">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category_id"
                                value={article.category_id}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="quantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                name="quantity"
                                value={article.quantity}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="location_id">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location_id"
                                value={article.location_id}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="condition">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control
                                type="text"
                                name="condition"
                                value={article.condition}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="supplier_id">
                            <Form.Label>Supplier</Form.Label>
                            <Form.Control
                                type="text"
                                name="supplier_id"
                                value={article.supplier_id}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="barcodeType">
                            <Form.Label>Barcode Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="barcodeType"
                                value={article.barcodeType}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="barcode">
                            <Form.Label>Barcode</Form.Label>
                            <Form.Control
                                type="text"
                                name="barcode"
                                value={article.barcode}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={article.price}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="purchasePrice">
                            <Form.Label>Purchase Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="purchasePrice"
                                value={article.purchasePrice}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="currency">
                            <Form.Label>Currency</Form.Label>
                            <Form.Control
                                type="text"
                                name="currency"
                                value={article.currency}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="quantityUnit">
                            <Form.Label>Quantity Unit</Form.Label>
                            <Form.Control
                                type="text"
                                name="quantityUnit"
                                value={article.quantityUnit}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="hasSerialNo">
                            <Form.Check
                                type="checkbox"
                                name="hasSerialNo"
                                label="Has Serial No"
                                checked={article.hasSerialNo}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="isBatch">
                            <Form.Check
                                type="checkbox"
                                name="isBatch"
                                label="Is Batch"
                                checked={article.isBatch}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="dangerousGoods">
                            <Form.Check
                                type="checkbox"
                                name="dangerousGoods"
                                label="Dangerous Goods"
                                checked={article.dangerousGoods}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="spareParts">
                            <Form.Check
                                type="checkbox"
                                name="spareParts"
                                label="Spare Parts"
                                checked={article.spareParts}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="warehouseManaged">
                            <Form.Check
                                type="checkbox"
                                name="warehouseManaged"
                                label="Warehouse Managed"
                                checked={article.warehouseManaged}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="leadTime">
                            <Form.Label>Lead Time</Form.Label>
                            <Form.Control
                                type="text"
                                name="leadTime"
                                value={article.leadTime}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="weight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control
                                type="text"
                                name="weight"
                                value={article.weight}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="weightNetto">
                            <Form.Label>Net Weight</Form.Label>
                            <Form.Control
                                type="text"
                                name="weightNetto"
                                value={article.weightNetto}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="length">
                            <Form.Label>Length</Form.Label>
                            <Form.Control
                                type="text"
                                name="length"
                                value={article.length}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="width">
                            <Form.Label>Width</Form.Label>
                            <Form.Control
                                type="text"
                                name="width"
                                value={article.width}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control
                                type="text"
                                name="height"
                                value={article.height}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default EditArticle;
