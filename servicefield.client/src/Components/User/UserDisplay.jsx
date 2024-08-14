import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../sidebar/SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';
import '../ServiceCase/FormCase.css';

function UserDisplay() {
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate('/User');
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField.Server/User');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const filteredUsers = users.filter(user => {
        const matchesRole = filterRole ? user.role === filterRole : true;
        const matchesName = user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesRole && matchesName;
    });

    const handleRowClick = (userId) => {
        navigate(`/UserDetails/${userId}`);
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">
                    <h1 className="display">Users</h1>
                    <div className="search-container">
                        <Form.Control
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <Form.Select
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                            className="search-select"
                        >
                            <option value="">All Roles</option>
                            <option value="Technician">Technician</option>
                            <option value="Service Manager">Service Manager</option>
                        </Form.Select>
                    </div>
                    <Table bordered hover className="custom-table">
                        <thead>
                            <tr>
                                <th>CIN</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={index} onClick={() => handleRowClick(user.id)} style={{ cursor: 'pointer' }}>
                                    <td>{user.cin}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <button onClick={handleCreateButtonClick} className="addBtn">
                        <i className="material-icons">add</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserDisplay;
