import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import useCartStore from './Cartstore';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function Navbar() {

    const { cart, removeallprodcut } = useCartStore();

    const [uid, setuid] = useState('')

    const [user, setuser] = useState('')
    const [open, setOpen] = useState(false);

    console.log(cart, "cart ");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setuid(user.uid);
                setuser(user)
                // ...
                console.log("uid", uid)
                console.log('eamil', user.email)
            } else {
                // User is signed out
                // ...
                console.log("user is logged out")
            }
        });
    }, [])

    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/sign-in");
            console.log("Signed out successfully")
            setuid()
            removeallprodcut()
        }).catch((error) => {
            // An error happened.
        });
    }

    const cartBtn = () => {
        if (uid) {
            navigate("/product")
            console.log(uid);
        }
        else {
            setOpen(true)
        }
    }
    const handleClose = () => setOpen(false);

    return (
        <div>
            <nav className="navbar">
                <Container >
                    <Grid container spacing={2} alignItems="center">
                        <Grid sm={1}>
                            <Link to='/home'>
                                <h1>logo</h1>
                            </Link>

                        </Grid>
                        <Grid sm={3}>
                            <input type='text' placeholder='search' className='location' ></input>

                        </Grid>
                        <Grid xs={12} sm={6}>

                            <input type='text' placeholder='search' className='search' ></input> <SearchIcon className='searchicon' />
                        </Grid>
                        <Grid>
                            {uid ?
                                <div>
                                    <h1>User Id : {user.email} </h1>
                                    <Link to='/sign-in'>
                                        <Button variant="text" onClick={handleLogout} className='text-btn'>Log out</Button>

                                    </Link>

                                </div>

                                :
                                <div>
                                    <Link to='/sign-in' style={{ marginRight: '20px' }}>
                                        <Button variant="outlined" className='outline-btn'>Sign In</Button>
                                    </Link>
                                    <Link to='/sign-up'>
                                        <Button variant="outlined" className='outline-btn'>Sign Up</Button>
                                    </Link>

                                </div>}
                            {


                            }
                            <div>


                                <Button variant="outlined" onClick={cartBtn} startIcon={<ShoppingCartIcon />} className='outline-btn'>
                                    Cart {`(${cart.length})`}
                                </Button>

                            </div>

                            <div>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style} >
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Log In
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            Login to use Cart
                                        </Typography>
                                        <Link to='/sign-in'>
                                            <Button>Sign In</Button>
                                        </Link>
                                    </Box>
                                </Modal>
                            </div>


                        </Grid>
                    </Grid>
                </Container>
            </nav>
        </div>
    )
}

export default Navbar;


{/* <nav>
<ul style={{ 'listStyleType': 'none', }}>
    <li><Link to="/homepage" className='links'>Home</Link></li>
    <li><Link to="/blogs" className='links'>Blogs</Link></li>
    <li ><Link to="/about">About</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
</ul>
</nav> */}