import React from 'react';
import Header from './Header.js'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const title = 'Planets';

export default function Planets({ data }) {
    return (
        <>
          <Header title={ title }></Header>
          <Grid container spacing={2}>
              {data.map((planets, i) => {
              return (
                  <Grid item xs={12} md={4} key={i}>
                  <Card style={{backgroundColor: 'rgba(50, 200, 179, 0.803)'}} sx={{ minWidth: 275 }}>
                      <CardContent>
                      <Typography variant="h5" component="div">
                          <b>{planets.name}</b>
                      </Typography>
                      <Typography variant="body2">
                          <b>Terrain: </b> {planets.terrain}
                          <br />
                          <b>Population: </b> {planets.population}
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
