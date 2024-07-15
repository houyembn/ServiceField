import { useState } from 'react';
import './OrderManagement.css';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';


const CustomTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#6E6F71',
        },
        '&:hover fieldset': {
            borderColor: '#468FEA',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#468FEA',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#468FEA',
    },
});

const CustomFormControl = styled(FormControl)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#6E6F71',
        },
        '&:hover fieldset': {
            borderColor: '#468FEA',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#468FEA',
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#468FEA',
    },
});

const OrderManagement = () => {
    const [CompanyName, setCompanyName] = useState('');
    const [ServiceType, setServiceType] = useState('');
    const [AssignedTo, setAssignedTo] = useState('');
    const [Status, setStatus] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState(null);
    const [selectedDateTimeClose, setSelectedDateTimeClose] = useState(null);
    const handleAgeChange = (event) => {
        setCompanyName(event.target.value);
    };
    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };
    const handleAssignedToChange = (event) => {
        setAssignedTo(event.target.value);
    };
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const statusOptions = [
        { value: 0, label: 'Open' },
        { value: 1, label: 'In Progress' },
        { value: 2, label: 'Closed' },
    ];
    const handleDateTimeChange = (newDateTime) => {
        setSelectedDateTime(newDateTime);
    };
    const handleDateTimeCloseChange = (newDateTime) => {
        setSelectedDateTimeClose(newDateTime);
    };

    return (
        <div className="order-management">
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ShowNavBar />
            <div className="section">
                        <h2>Service Order Form</h2>
                        <div className='all'>
                            <div className="form-fields">
                                <CustomFormControl className="company-name" sx={{ minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small-label">Company Name</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={CompanyName}
                                        label="Company Name"
                                        onChange={handleAgeChange}
                                        sx={{ width: '300px' }} // Adjust width as needed
                                    >
                                        <MenuItem value={10}>L-mobile</MenuItem>
                                        <MenuItem value={20}>houyem</MenuItem>
                                    </Select>
                                </CustomFormControl>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        label="Select Date and Time"
                                        value={selectedDateTime}
                                        onChange={handleDateTimeChange}
                                        sx={{ width: '300px', marginLeft: '20px' }} // Adjust width and margin as needed
                                        renderInput={(params) => (
                                            <CustomTextField {...params} sx={{ width: '150px', m: 1 }} />
                                        )}
                                    />
                                </LocalizationProvider>

                                <CustomTextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    sx={{ width: '300px', marginLeft: '20px' }} // Adjust width and margin as needed
                                />
                            </div>

                            <div className='section2' style={{ display: 'flex', alignItems: 'flex-start', marginTop: '-40px', marginRight: '320px'  }}>
                                <CustomFormControl className="servicetype" sx={{ minWidth: 120, marginRight: '20px' }} size="small">
                                    <InputLabel id="demo-select-small-label">Service Type</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={ServiceType}
                                        label="Service Type"
                                        sx={{ width: '300px'}} 
                                        onChange={handleServiceTypeChange}
                                    >
                                        <MenuItem value={10}>Technical support</MenuItem>
                                        <MenuItem value={20}>Maintenance</MenuItem>
                                    </Select>
                                </CustomFormControl>

                                <CustomFormControl className="Assigned-To" sx={{ minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small-label">Assigned To</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={AssignedTo}
                                        label="Assigned To"
                                        sx={{ width: '300px'}} 
                                        onChange={handleAssignedToChange}
                                    >
                                        <MenuItem value={10}>Selim</MenuItem>
                                        <MenuItem value={20}>Sara</MenuItem>
                                    </Select>
                                </CustomFormControl>
                            </div>



                            <div className='section3' style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                                <CustomFormControl className="Assigned-To" sx={{ minWidth: 120, marginRight: '20px', marginTop: '-80px' }} size="small">
                                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={Status}
                                        label="Status"
                                        sx={{ width: '300px' }}
                                        onChange={handleStatusChange}
                                    >
                                        {statusOptions.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}
                                    </Select>
                                </CustomFormControl>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <div className='dateclosed' style={{ marginRight: '20px' ,marginTop: '-70px' }}>
                                        <DateTimePicker
                                            label="Select Date and Time"
                                            value={selectedDateTimeClose}
                                            onChange={handleDateTimeCloseChange}
                                            sx={{ width: '300px' }} // Adjust width as needed
                                            renderInput={(params) => (
                                                <CustomTextField {...params} sx={{ width: '150px', m: 1 }} />
                                            )}
                                        />
                                    </div>
                                </LocalizationProvider>

                                <div className="Resolution Summary">
                                    <CustomTextField
                                        id="outlined-multiline-static"
                                        label="Resolution Summary"
                                        multiline
                                        rows={4}
                                        sx={{ width: '300px' }} // Adjust width as needed
                                    />
                                </div>
                            </div>

                            <div className="CustomerSatisfaction" style={{ marginTop: '-55px', marginRight: '320px' }}>
                                <CustomTextField
                                    id="outlined-multiline-static"
                                    label="Customer Satisfaction"
                                    multiline
                                    rows={1}
                                    sx={{ width: '620px' }}
                                />
                            </div>

                        </div>
           
                        <div className='button' style={{ display: 'flex', justifyContent: 'center', marginTop: '2px' }}>
                            <Button variant="contained" type="submit">Submit</Button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;
