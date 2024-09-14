import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Logo from '../../../core/assets/image/discuss.svg';
import {FormLogin} from '../../auth/components/container/FormLogin';
import {Focused} from '../components/container/types';

export const LoginScreen = () => {
  const [focused, setFocused] = useState<Focused>(null);

  const onFocus = (val: Focused) => setFocused(val);
  const onBlur = () => setFocused(null);

  const handleOutsidePress = () => {
    Keyboard.dismiss();
    setFocused(null);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={style.container}>
          <View style={style.header}>
            {/* <Image source={Logo} style={style.logo} /> */}
            <Logo width={500} height={300} />
          </View>
          <FormLogin
            focused={focused}
            handleBlur={onBlur}
            handleFocused={onFocus}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: 'black',
  },
  logo: {
    width: 300,
    height: 300,
  },
  formContainer: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  textInput: {
    padding: 10,
    paddingLeft: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    // borderColor: '#707988',
    borderRadius: 6,
  },
  focusedBorder: {
    borderColor: '#707988',
  },
  unFocusedBorder: {
    borderColor: '#e2e8f0',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  flexCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  colorWhite: {
    color: 'white',
  },
});
