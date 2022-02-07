import React from 'react';
import Card from '@mui/material/Card';
import Header from './Header.js'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const title = 'People';

export default function People({ data }) {
  return (
    <>
      <Header title={ title }></Header>
      <Grid container spacing={2}>
        {data.map((people, i) => {
          return (
            <Grid item xs={12} md={4} key={i}>
              <Card style={{backgroundColor: 'rgba(100, 200, 33, 0.803)'}} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    <b>{people.name}</b>
                  </Typography>
                  <Typography variant="body2">
                    <b>Height (cm): </b> {people.height}
                    <br />
                    <b>Mass (kg): </b> {people.mass}
                    <br />
                    <b>Hair Color: </b> {people.hair_color}
                    <br />
                    <b>Eye Color: </b> {people.eye_color}
                    <br />
                    <b>Birth Year: </b> {people.birth_year}
                    <br />
                    <b>Gender: </b> {people.gender}
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
