



import ShoppingsProvider from './src/context/ShoppingsProvider';
import VisaCard from './src/Components/VisaCard';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Navi from './src/router/Navi';





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
