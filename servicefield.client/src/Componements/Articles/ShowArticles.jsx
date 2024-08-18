import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar';
import ShowNavBar from '../NavBar/NavBar';
import { HiOutlineDotsVertical } from "react-icons/hi";


function ShowArticles() {
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch items from the backend
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://localhost:7141/ServiceField.Server/Article');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching the items:', error);
            }
        };

        fetchItems();
    }, []);

    const handleNavigateToArticles = () => {
        navigate('/Articles');
    };
    /*
    const handleRowClick = (id) => {
        navigate(`/ShowArticles/${id}`);



    };
    */
    const handleColumnClick = (id) => {
        navigate(`/ShowArticles/${id}`);
    };

    return (




        
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <ShowNavBar />
            
                <div className="p-4">

                  

                    <Row>
                        <Col>



                            

                        </Col>


                    </Row>



                 

                    <Container className=" ">
                     

                        <h1 className="mb-3">Inventory Articles</h1>
                        <div className="d-flex flex-row-reverse  mb-3" >


                            <Button variant="light" size="lg">
                                <HiOutlineDotsVertical />


                            </Button>
                        </div>

                        <Row>
                            <Col>
                               
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>SKU</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {articles.map(article => (
                                            <tr key={article.id} >
                                                <td onClick={() => handleColumnClick(article.id)} style={{ cursor: 'pointer' }}>{article.name}</td>
                                                <td onClick={() => handleColumnClick(article.id)} style={{ cursor: 'pointer' }}>{article.sku}</td>
                                                <td onClick={() => handleColumnClick(article.id)} style={{ cursor: 'pointer' }}>{article.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                               
                            </Col>
                        </Row>
                        <div className="d-flex flex-row-reverse  mb-3 " >

                            <Button variant="primary" onClick={handleNavigateToArticles}>Add an Article</Button>


                        </div>
                    </Container>
                </div>
            </div>
        </div>
     
    );
}

export default ShowArticles;
