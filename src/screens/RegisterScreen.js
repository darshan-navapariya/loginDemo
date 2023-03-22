import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {theme} from '../core/theme';
import {emailValidator} from '../helpers/emailValidator';
import {passwordValidator} from '../helpers/passwordValidator';
import {nameValidator} from '../helpers/nameValidator';
import {confirmPasswordValidator} from '../helpers/confirmPasswordValidator';
import {mobileNumberValidator} from '../helpers/mobileNumberValidator';

export default function RegisterScreen({navigation}) {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    error: '',
  });
  const [mobileNumber, setMobileNumber] = useState({value: '', error: ''});

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = confirmPasswordValidator(
      password.value,
      confirmPassword.value,
    );
    const mobileNumberError = mobileNumberValidator(mobileNumber.value);

    if (nameError) {
      setName({...name, error: nameError});
      return;
    } else if (emailError) {
      setEmail({...email, error: emailError});
      return;
    } else if (passwordError) {
      setPassword({...password, error: passwordError});
      return;
    } else if (confirmPasswordError) {
      setConfirmPassword({...confirmPassword, error: confirmPasswordError});
      return;
    } else if (mobileNumberError) {
      setMobileNumber({...mobileNumber, error: mobileNumberError});
      return;
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Dashboard'}],
      });
    }
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />
        <View style={styles.header}>
          <Text style={styles.mainHeading}>Create Account</Text>
          <Text style={styles.subHeading}>
            Please Give us your details to continue
          </Text>
        </View>
        <TextInput
          label="Full name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="next"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <TextInput
          label="Confirm Password"
          returnKeyType="next"
          value={confirmPassword.value}
          onChangeText={text => setConfirmPassword({value: text, error: ''})}
          error={!!confirmPassword.error}
          errorText={confirmPassword.error}
          secureTextEntry
        />

        <TextInput
          label="Mobile Number"
          returnKeyType="next"
          value={mobileNumber.value}
          onChangeText={text => setMobileNumber({value: text, error: ''})}
          error={!!mobileNumber.error}
          errorText={mobileNumber.error}
          secureTextEntry
        />

        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={styles.signupButton}>
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {marginTop: 20, marginBottom: 15},
  row: {
    flexDirection: 'row',
    marginTop: 4,
    alignSelf: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  mainHeading: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  subHeading: {fontSize: 13},
  signupButton: {marginTop: 24},
});
