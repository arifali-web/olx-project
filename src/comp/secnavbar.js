import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

function Secnavbar() {
    return (
        <nav className='sec-nav'>
            <ul  style={{ 'listStyleType': 'none', }}>
                <li><Link to="/homepage" className='links'>All categories</Link> <KeyboardArrowDownIcon /></li>
                <li><Link to="/homepage" className='links'>Home</Link></li>
                <li><Link to="/mobiles" className='links'>Mobile Phones</Link></li>
                <li ><Link to="/cars" className='links'>Cars</Link></li>
                <li><Link to="/houses" className='links'>Houses</Link></li>
            </ul>
        </nav>
    )
}

export default Secnavbar