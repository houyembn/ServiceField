import { useState } from "react";
import './Login.css';
import Card from 'react-bootstrap/Card';
import login from '../../assets/login.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === 'admin@gmail.com' && pwd === 'admin') {
            localStorage.setItem('user', JSON.stringify({
                email: 'admin@gmail.com',
                role: 'Admin'
            }));
            navigate('/');
            return;
        }

        try {
            const response = await axios.post('https://localhost:7141/ServiceField.Server/User/Login', {
                email: email,
                password: pwd
            });

            console.log('Full response:', response); // Log the entire response to check its structure

            if (response.data.success) {
                const userRole = response.data.role;
                console.log('Received user role:', userRole); // Debugging log

                if (!userRole) {
                    console.error('User role is undefined or null');
                }

                localStorage.setItem('user', JSON.stringify({
                    email: email,
                    role: userRole
                }));

                // Navigate based on user role
                if (userRole === 'Technician') {
                    navigate('/Technician');
                } else {
                    navigate('/');
                }
            } else {
                console.error('Login was not successful, no role returned.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError('Invalid email or password.');
            } else {
                console.error('Login error:', error);
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };






    return (
        <Card className="card1">
            <div className="left-section">
                <img src={login} className="image" alt="Login" />
            </div>
            <div className="right-section">
                <label className="textSI ">Sign In</label>
                <Form className="label" onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div className="password-container">
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="*********"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                            />
                            <span
                                className="password-toggle"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </Form.Group>
                    {error && <p className="error-message">{error}</p>}
                    <div className="btn">
                        <Button variant="primary" type="submit">Sign In</Button>
                    </div>
                </Form>
            </div>
        </Card>
    );
}

export default LogIn;
