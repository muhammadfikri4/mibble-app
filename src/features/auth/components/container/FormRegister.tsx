import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {AuthFormState, Focused, InputContainerProps} from './types';
import { GloButton } from '../../../_global/components/Button';
import { Modalog } from '../../../_global/components/modal';

const initialFormState: AuthFormState = {
  email: '',
  name: '',
  password: '',
};

export const FormRegister: React.FC<InputContainerProps> = ({
  focused,
  handleBlur,
  handleFocused,
}) => {
  const [formState, setFormState] = useState<AuthFormState>(initialFormState);
  const [show, setShow] = useState(false);
  const navigate = useNavigation();

  const handleNavigate = (to: string) => navigate.navigate(to as never);

  const handleFormChange = (key: Focused, val: string) =>
    setFormState(prev => ({
      ...prev,
      [key as string]: val,
    }));

  const handleSubmit = () => {
    if (!formState.email || !formState.password) {
      setShow(prev => !prev);
    }
  };
  return (
    <View style={style.form}>
      <TextInput
        style={[
          style.textInput,
          focused === 'name' ? style.focusedBorder : style.unFocusedBorder,
        ]}
        keyboardType="default"
        placeholder="Name"
        onFocus={() => handleFocused?.('name')}
        onBlur={handleBlur}
        onChangeText={val => handleFormChange('name', val)}
      />
      <TextInput
        style={[
          style.textInput,
          focused === 'email' ? style.focusedBorder : style.unFocusedBorder,
        ]}
        keyboardType="email-address"
        placeholder="Email"
        onFocus={() => handleFocused?.('email')}
        onBlur={handleBlur}
        onChangeText={val => handleFormChange('email', val)}
      />
      <TextInput
        style={[
          style.textInput,
          style.textInput,
          focused === 'password' ? style.focusedBorder : style.unFocusedBorder,
        ]}
        secureTextEntry
        placeholder="Password"
        onFocus={() => handleFocused?.('password')}
        onBlur={handleBlur}
        onChangeText={val => handleFormChange('password', val)}
      />
      <Pressable style={style.flexEnd}>
        <Text>Forgot Password?</Text>
      </Pressable>
      <GloButton
        onPress={handleSubmit}
        title="Register"
        size="sm"
        />
      <GloButton
        onPress={() => handleNavigate('login-screen')}
        title="Login"
        size="sm"
        variant="primary"
      />
      <Modalog
        body="Form cannot be empty, please input your email and password"
        buttonTitle="I agree"
        title="WARNING!"
        show={show}
        onHide={handleSubmit}
      />
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
    borderRadius: 50,
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
