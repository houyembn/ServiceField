//import React, { useState } from "react";
//import './LogIn.css';
//import Card from 'react-bootstrap/Card';
//import login from '../../assets/login.png';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import { FaEye, FaEyeSlash } from 'react-icons/fa';

//function LogIn() {
//    const [pwd, setPwd] = useState('');
//    const [showPassword, setShowPassword] = useState(false);

//    const handlePasswordToggle = () => {
//        setShowPassword(!showPassword);
//    };

//    return (
//        <Card className="card">
//            <div className="left-section">
//                <img src={login} className="image" alt="Login" />
//            </div>
//            <div className="right-section">
//                <label className="textSI ">Sign In</label>
//                <Form className="label">
//                    <Form.Group className="mb-3" controlId="formBasicEmail">
//                        <Form.Label>Email address</Form.Label>
//                        <Form.Control type="email" placeholder="name@example.com" />
//                    </Form.Group>
//                    <Form.Group className="mb-3" controlId="formBasicPassword">
//                        <Form.Label>Password</Form.Label>
//                        <div className="password-container">
//                            <Form.Control
//                                type={showPassword ? "text" : "password"}
//                                placeholder="*********"
//                                value={pwd}
//                                onChange={(e) => setPwd(e.target.value)}
//                            />
//                            <span
//                                className="password-toggle"
//                                onClick={handlePasswordToggle}
//                            >
//                                {showPassword ? <FaEyeSlash /> : <FaEye />}
//                            </span>
//                        </div>
//                    </Form.Group>
//                </Form>
//                <div className="btn">
//                    <Button variant="primary">Sign In</Button>
//                </div>
//            </div>
//        </Card>
//    );
//}

//export default LogIn;
import React, { useState } from "react";
import './LogIn.css';
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
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
 
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://localhost:7141/ServiceField/SignIn', {
                email,
                password: pwd
            });
            localStorage.setItem('token', response.data.token);
          
            navigate('HomePage');
        } catch (error) {
            setError('Invalid email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="card1">
            <div className="left-section">
                <img src={login} className="image" alt="Login" />
            </div>
            <div className="right-section">
                <label className="textSI ">Sign In</label>
                <Form className="label" onSubmit={handleSubmit}>
                    {error && <div className="error-message">{error}</div>}
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
                        <div className="password-container">
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="*********"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                required
                            />
                            <span
                                className="password-toggle"
                                onClick={handlePasswordToggle}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </Form.Group>
                    <div className="btn">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {loading ? 'Sign In' : 'Sign In'}
                        </Button>
                    </div>
                </Form>
            </div>
        </Card>
    );
}

export default LogIn;

