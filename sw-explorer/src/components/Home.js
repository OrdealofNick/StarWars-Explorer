import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
    {
        img: 'https://live.staticflickr.com/65535/50642927942_34d0cbc28b_b.jpg',
        title: 'Baby Yoda'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTpGOXq1ifuznS2d9OdKUbRE7DVkpDtaNoQ&usqp=CAU',
        title: 'Empire Strikes Back (1st Poster)'
    },
    {
        img: 'https://cdn.pixabay.com/photo/2016/01/02/16/00/star-wars-1118389_1280.png',
        title: 'Storm Trooper (authenticity questioned)'
    },
    {
        img: 'https://laughingsquid.com/wp-content/uploads/2015/05/Tusken-Raider-with-Guinea-Pig1.jpg',
        title: 'Tuscan Raider (being very caring)'
    },
    {
        img: 'https://laughingsquid.com/wp-content/uploads/2015/05/All-Three-with-Guinea-Pigs1.jpg',
        title: 'Storm Trooper from before disapproves'
    }
];

export default function Home() {
  return (
    <div>
        <h1>Welcome!</h1> 
        <h4>Select one of the three categories to learn more about the Star Wars (tm) universe!</h4>
        <hr/>
        <h5>In the meantime, here's some photos of Star Wars stuff</h5>
        <ImageList sx={{ width: 550, height: 450, mx: "auto" }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.title}
                    position="below"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
);
}
