
import React, { useEffect } from 'react';
import ImgSlider from './slider';
import { Container } from '@mui/material';
import Secnavbar from './secnavbar';
import Categories from './categories';
import CircularDemo from './section';
import { Mobile, bikes, car } from '../data';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";


const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const uid = user.uid;
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
  return (
    <div> 
      <Container>
        <Secnavbar />
        {/* <ImgSlider /> */}
        <Categories />
        <CircularDemo tittle={"Mobile"} data={Mobile} />
        <CircularDemo tittle={"Cars"} data={car} />
        <CircularDemo tittle={"Bike"} data={bikes} />
      </Container>
    </div>
  )
}

export default Home