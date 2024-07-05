import { useLocation } from 'react-router-dom';
import './CheckCase.css';


function CheckCase() {
    const location = useLocation();
    const caseData = location.state?.caseData || {};

    

    return (
        <div className="CheckCase">
            <div className="sectionCheckCase">
                <h2>Service Case Information</h2>
                <div className="input-rowsectionCheckCase">
                    <div className="input-groupCheckCase">
                        <label>Description of Case: </label>
                        <input type="text" value={caseData.descriptionOfCase || ''} readOnly />
                    </div>
                    <div className="input-groupCheckCase">
                        <label>Date Time of Case: </label>
                        <input type="text" value={caseData.dateTimeOfCase || ''} readOnly />
                    </div>
                    <div className="input-groupCheckCase">
                        <label>How It Is Solved: </label>
                        <input type="text" value={caseData.howItIsSolved || ''} readOnly />
                    </div>
                </div>
            </div>

            <div className="section">
                <h2>Company Information</h2>
                <div className="input-row">
                    <div className="input-group">
                        <label>Company Name: </label>
                        <input type="text" value={caseData.clientName || ''} readOnly />
                    </div>
                    <div className="input-group">
                        <label>Company Phone Number: </label>
                        <input type="text" value={caseData.phoneNumber || ''} readOnly />
                    </div>
                    <div className="input-group">
                        <label>Company Address: </label>
                        <input type="text" value={caseData.address || ''} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckCase;
