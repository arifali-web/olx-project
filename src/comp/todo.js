import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Cards from './Cart';
import { maxWidth } from '@mui/system';


function Todo() {
    return (
        <div>
            <Container >
                <Grid container sm={12}>
                    <Carousel>

                        <Stack direction={'row'} spacing={4}>

                            <Cards />
                            <Cards />
                            <Cards />

                        </Stack>
                        <Stack direction={'row'} spacing={4}>

                            <Cards />
                            <Cards />
                            <Cards />

                        </Stack>
                        <Stack direction={'row'} spacing={4}>

                            <Cards />
                            <Cards />
                            <Cards />

                        </Stack>
                    </Carousel>
                </Grid>
            </Container>
        </div >
    )
}


export default Todo;


