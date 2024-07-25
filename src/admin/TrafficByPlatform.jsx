import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import './EventStatistics.css';
import { Facebook, Google, LinkedIn, Twitter } from '@mui/icons-material';

const TrafficByPlatform = ({ data }) => {
    const platforms = [
        { name: 'Facebook', count: "3.2K", icon: <Facebook style={{ color: '#3b5998' }} /> },
        { name: 'Google', count: "2.0k", icon: <Google style={{ color: '#db4437' }} /> },
        { name: 'LinkedIn', count: "1.2k", icon: <LinkedIn style={{ color: '#0077b5' }} /> },
        { name: 'Twitter', count: "3.1k", icon: <Twitter style={{ color: '#1da1f2' }} /> },
    ];

    return (
        <Paper elevation={3} className="paper">
            <Typography variant="h6" component="h2" className="typography-title">
                Traffic by Platform
            </Typography>
            
            <Grid container spacing={2}>
                {platforms.map((platform, index) => (
                    <Grid item xs={6} key={index}>
                        <Box className="paper">
                            {platform.icon}
                            <Typography variant="h6" component="p" className="typography-content">
                                {platform.count}
                            </Typography>
                            <Typography className="typography-content">{platform.name}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default TrafficByPlatform;
