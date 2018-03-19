import React from 'react';
import {Grid} from 'griz';
import Wrapper from './components/atoms/Wrapper';
import Home from './components/pages/Home';

const App = () => (
  <Wrapper fullbg>
    <Grid>
      <h1>Hello There..</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta maiores tempore, eius a odit. Quae alias enim sunt harum error eos placeat assumenda perspiciatis, impedit illo earum modi iure.</p>
      <Home/>
    </Grid>
  </Wrapper>
);

export default App;
