import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import './ServiceOrder.css';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

function ServiceOrder() {
    const [id, setId] = useState('');
    const [searchResultMessage, setSearchResultMessage] = useState('');
    const [caseData, setCaseData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleIdChange = (event) => {
        setId(event.target.value);
    };

    const handleSearch = async () => {
        if (!id.trim()) {
            setSearchResultMessage('Please enter a Case ID');
            return;
        }

        try {
            const response = await axios.get(`https://localhost:7141/ServiceField/Case/CheckClientCase?id=${id}`);
            console.log('Response from API:', response.data);

            if (response.data && response.data.id) {
                setSearchResultMessage('Service Case found');
                setCaseData(response.data);
            } else {
                setSearchResultMessage('Service Case not found');
                setCaseData(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setSearchResultMessage('Error fetching data');
        }
    };

    const navigate = useNavigate();
    const handleButtonCaseClick = () => {
        if (caseData) {
            navigate('/CheckCase', { state: { caseData } });
        }
    };

    const handleButtonOrderClick = () => {
        if (!caseData) {
            navigate('/OrderManagement', { state: { caseData } });
        }
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Button variant="contained" onClick={openModal}>
                Open Popup
            </Button>
            <Modal
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '80%',
                            maxWidth: 500,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            outline: 'none',
                        }}
                    >
                        <Typography id="modal-title" variant="h6" component="h6">
                            Has this ever been a service case?
                        </Typography>
                        <div className="input-container">
                            <TextField
                                label="Enter Case ID"
                                value={id}
                                onChange={handleIdChange}
                                fullWidth
                                margin="normal"
                                sx={{ width: '100%' }}
                            />
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSearch}
                            sx={{ mt: 2 }}
                        >
                            Search
                        </Button>
                        <div className="search-result">
                            <Typography id="modal-description" variant="body1">
                                {searchResultMessage}
                            </Typography>
                        </div>
                        <div className="button-container">
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleButtonCaseClick}
                                sx={{ mt: 2, mr: 1 }}
                            >
                                Check the service case
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleButtonOrderClick}
                                sx={{ mt: 2, ml: 1 }}
                            >
                                Create a service order
                            </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
                </div>
            </div>
        </div>
    );
}

export default ServiceOrder;
