import {StyleSheet} from 'react-native';
import colors from '../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {},
  inputWrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 10,
  },
  error: {
    color: colors.danger,
    padding: 5,
    fontSize: 12,
  },
  buttonWrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 3,
    shadowRadius: 15,
    shadowOffset: {width: 56, height: 13},
  },
  loaderSection: {
    flexDirection: 'row',
  },
  logoImage: {
    height: 170,
    alignSelf: 'center',
    width: 170,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    paddingTop: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 17,
    paddingVertical: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  formStyle: {
    padding: 20,
  },
  createSection: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
  },
  linkBtn: {
    paddingLeft: 15,
    color: colors.primary,
    fontSize: 14,
  },
});
