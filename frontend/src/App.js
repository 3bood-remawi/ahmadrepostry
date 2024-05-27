import React from 'react';
import Header_res from './Component/Restaurant/Header_res/Header_res';
import DataCard from './Component/Restaurant/card_all_restaurants/Card_group';
import FooterPlaces from './Component/Restaurant/Footer_res/Footer';
import MultipleCards from './Component/Restaurant/card_supporter/MultipleCards';
import Footnotes from './Component/Restaurant/Footnotes/Footnotes';



function App() {
  return (
    <>

      <Header_res/>
      <MultipleCards/>
      <DataCard/>
      <Footnotes/>
      <FooterPlaces/>
    
  
      
    </>
  );
}

export default App;
