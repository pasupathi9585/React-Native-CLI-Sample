import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from '../../css/homeStyle';

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>
        {children}
      </View>
    </ScrollView>
  );
}

export default Container;
