
import { Box, Heading } from '@chakra-ui/react';
import './App.css';
import { Bar, Meny, Said } from './comandNew';
import kogo from './img/logo-lg.png'


function App() {
  return (
   
   <div className='flex '>
       <Meny/>
       <Bar />
       <Said />
   </div>
  

   
   
  );
}

export default App;
