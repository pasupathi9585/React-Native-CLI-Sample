import React from 'react';
import colors from '../../assets/theme/colors';
import styles from '../../css/homeStyle';
import Container from '../container';
import Inputs from '../input';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../customButton';
import {useNavigation} from '@react-navigation/core';
import {DASHBOARD, LOGIN, SIGNUP, HOME} from '../../constants/routeNames';

const LoginComponent = ({title, disabled, loading, btnType, onPress}) => {
  const {navigate} = useNavigation();
  const onclick = () => {};
  return (
    <Container style={{padding: 20}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Please login here</Text>
        <View style={styles.formStyle}>
          <Inputs
            label={'Username'}
            iconPosition="right"
            placeholder={'Enter username'}
            //error={"feild can't be empty"}
          />

          <Inputs
            label={'Password'}
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder={'Enter password'}
            //error={"feild can't be empty"}
          />

          <CustomButton
            btnType={'danger'}
            title={'Login'}
            disabled={false}
            //loading={true}
            onPress={() => onclick()}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account ?</Text>
            <TouchableOpacity onPress={() => navigate(SIGNUP)}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
