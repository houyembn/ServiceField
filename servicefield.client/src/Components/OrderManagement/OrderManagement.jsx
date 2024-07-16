/*import { useState } from 'react';*/
import './OrderManagement.css';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { useState } from 'react';
//import TextField from '@mui/material/TextField';
//import { styled } from '@mui/material/styles';
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select from '@mui/material/Select';
//import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import Button from '@mui/material/Button';


//const CustomTextField = styled(TextField)({
//    '& .MuiOutlinedInput-root': {
//        '& fieldset': {
//            borderColor: '#6E6F71',
//        },
//        '&:hover fieldset': {
//            borderColor: '#468FEA',
//        },
//        '&.Mui-focused fieldset': {
//            borderColor: '#468FEA',
//        },
//    },
//    '& .MuiInputLabel-root.Mui-focused': {
//        color: '#468FEA',
//    },
//});

//const CustomFormControl = styled(FormControl)({
//    '& .MuiOutlinedInput-root': {
//        '& fieldset': {
//            borderColor: '#6E6F71',
//        },
//        '&:hover fieldset': {
//            borderColor: '#468FEA',
//        },
//        '&.Mui-focused fieldset': {
//            borderColor: '#468FEA',
//        },
//    },
//    '& .MuiInputLabel-root.Mui-focused': {
//        color: '#468FEA',
//    },
//});

