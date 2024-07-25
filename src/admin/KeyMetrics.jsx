import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const KeyMetrics = ({ data }) => {
  const metrics = [
    {
      title: 'Total Users',
      value: data.totalUsers,
      icon: <ArrowUpward color="success" />,
      change: '12% Since last month',
      color: '#4caf50',
    },
    {
      title: 'Total Sales',
      value: `$${data.totalSales.toLocaleString()}`,
      icon: <ArrowUpward color="success" />,
      change: '15% Since last month',
      color: '#4caf50',
    },
    {
      title: 'Active Users',
      value: data.activeUsers,
      icon: <ArrowDownward color="error" />,
      change: '5% Since last month',
      color: '#f44336',
    },
    {
      title: 'Refunds Processed',
      value: `$${data.refundsProcessed.toLocaleString()}`,
      icon: <ArrowDownward color="error" />,
      change: '2% Since last month',
      color: '#f44336',
    },
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  {metric.title}
                </Typography>
                <Typography variant="h4">{metric.value}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {metric.icon}
                <Typography variant="body2" sx={{ color: metric.color, marginLeft: 1 }}>
                  {metric.change}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KeyMetrics;
