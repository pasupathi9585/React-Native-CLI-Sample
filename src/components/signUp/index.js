import React from 'react';
import colors from '../../assets/theme/colors';
import styles from '../../css/homeStyle';
import Container from '../container';
import Inputs from '../input';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../customButton';
import {useNavigation} from '@react-navigation/core';
import {DASHBOARD, LOGIN, SIGNUP, HOME} from '../../constants/routeNames';

const SiginupComponent = ({onChangeVal, form, error, onSubmit}) => {
  const {navigate} = useNavigation();
  return (
    <Container style={{padding: 20}}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome To Contact</Text>
        <Text style={styles.subTitle}>Please Create your account here</Text>
        <View style={styles.formStyle}>
          <Inputs
            label={'User Name'}
            iconPosition="right"
            placeholder={'Enter username'}
            onChangeText={(value)=>{
              onChangeVal({name: 'userName', value})
            }}
            error={error.userName}
          />

          <Inputs
            label={'First Name'}
            iconPosition="right"
            placeholder={'Enter First name'}
            onChangeText={(value)=>{
              onChangeVal({name: 'firstName', value})
            }}
            error={error.firstName}
          />

          <Inputs
            label={'Last Name'}
            iconPosition="right"
            placeholder={'Enter Last name'}
            onChangeText={(value)=>{
              onChangeVal({name: 'lastName', value})
            }}
            error={error.lastName}
          />

          <Inputs
            label={'Email'}
            iconPosition="right"
            placeholder={'Enter email'}
            onChangeText={(value)=>{
              onChangeVal({name: 'email', value})
            }}
            error={error.email}
          />

          <Inputs
            label={'Password'}
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            placeholder={'Enter password'}
            onChangeText={(value)=>{
              onChangeVal({name: 'password', value})
            }}
            error={error.password}
          />

          <CustomButton
            btnType={'danger'}
            title={'Register'}
            disabled={false}
            //loading={true}
            onPress={() => onSubmit()}
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have account ?</Text>
            <TouchableOpacity onPress={() => navigate(LOGIN)}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SiginupComponent;
