import React from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import styles from '../../css/homeStyle';

const Inputs = ({style, onChangeText, value}) => {
  return (
    <View>
      <TextInput
        style={[style, styles.textInput]}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export default Inputs;
