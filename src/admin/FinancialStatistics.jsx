import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './EventStatistics.css';

const FinancialStatistics = ({ data }) => {
  return (
    <Paper elevation={3} className="paper">
      <Typography variant="h6" component="h2" className="typography-title">
        <AccountBalanceIcon className="icon" /> Financial Statistics
      </Typography>
      <Typography className="typography-content">Total Revenue: ${data.totalRevenue}</Typography>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><MonetizationOnIcon className="icon" /> Revenue Breakdown:</Typography>
      <List>
        {data.revenueBreakdown.map((category, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`${category.category}`} className="typography-content" />
            <ListItemText primary={`$${category.revenue}`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><PendingIcon className="icon" /> Pending Payments:</Typography>
      <List>
        {data.pendingPayments.map((payment, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`Payment ID: ${payment.paymentId}`} secondary={`Amount: $${payment.amount} (User ID: ${payment.userId})`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"><CheckCircleIcon className="icon" /> Completed Payments:</Typography>
      <List>
        {data.completedPayments.map((payment, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`Payment ID: ${payment.paymentId}`} secondary={`Amount: $${payment.amount} (User ID: ${payment.userId})`} className="typography-content" />
          </ListItem>
        ))}
      </List>
      <Divider className="dividers" />
      <Typography className="typography-subtitle"> Refunds Processed:</Typography>
      <List>
        {data.refundsProcessed.map((refund, index) => (
          <ListItem key={index} className="list-item">
            <ListItemText primary={`Refund ID: ${refund.refundId}`} secondary={`Amount: $${refund.amount} (User ID: ${refund.userId})`} className="typography-content" />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default FinancialStatistics;
