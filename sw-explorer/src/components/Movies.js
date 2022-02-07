import React from 'react';
import Header from './Header.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const title = 'Movies';

export default function Movies({ data }) {
    return (
        <>
            <Header title={ title }></Header>
            <Grid container spacing={2}>
            {data.map((movies, i) => {
                return (
                <Grid item xs={12} md={4} key={i}>
                    <Card style={{backgroundColor: 'rgba(100, 10, 179, 0.803)'}} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        <b>{movies.title}</b>
                        </Typography>
                        <Typography variant="body2">
                        <b>Director: </b> {movies.director}
                        <br />
                        <b>Producer: </b> {movies.producer}
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid> 
                )
            })}
            </Grid>
        </>
    );
}
