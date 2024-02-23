import { Button, Container } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';
import { Stack } from '@mui/system';


import useCartStore from './Cartstore';

function Section(props) {
  // const navigate = useNavigate();
  // const navigate = useNavigate();

  // const { addToCart } = Cartstore();

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    // navigate('/product', { state: { product } });
    addToCart(product);
  };

  return (
    <div>
      <Container>
        <Grid container>
          <Grid xs={12} sm={12}>
            <h2>{props.tittle}</h2>

          </Grid>
          {props.data?.map((product) => {
            return (
              <Grid xs={12} sm={3}>
                <div className='cards' key={product.id}>
                  <div className='card'>
                    <img className='img' src={product.image}></img>
                    <div className='card-text'  >
                      <Stack direction={'row'} justifyContent="space-between" alignItems="center">
                        <h3>RS {product.price}</h3>
                        <FavoriteBorderIcon />
                      </Stack>
                      <h4>{product.title}</h4>
                      <p>{product.area}</p>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </Button>
                    {/* <Link to={{pathname:'/product', state:{product}}} >Add to Cart</Link> */}
                  </div>
                </div>
              </Grid>
            )
          })}

        </Grid>
      </Container></div>
  )
}

export default Section;



