import { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import ShowNavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import '../NavBar/NavBar.css';

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

    const [invoicingTypesData, setInvoicingTypesData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Invoicing Types Proportion',
                data: [],
                backgroundColor: ['rgb(255,99,132)', 'rgb(54,162,235)', 'rgb(255,206,86)'], // Example colors
                borderColor: 'rgb(255,255,255)',
                borderWidth: 1
            }
        ]
    });

    const barChartRef = useRef(null);

    useEffect(() => {
        const fetchServiceTypesData = async () => {
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

        const fetchInvoicingTypesData = async () => {
            try {
                const response = await axios.get('https://localhost:7141/api/ServiceOrders/service-invoicing-count');
              
                const invoicingTypes = response.data;
              
                const labels = invoicingTypes.map(item => item.invoicing || 'Unknown');
                const data = invoicingTypes.map(item => item.count);

                setInvoicingTypesData({
                    labels,
                    datasets: [
                        {
                            label: 'Invoicing Types Proportion',
                            data,
                            backgroundColor: ['#7fb6e7', '#2c88d8', '#195589'], // Example colors
                            borderColor: ['#7fb6e7', '#2c88d8', '#195589'],
                            borderWidth: 1
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching invoicing types data', error);
            }
        };

        fetchServiceTypesData();
        fetchInvoicingTypesData();

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

   
    const chartContainerStyle = {
        display: 'flex',
        gap: '10%',
        marginTop: '90px',
    };

    const barChartStyle = {
        width: '85%',
        height: '400px',
    };

    const pieChartStyle = {
        width: '50%',
        height: '400px',
    };

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1">
                <ShowNavBar />

                <div className="p-4">
                    <div className="chart-container" style={chartContainerStyle}>
                        <div style={barChartStyle}>
                            <h2>Service Types Proportion:</h2>
                            <Bar data={serviceTypesData} options={options} ref={barChartRef} />
                        </div>
                        <div style={pieChartStyle}>
                            <h2>Invoicing Types Proportion:</h2>
                            <Pie data={invoicingTypesData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
