
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import Grid from '@mui/material/Grid';
import './CheckCase.css';

function CheckCase() {
    const location = useLocation();
    const caseData = location.state?.caseData || {};

    return (
        <div className="CheckCase">
            <div className="flex">
                <SideBar />
                <div className="flex-1">
                    <ShowNavBar />

                    {/* Centered Grid Container */}
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Card sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Service Case Information
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Description:</strong> {caseData.descriptionOfCase || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Date Time:</strong> {caseData.dateTimeOfCase || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>How Its Solved:</strong> {caseData.howItIsSolved || ''}
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Company Information
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Name:</strong> {caseData.clientName || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Phone:</strong> {caseData.phoneNumber || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Address:</strong> {caseData.address || ''}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default CheckCase;
