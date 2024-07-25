import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Paper, Typography } from '@mui/material';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const TrafficSourceChart = () => {
  const data = {
    labels: ['Desktop', 'Tablet', 'Phone'],
    datasets: [
      {
        label: '# of Votes',
        data: [63, 15, 22],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, height: 400 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Traffic Source
      </Typography>
      <Doughnut data={data} options={options} height={300} />
    </Paper>
  );
};

export default TrafficSourceChart;
