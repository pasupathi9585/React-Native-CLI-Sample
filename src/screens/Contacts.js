import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/container';
import Inputs from '../components/input';
import styles from '../css/homeStyle';


function Contacts() {
  return (
    <Container style={{padding: 20}}>
      <Inputs value={'This first'}/>
    </Container>
  );
}

export default Contacts;
