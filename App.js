import React, {useContext, useEffect, useState} from 'react';

import Navi from './src/router/Navi';


import ShoppingsProvider from './src/context/ShoppingsProvider';
import VisaCard from './src/Components/VisaCard';




  {/* 
<ShoppingsProvider>
  <Navi /> 
  </ShoppingsProvider>
  */}

const App = () => {
 
  
  return (
<ShoppingsProvider>
  <Navi /> 
  </ShoppingsProvider>

  )
};


export default App;
