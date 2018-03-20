import React from 'react';
import {Grid} from 'griz';
import Wrapper from './components/atoms/Wrapper';
import Home from './components/pages/Home';

const App = () => (
  <Wrapper fullbg landing>
    <Grid>
      <Home/>
    </Grid>
  </Wrapper>
);

export default App;
