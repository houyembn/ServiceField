import { useState } from "react";
import Card from 'react-bootstrap/Card';
import login from '../../assets/login.png'; // Ensure this path is correct
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
            navigate('/HomePage');
            return;
        }

        try {
            const response = await axios.post('https://localhost:7141/ServiceField.Server/User/Login', {
                email: email,
                password: pwd
            });

            console.log('Full response:', response);

            if (response.data.success) {
                const userRole = response.data.role;
                console.log('Received user role:', userRole);

                if (!userRole) {
                    console.error('User role is undefined or null');
                }

                localStorage.setItem('user', JSON.stringify({
                    email: email,
                    role: userRole
                }));

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

    const cardStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10% 20%',
        flexDirection: 'row',
        height: '60vh'

    };

    const leftSectionStyle = {
        flex: 1.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 5%'
    };

    const rightSectionStyle = {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imageStyle = {
        maxWidth: '100%',
        maxHeight: '100%'
    };

    const textSIStyle = {
        fontStyle: 'italic',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '50px'
    };

    const passwordContainerStyle = {
        position: 'relative',
        width: '100%'
    };

    const passwordToggleStyle = {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#6c757d'
    };

    const errorMessageStyle = {
        color: 'red',
        fontSize: '14px',
        marginTop: '10px'
    };

    return (
        <Card style={cardStyle}>
            <div style={rightSectionStyle}>
                <img src={login} alt="Login" style={imageStyle} />
            </div>
            <div style={leftSectionStyle}>
                <label style={textSIStyle}>Sign In</label>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <div style={passwordContainerStyle}>
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="*********"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                            <span
                                style={passwordToggleStyle}
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </Form.Group>
                    {error && <p style={errorMessageStyle}>{error}</p>}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="primary" type="submit">Sign In</Button>
                    </div>
                </Form>
            </div>
        </Card>
    );
}

export default LogIn;
