import React,{useState,useEffect}from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import EventStatistics from './EventStatistics';
import BookingStatistics from './BookingStatistics';
import UserStatistics from './UserStatistics';
import FinancialStatistics from './FinancialStatistics';
import SalesChart from './SalesChart';
import TrafficSourceChart from './TrafficSourceChart';
import KeyMetrics from './KeyMetrics';
import LatestEvents from './LatestEvent';
import LatestBookings from './LatestBooking';
import dashboardData from './dashboardData.json'; // Assuming the JSON data is saved in a file
import TrafficByPlatform from './TrafficByPlatform';
import Header from '../components/header';

const Dashboard = () => {
  const [checkforUser, setUserStatus] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    const userType = sessionStorage.getItem('userType');
    if (userType === 'admin'&&userId ) {
      setUserStatus(true);
    }
    
  }, [checkforUser]);

  const { eventStatistics, bookingStatistics, userStatistics, financialStatistics, keyMetrics, latestEvents, latestBookings,trafficByPlatform } = dashboardData.dashboard;



  return (
    <>
    <Header onadmin={true} isLoggedIn={!checkforUser}/>
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f4f6f8' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom>
            Admin Dashboard
          </Typography>
          <KeyMetrics data={keyMetrics} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <SalesChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <TrafficSourceChart />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <LatestEvents data={latestEvents} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <LatestBookings data={latestBookings} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <EventStatistics data={eventStatistics} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <BookingStatistics data={bookingStatistics} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <UserStatistics data={userStatistics} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FinancialStatistics data={financialStatistics} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
    </>
  );
};

export default Dashboard;
