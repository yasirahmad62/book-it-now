import React from 'react';
import { Box, Container, Grid, Link, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import CustomerServiceIcon from '@mui/icons-material/HeadsetMic';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const FooterContainer = styled(Box)({
  backgroundColor: '#2C2C2C',
  paddingTop: '40px',
  paddingBottom: '40px',
  color: '#fff',
  textAlign: 'center',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="list-your-show">
              <Typography>List your Show</Typography>
              <Typography>Got a show, event, activity or a great experience? Partner with us & get listed on BookItNow</Typography>
              <Button variant="contained" className="contact-button">
                Contact today!
              </Button>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="footer-item">
              <CustomerServiceIcon />
              <Typography>24/7 CUSTOMER CARE</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="footer-item">
              <ConfirmationNumberIcon />
              <Typography>RESEND BOOKING CONFIRMATION</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="footer-item">
              <EmailIcon />
              <Typography>SUBSCRIBE TO THE NEWSLETTER</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="footer-icons">
              <Link href="#" color="inherit"><FacebookIcon /></Link>
              <Link href="#" color="inherit"><TwitterIcon /></Link>
              <Link href="#" color="inherit"><InstagramIcon /></Link>
              <Link href="#" color="inherit"><YouTubeIcon /></Link>
              <Link href="#" color="inherit"><PinterestIcon /></Link>
              <Link href="#" color="inherit"><LinkedInIcon /></Link>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="inherit" className="footer-copyright">
              Copyright 2024 © SmallWorld Entertainment Pvt. Ltd. All Rights Reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
