import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DeleteIcon from '@mui/icons-material/Delete';

import '../style/Navbar.css';

import useCartStore from './Cartstore';

function Cartpage(props) {
    // const location = useLocation();
    // const product = location.state?.product;

    // const [plus, setplus] = useState(1);

    // card  view and list view option

    const [cardtype, setcardtype] = useState('');

    // function handlePlus() {

    //     setplus((prev) => prev + 1);
    //     console.log("run", plus);

    // }
    // function handleMinus() {
    //     if (plus > 0) {
    //         setplus((prev) => prev - 1);
    //     }
    // }

    // add to cart function

    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } = useCartStore();



    return (
        <Container>
            <Grid container spacing={2} style={{ padding: 10 }}>
                <Grid item sm={12}>
                    <h1>Cart Page</h1>
                </Grid>
                <Grid item xs={6} className="cart-view">
                    {cart?.map((product) => {
                        return (
                            <div>

                                <Grid item sm={12} margin={'20px'}>
                                    <img className='cart-img'
                                        src={product.image}
                                        alt={product.title}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <h2>Title: {product.title}</h2>
                                    <h3>Price: {product.price}</h3>
                                    <h4>Area: {product.area}</h4>
                                    <p>Description: {product.description}</p>
                                    <h4>total:{product.quantity * product.price}</h4>
                                    <h1>Quantity: {product.quantity}</h1>
                                    <Button variant="contained" color="primary" onClick={() => decreaseQuantity(product.id)} style={{ marginRight: '20px' }} ><RemoveIcon /></Button>
                                    <Button variant="contained" color="secondary" onClick={() => increaseQuantity(product.id)}> <AddIcon /> </Button>
                                    <Button variant="contained" color="error" style={{ marginLeft: '20px' }} onClick={() => removeFromCart(product.id)}>
                                        <DeleteIcon />
                                    </Button>
                                </Grid>

                            </div>
                        )
                    })}
                </Grid>
                <Grid item sm={6}>
                    <div>
                        <h2>Total: {total}</h2>
                        <Typography variant="h6" gutterBottom>
                            Shipping address
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                    label="Use this address for payment details"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Payment method
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item sm={12}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Crads</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Visa" onChange={() => setcardtype('Visa')} control={<Radio />} label="Visa" />
                                        <FormControlLabel value="Master" onChange={() => setcardtype('mastercard')} control={<Radio />} label="Mastercard" />
                                        <FormControlLabel value="PayPal" onChange={() => setcardtype('paypal')} control={<Radio />} label="PayPal" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            {cardtype === 'Visa' && (
                                <div>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="cardName"
                                            label="Name on card"
                                            fullWidth
                                            autoComplete="cc-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="cardNumber"
                                            label="Card number"
                                            fullWidth
                                            autoComplete="cc-number"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="expDate"
                                            label="Expiry date"
                                            fullWidth
                                            autoComplete="cc-exp"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="cvv"
                                            label="CVV"
                                            helperText="Last three digits on signature strip"
                                            fullWidth
                                            autoComplete="cc-csc"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                                            label="Remember credit card details for next time"
                                        />
                                    </Grid>
                                </div>

                            )}
                            {cardtype === 'mastercard' && (
                                <h1>master card</h1>
                            )}
                            {cardtype === 'paypal' && (
                                <h1>paypal </h1>
                            )}





                        </Grid>
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
}



export default Cartpage;
