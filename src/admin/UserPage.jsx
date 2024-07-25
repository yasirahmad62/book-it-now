import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { saveAs } from 'file-saver';
import { Box, Button } from '@mui/material';
import Sidebar from './Sidebar';
import { getDatabase, ref, get } from 'firebase/database'; // import necessary firebase functions

const exportData = (data) => {
    const fileData = JSON.stringify(data, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    saveAs(blob, "users.json");
};

const columns = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'location', headerName: 'Location', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'signedUp', headerName: 'Signed Up', width: 150 },
];

const UserPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const db = getDatabase();
            const usersRef = ref(db, 'profiles');
            try {
                const snapshot = await get(usersRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const formattedData = Object.keys(userData).map((key, index) => ({
                        id: key,
                        name: userData[key].fullName,
                        email: userData[key].email,
                        location: userData[key].location,
                        phone: userData[key].mobileNumber,
                        signedUp: formatDate(userData[key].timestamp),
                    }));
                    setData(formattedData);
                } else {
                    console.log('No data available');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
            setLoading(false);
        };

        fetchData();
    }, []);
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main">
                <h1 style={{ textAlign: "center", padding: '20px' }}>Users</h1>
                <div style={{ height: 400, padding: '20px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => exportData(data)}
                        style={{ marginBottom: '10px' }}
                        disabled={loading}
                    >
                        Export
                    </Button>
                    <div className='gridadmin'>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            loading={loading}
                        />
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default UserPage;
