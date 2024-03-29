import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { style } from '@mui/system';
import { useEffect } from 'react';




function Cards() {

    useEffect(()=>{

    },[])
    return (

        <Card className='card' sx={{ maxWidth: 300, borderRadius: '12px' }} elevation={10} >
            <CardMedia
                component="img"
                src='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                height={200}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>


    )
}

export default Cards;
