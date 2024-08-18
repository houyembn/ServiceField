// src/Components/AddLookup/AddLookup.js
import  { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Sidebar from '../SideBar/SideBar';
import ShowNavBar from '../NavBar/NavBar';

function AddLookup() {
    const [lookup, setLookup] = useState({ type: '', value: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLookup(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7141/ServiceField.Server/ItemTypes', lookup);
            setMessage('Lookup added successfully!');
            setLookup({ type: '', value: '' });
        } catch (error) {
            console.error('There was an error adding the lookup!', error);
            setMessage('Failed to add lookup.');
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />
                <Container className="p-4">
                    <h1>Add Lookup</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formLookupType">
                            <Form.Label>Lookup Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter lookup type"
                                name="type"
                                value={lookup.type}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLookupValue">
                            <Form.Label>Lookup Value</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter lookup value"
                                name="value"
                                value={lookup.value}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Add Lookup
                        </Button>
                    </Form>
                    {message && <p className="mt-3">{message}</p>}
                </Container>
            </div>
        </div>
    );
}

export default AddLookup;
