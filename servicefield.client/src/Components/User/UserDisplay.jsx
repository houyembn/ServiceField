import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import { useNavigate } from 'react-router-dom';
import './User.css';

function UserDisplay() {
    const navigate = useNavigate();
    const handleCreateButtonClick = () => {
        navigate('/User');
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('');

    const users = [
        { id: 1, CIN:12345678, firstName: 'Mark', lastName: 'Otto', role: 'Technician' },
        { id: 2, CIN: 12345678, firstName: 'Jacob', lastName: 'Thornton', role: 'Service Manager' },
        { id: 3, CIN: 12345678, firstName: 'Amilia', lastName: 'David', role: 'Service Manager' }
    ];

    const filteredUsers = users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        const term = searchTerm.toLowerCase();
        return (
            (fullName.includes(term) ||
                user.role.toLowerCase().includes(term) ||
                user.cin.toLowerCase().includes(term)) &&
            (filterRole ? user.role === filterRole : true)
        );
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
                    <h1 className="display">Users:</h1>
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
                                    <td>{user.CIN}</td>
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
