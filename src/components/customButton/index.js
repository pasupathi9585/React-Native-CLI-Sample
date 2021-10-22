import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from '../../css/homeStyle';

const CustomButton = ({title, disabled, loading, btnType, onPress}) => {
  const [onFouched, onChangeFound] = React.useState(false);
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    } else {
      switch (btnType) {
        case 'primary':
          return colors.primary;
        case 'secondary':
          return colors.secondary;
        case 'accent':
          return colors.accent;
        case 'danger':
          return colors.danger;
        case 'success':
          return colors.success;
        case 'grey':
          return colors.grey;
        case 'white':
          return colors.white;

        default:
          return colors.primary;
      }
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonWrapper, {backgroundColor: getBgColor()}]}
      onPress={onPress}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={colors.primary}/>}
        {title && (
          <Text style={{color: disabled ? 'black' : colors.white, paddingLeft: loading ? 5 : 0}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
