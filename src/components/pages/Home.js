import React from 'react';
import {GridCol} from 'griz';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Home = () => (
  <GridCol offset="25" column="50">
    <Input mr=".5rem" placeholder="বই, লেখক কিংবা বিভাগ..."/>
    <Button>খুঁজুন</Button>
  </GridCol>
);

export default Home;
