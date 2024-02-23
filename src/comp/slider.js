import { CardMedia, Stack } from '@mui/material';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <Carousel autoPlay showStatus={false} showThumbs={false} infiniteLoop className='sliderImage'>
            <Stack>
                <CardMedia
                    
                    component="img"
                    src='https://images.olx.com.pk/thumbnails/295176473-800x600.webp'
                    height={200}
                />
                {/* <img src='C:\Users\arif.hussain\Downloads\react.js\my-app\src\img\img1.jfif' ></img> */}
            </Stack>
            <Stack>
                <CardMedia
                    component="img"
                    src='https://images.olx.com.pk/thumbnails/295176473-800x600.webp'
                    height={200}
                />

            </Stack>
            <Stack>
                <CardMedia
                    component="img"
                    src='https://images.olx.com.pk/thumbnails/295176473-800x600.webp'
                    height={200}
                />
            </Stack>
        </Carousel>
    )
}

export default Slider;