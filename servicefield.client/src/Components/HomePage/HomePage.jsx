import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../NavBar/NavBar.css';

// Register necessary components and scales with Chart.js
Chart.register(...registerables);

const HomePage = () => {
    const [serviceTypesData, setServiceTypesData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Number of Service Orders',
                data: [],
                backgroundColor: ' rgb(108,172,228)',
                borderColor: ' rgb(108,172,228)',
                borderWidth: 1
            }
        ]
    });

    const barChartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/ServiceOrders/service-types-count');
                const serviceTypes = response.data;

                const labels = serviceTypes.map(item => item.serviceType);
                const data = serviceTypes.map(item => item.count);

                setServiceTypesData({
                    labels,
                    datasets: [
                        {
                            label: 'Number of Service Orders',
                            data,
                            backgroundColor: ' rgb(108,172,228)',
                            borderColor: ' rgb(108,172,228)',
                            borderWidth: 1
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching service types data', error);
            }
        };

        fetchData();

        return () => {
            if (barChartRef.current) {
                barChartRef.current.destroy();
            }
        };
    }, []);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />

                <div className="p-4">
                    <h2>Service Types:</h2>
                    <div className="chart-container">
                        <Bar data={serviceTypesData} options={options} ref={barChartRef} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
