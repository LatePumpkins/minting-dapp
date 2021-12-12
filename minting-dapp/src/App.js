import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';

import * as s from "./styles/globalStyles";
import styled from "styled-components";







const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;



function App() {
  

  return (
    <div className='appContainer'>

      <NavProvider>
     
          <Nav />
          <Main />
      </NavProvider>
  </div>
  );
}

export default App;
