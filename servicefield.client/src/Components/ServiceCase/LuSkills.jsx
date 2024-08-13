import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function LuSkills() {
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null);
    const [newSkill, setNewSkill] = useState('');
    const [formError, setFormError] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        id: 0,
        type: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(name, value);
        setError({ ...error, [name]: '' });
    };

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField/Skills');
                setSkills(response.data);
            } catch (error) {
                console.error('Il y a eu une erreur!', error);
                setError('Impossible de r�cup�rer les comp�tences.');
            }
        };

        fetchSkills();
    }, []);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setNewSkill('');
    };

    const handleModalSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7141/ServiceField/Skills', { type: newSkill });
            setSkills([...skills, response.data]);
            setNewSkill('');
            setMessage('Skills submitted successfully!');
            handleModalClose();
        } catch (error) {
            console.error('There was an error adding the item!', error.response?.data);
            setMessage('Failed to submit form.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://localhost:7141/ServiceField/Skills/${id}`);
            setSkills(skills.filter(skill => skill.id !== id));
        } catch (error) {
            console.error('There was an error deleting the data!', error);
            setError('Failed to delete data.');
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h4>List of skills</h4>
                    <div className="all">
                        <Button variant="outline-primary" className="ajoutBtn" onClick={handleAddClick}>
                            Add
                        </Button>
                        <div style={{ marginTop: '15px' }}>

                            {skills.map(skill => (
                                <Card key={skill.id} className="mb-3" >
                                    <Card.Body >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <label className="custom-label">Skill type :</label>
                                                <p style={{ marginLeft: '15px', fontSize: '17.5px' }} >{skill.type}</p>
                                            </div>
                                            <button onClick={() => handleDelete(skill.id)} >
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new skill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleModalSubmit}>
                        <Form.Group controlId="formNewSkill">
                            <Form.Control

                                type="text"
                                placeholder="Put a new skill"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center mt-3">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LuSkills;
