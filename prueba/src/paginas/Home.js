import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Infoapp from '../components/titulo/Infoapp';
import Cardinfo from '../components/tarjertasinfo/Cardinfo'


function Home() {
  return (
    <div>
      
      <hr></hr>
      <Carousel></Carousel>
      <hr></hr>
     <Infoapp></Infoapp>
     <Cardinfo></Cardinfo>
     
    </div>
  );
}

export default Home;
