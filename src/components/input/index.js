import React from 'react';
import {Text, View, ScrollView, TextInput} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from '../../css/homeStyle';

const Inputs = ({
  style,
  label,
  onChangeText,
  iconPosition,
  value,
  icon,
  error,
  ...props
}) => {
  const [onFouched, onChangeFound] = React.useState(false);
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') return 'row';
      else if (iconPosition === 'right') return 'row-reverse';
    }
  };
  const getColorCode = () => {
    
    if (error) {
      return colors.danger;
    }
    if(onFouched){
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          icon ? {alignItems:'center'} : {},
          {borderColor: getColorCode(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          onFocus={()=>onChangeFound(true)}
          onBlur={()=>onChangeFound(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Inputs;
