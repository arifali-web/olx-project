import { Container, Grid } from '@mui/material'
import React from 'react'
import '../style/Navbar.css';

function Categories() {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12}>
                        <h2>All categories</h2>
                    </Grid>
                    <Grid xs={12} sm={12}>
                        <div className='boxes'>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                            <div>
                                <div className='box'></div>
                                <p>Food & Drink</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Categories