const OrderManagement = () => {
    //const [CompanyName, setCompanyName] = useState('');
    //const [ServiceType, setServiceType] = useState('');
    //const [AssignedTo, setAssignedTo] = useState('');
    //const [Status, setStatus] = useState('');
    //const [selectedDateTime, setSelectedDateTime] = useState(null);
    //const [selectedDateTimeClose, setSelectedDateTimeClose] = useState(null);
    //const handleAgeChange = (event) => {
    //    setCompanyName(event.target.value);
    //};
    //const handleServiceTypeChange = (event) => {
    //    setServiceType(event.target.value);
    //};
    //const handleAssignedToChange = (event) => {
    //    setAssignedTo(event.target.value);
    //};
    //const handleStatusChange = (event) => {
    //    setStatus(event.target.value);
    //};

    //const statusOptions = [
    //    { value: 0, label: 'Open' },
    //    { value: 1, label: 'In Progress' },
    //    { value: 2, label: 'Closed' },
    //];
    //const handleDateTimeChange = (newDateTime) => {
    //    setSelectedDateTime(newDateTime);
    //};
    //const handleDateTimeCloseChange = (newDateTime) => {
    //    setSelectedDateTimeClose(newDateTime);
    //};
    const [item, setItem] = useState({
        OrderNumber: '',
        description: '',
        sku: '',
        category_id: '',
        quantity: '',
        location_id: '',
        condition: '',
        supplier_id: '',
        barcodeType: '',
        barcode: ''
    });
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
            try {
                const response = await axios.post('https://localhost:7141/ServiceField.Server/Article', item);
                console.log(response.data);
            } catch (error) {
                console.error('There was an error adding the item!', error);
            }
        
    };
    return (
       
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                <ShowNavBar />
                <div className="p-4">

                    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">


                        <Row className="justify-content-md-center">


                            <Col >
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formOrderNumber">
                                        <Form.Label>Order Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Order Number"
                                            name="OrderNumber"
                                            value={item.OrderNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formServiceObject">
                                        <Form.Label>Service Object</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="ServiceObject"
                                            value={item.ServiceObject}
                                            onChange={handleChange}
                                        >
                                            <option>Select Service Object</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formCustomer">
                                        <Form.Label>Customer</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Customer"
                                            value={item.Customer}
                                            onChange={handleChange}
                                        >
                                            <option>Select Customer</option>
                                            <option value="1">Customer 1</option>
                                            <option value="2">Customer 2</option>
                                            <option value="3">Customer 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formInstallation">
                                        <Form.Label>Installation</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Installation"
                                            value={item.Installation}
                                            onChange={handleChange}
                                        >
                                            <option>Select Installation</option>
                                            <option value="1">Installation 1</option>
                                            <option value="2">Installation 2</option>
                                            <option value="3">Installation 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formInitiator">
                                        <Form.Label>Initiator</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Initiator"
                                            value={item.Initiator}
                                            onChange={handleChange}
                                        >
                                            <option>Select Initiator</option>
                                            <option value="1">Initiator 1</option>
                                            <option value="2">Initiator 2</option>
                                            <option value="3">Initiator 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formContact">
                                        <Form.Label>Contact person of Initiator</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Contact"
                                            value={item.Contact}
                                            onChange={handleChange}
                                        >
                                            <option>Select contact person of Initiator</option>
                                            <option value="1">contact person 1</option>
                                            <option value="2">contact person 2</option>
                                            <option value="3">contact person 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formType">
                                        <Form.Label>Service Order Type</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Type"
                                            value={item.Type}
                                            onChange={handleChange}
                                        >
                                            <option>Select Service Order Type</option>
                                            <option value="1">Technical support</option>
                                            <option value="2">Maintenance</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formInvoicing">
                                        <Form.Label>Invoicing Type</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Invoicing"
                                            value={item.Invoicing}
                                            onChange={handleChange}
                                        >
                                            <option>Invoicing Type</option>
                                            <option value="1">Standard Invoice</option>
                                            <option value="2">Pro Forma Invoice</option>
                                            <option value="3">Recurring Invoice </option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter Message"
                                            name="Message"
                                            value={item.Message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formAddress">
                                        <Form.Label>Custom Address</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Address"
                                            value={item.Address}
                                            onChange={handleChange}
                                        >
                                            <option>Custom Address</option>
                                            <option value="1">Address 1</option>
                                            <option value="2">Address 2</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formContact">
                                        <Form.Label>Contact at service location</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Contact"
                                            value={item.Contact}
                                            onChange={handleChange}
                                        >
                                            <option>Contact at service location</option>
                                            <option value="1">Contact 1</option>
                                            <option value="2">Contact 2</option>
                                            <option value="3">Contact 3</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formlocation">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="Location"
                                            value={item.Location}
                                            onChange={handleChange}
                                        >
                                            <option>Location</option>
                                            <option value="1">Location 1</option>
                                            <option value="2">Location 2</option>
                                            <option value="3">Location 3</option>
                                        </Form.Control>
                                    </Form.Group>



                                    <Button variant="primary" type="submit">
                                        Save Service Order
                                    </Button>
                                </Form>


                            </Col>



                        </Row>


                    </Container>

           
                    {/*<h2 className="h2">Service Order Form</h2>*/}
                    {/*<div className='all'>*/}
                    {/*    <div className='row'>*/}
                    {/*        <TextField id="outlined-basic" className='input' label="Order Number" variant="outlined" size="small" />*/}
                    {/*        <TextField id="outlined-basic" className='input' label="Service Object" variant="outlined" size="small" />*/}
                    {/*    </div>*/}
                    {/*    <div className='row'>*/}
                    {/*        <FormControl className='inputselect' size="small">*/}
                    {/*        <InputLabel id="demo-simple-select-label">Customer</InputLabel>*/}
                    {/*        <Select*/}
                    {/*            labelId="demo-simple-select-label"*/}
                    {/*            id="demo-simple-select"*/}
                    {/*            value={CompanyName}*/}
                    {/*            label="Age"*/}
                    {/*            onChange={handleAgeChange}*/}

                    {/*        >*/}
                    {/*            <MenuItem value={10}>L-mobile</MenuItem>*/}
                    {/*            <MenuItem value={20}>Houyem</MenuItem>*/}
                    {/*        </Select>*/}
                    {/*    </FormControl>*/}
                    {/*        <FormControl className='inputselect'  size="small">*/}
                    {/*        <InputLabel id="demo-simple-select-label">Installation</InputLabel>*/}
                    {/*        <Select*/}
                    {/*            labelId="demo-simple-select-label"*/}
                    {/*            id="demo-simple-select"*/}
                    {/*            value={CompanyName}*/}
                    {/*            label="Age"*/}
                    {/*            onChange={handleAgeChange}*/}
                    {/*        >*/}
                    {/*            <MenuItem value={10}>Ten</MenuItem>*/}
                    {/*            <MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*            <MenuItem value={30}>Thirty</MenuItem>*/}
                    {/*        </Select>*/}
                    {/*        </FormControl>*/}
                    {/*    </div>*/}

                    {/*    <div className='row'>*/}
                    {/*        <FormControl className='inputselect' size="small">*/}
                    {/*            <InputLabel id="demo-simple-select-label">Initiator</InputLabel>*/}
                    {/*            <Select*/}
                    {/*                labelId="demo-simple-select-label"*/}
                    {/*                id="demo-simple-select"*/}
                    {/*                value={CompanyName}*/}
                    {/*                label="Age"*/}
                    {/*                onChange={handleAgeChange}*/}


                    {/*            >*/}
                    {/*                <MenuItem value={10}>L-mobile</MenuItem>*/}
                    {/*                <MenuItem value={20}>Houyem</MenuItem>*/}
                    {/*            </Select>*/}
                    {/*        </FormControl>*/}
                    {/*        <FormControl className='inputselect' size="small">*/}
                    {/*            <InputLabel id="demo-simple-select-label">Contact person</InputLabel>*/}
                    {/*            <Select*/}
                    {/*                labelId="demo-simple-select-label"*/}
                    {/*                id="demo-simple-select"*/}
                    {/*                value={CompanyName}*/}
                    {/*                label="Age"*/}
                    {/*                onChange={handleAgeChange}*/}
                    {/*            >*/}
                    {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                    {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                    {/*            </Select>*/}
                    {/*        </FormControl>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*    <div className='all'>*/}
                    {/*        <div className="form-fields">*/}
                    {/*            <CustomFormControl className="company-name" sx={{ minWidth: 120 }} size="small">*/}
                    {/*                <InputLabel id="demo-select-small-label">Company Name</InputLabel>*/}
                    {/*                <Select*/}
                    {/*                    labelId="demo-select-small-label"*/}
                    {/*                    id="demo-select-small"*/}
                    {/*                    value={CompanyName}*/}
                    {/*                    label="Company Name"*/}
                    {/*                    onChange={handleAgeChange}*/}
                    {/*                    sx={{ width: '300px' }} // Adjust width as needed*/}
                    {/*                >*/}
                    {/*                    <MenuItem value={10}>L-mobile</MenuItem>*/}
                    {/*                    <MenuItem value={20}>houyem</MenuItem>*/}
                    {/*                </Select>*/}
                    {/*            </CustomFormControl>*/}

                    {/*            <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                    {/*                <DateTimePicker*/}
                    {/*                    label="Select Date and Time"*/}
                    {/*                    value={selectedDateTime}*/}
                    {/*                    onChange={handleDateTimeChange}*/}
                    {/*                    sx={{ width: '300px', marginLeft: '20px' }} // Adjust width and margin as needed*/}
                    {/*                    renderInput={(params) => (*/}
                    {/*                        <CustomTextField {...params} sx={{ width: '150px', m: 1 }} />*/}
                    {/*                    )}*/}
                    {/*                />*/}
                    {/*            </LocalizationProvider>*/}

                    {/*            <CustomTextField*/}
                    {/*                id="outlined-multiline-static"*/}
                    {/*                label="Description"*/}
                    {/*                multiline*/}
                    {/*                rows={4}*/}
                    {/*                sx={{ width: '300px', marginLeft: '20px' }} // Adjust width and margin as needed*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*        <div className='section2' style={{ display: 'flex', alignItems: 'flex-start', marginTop: '-40px', marginRight: '320px'  }}>*/}
                    {/*            <CustomFormControl className="servicetype" sx={{ minWidth: 120, marginRight: '20px' }} size="small">*/}
                    {/*                <InputLabel id="demo-select-small-label">Service Type</InputLabel>*/}
                    {/*                <Select*/}
                    {/*                    labelId="demo-select-small-label"*/}
                    {/*                    id="demo-select-small"*/}
                    {/*                    value={ServiceType}*/}
                    {/*                    label="Service Type"*/}
                    {/*                    sx={{ width: '300px'}} */}
                    {/*                    onChange={handleServiceTypeChange}*/}
                    {/*                >*/}
                    {/*                    <MenuItem value={10}>Technical support</MenuItem>*/}
                    {/*                    <MenuItem value={20}>Maintenance</MenuItem>*/}
                    {/*                </Select>*/}
                    {/*            </CustomFormControl>*/}

                    {/*            <CustomFormControl className="Assigned-To" sx={{ minWidth: 120 }} size="small">*/}
                    {/*                <InputLabel id="demo-select-small-label">Assigned To</InputLabel>*/}
                    {/*                <Select*/}
                    {/*                    labelId="demo-select-small-label"*/}
                    {/*                    id="demo-select-small"*/}
                    {/*                    value={AssignedTo}*/}
                    {/*                    label="Assigned To"*/}
                    {/*                    sx={{ width: '300px'}} */}
                    {/*                    onChange={handleAssignedToChange}*/}
                    {/*                >*/}
                    {/*                    <MenuItem value={10}>Selim</MenuItem>*/}
                    {/*                    <MenuItem value={20}>Sara</MenuItem>*/}
                    {/*                </Select>*/}
                    {/*            </CustomFormControl>*/}
                    {/*        </div>*/}



                    {/*        <div className='section3' style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>*/}
                    {/*            <CustomFormControl className="Assigned-To" sx={{ minWidth: 120, marginRight: '20px', marginTop: '-80px' }} size="small">*/}
                    {/*                <InputLabel id="demo-select-small-label">Status</InputLabel>*/}
                    {/*                <Select*/}
                    {/*                    labelId="demo-select-small-label"*/}
                    {/*                    id="demo-select-small"*/}
                    {/*                    value={Status}*/}
                    {/*                    label="Status"*/}
                    {/*                    sx={{ width: '300px' }}*/}
                    {/*                    onChange={handleStatusChange}*/}
                    {/*                >*/}
                    {/*                    {statusOptions.map(option => (*/}
                    {/*                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>*/}
                    {/*                    ))}*/}
                    {/*                </Select>*/}
                    {/*            </CustomFormControl>*/}

                    {/*            <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                    {/*                <div className='dateclosed' style={{ marginRight: '20px' ,marginTop: '-70px' }}>*/}
                    {/*                    <DateTimePicker*/}
                    {/*                        label="Select Date and Time"*/}
                    {/*                        value={selectedDateTimeClose}*/}
                    {/*                        onChange={handleDateTimeCloseChange}*/}
                    {/*                        sx={{ width: '300px' }} // Adjust width as needed*/}
                    {/*                        renderInput={(params) => (*/}
                    {/*                            <CustomTextField {...params} sx={{ width: '150px', m: 1 }} />*/}
                    {/*                        )}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </LocalizationProvider>*/}

                    {/*            <div className="Resolution Summary">*/}
                    {/*                <CustomTextField*/}
                    {/*                    id="outlined-multiline-static"*/}
                    {/*                    label="Resolution Summary"*/}
                    {/*                    multiline*/}
                    {/*                    rows={4}*/}
                    {/*                    sx={{ width: '300px' }} // Adjust width as needed*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div className="CustomerSatisfaction" style={{ marginTop: '-55px', marginRight: '320px' }}>*/}
                    {/*            <CustomTextField*/}
                    {/*                id="outlined-multiline-static"*/}
                    {/*                label="Customer Satisfaction"*/}
                    {/*                multiline*/}
                    {/*                rows={1}*/}
                    {/*                sx={{ width: '620px' }}*/}
                    {/*            />*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
           
                    {/*    <div className='button' style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>*/}
                    {/*        <Button variant="contained" type="submit">Submit</Button>*/}
                    {/*    </div>*/}


                    </div>
                </div>
            </div>
       
    );
};

export default OrderManagement;
