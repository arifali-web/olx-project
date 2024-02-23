
import { Container } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid/Grid'
import React from 'react'
import { Link } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <h2>POPULAR CATEGORIES</h2>
                        <ul className="footer-list">
                            <li><Link to="/cars">Cars</Link></li>
                            <li><Link to="/rent">Flats for rent</Link></li>
                            <li><Link to="/Mobile">Mobile Phones</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <h2>TRENDING SEARCHES</h2>
                        <ul className="footer-list">
                            <li><Link to="/bikes">Bikes</Link></li>
                            <li><Link to="/watches">Watches</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/dogs">Dogs</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <h2>ABOUT US</h2>
                        <ul className="footer-list">
                            <li><Link to="/bikes">About Dubizzle Group</Link></li>
                            <li><Link to="/watches">OLX Blog</Link></li>
                            <li><Link to="/books">Contact Us</Link></li>
                            <li><Link to="/dogs">OLX for Businesses</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <h2>TRENDING SEARCHES</h2>
                        <div className='icons'>
                            <Link to="https://www.w3schools.com/"><GoogleIcon /></Link>
                            <a href="https://www.w3schools.com/"><InstagramIcon /></a>
                            <a href="#"><TwitterIcon /></a>
                            <a href="#"><FacebookOutlinedIcon /></a>

                        </div>
                        <ul className="footer-list">
                            <li><Link to="/bikes">Bikes</Link></li>
                            <li><Link to="/watches">Watches</Link></li>
                            <li><Link to="/books">Contact Us</Link></li>
                            <li><Link to="/dogs">OLX for Businesses</Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer