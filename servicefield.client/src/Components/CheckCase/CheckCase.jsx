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
                    <Grid container
                        alignItems="center"
                        justifyContent="center"
                        style={{ height: 'calc(100vh - 64px)' }} 
                    >
                        <Grid item xs={12} md={8}>
                            <Card sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Service Case :
                                        Basic Information
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Product Serial Number:</strong> {caseData.productSerialNumber || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Affected Company:</strong> {caseData.affectedCompany || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Contact Person:</strong> {caseData.contactPerson || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Affected Installation:</strong> {caseData.affectedInstallation || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Originating Service Order:</strong> {caseData.originatingSOrder || ''}
                                    </Typography>
  
                                </CardContent>
                            </Card>

                                <Card sx={{ mb: 2 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Extended information
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Service Case Status:</strong> {caseData.serviceCaseStatus || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Responsable User:</strong> {caseData.responsableUser || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Priority:</strong> {caseData.priority || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Message:</strong> {caseData.message || ''}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        <strong>Creation Date:</strong> {caseData.creationDate || ''}
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
