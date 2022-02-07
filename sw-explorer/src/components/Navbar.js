import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

export default function Navbar() {
    return (
        <div className="menu">
            <Stack  direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                <Link to="/" >
                    <Button variant="outlined">star wars API</Button>
                </Link>
                <Link to="/people" >
                    <Button variant="outlined">people</Button>
                </Link>
                <Link to="/planets" >
                    <Button variant="outlined">planets</Button>
                </Link>
                <Link to="/movies" >
                    <Button variant="outlined">movies</Button>
                </Link>
            </Stack>
        </div>
    );
}