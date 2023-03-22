import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

export default function Dashboard({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>Thanks & Regards</Header>
      <Paragraph>
        I want to thank you for taking the time to check my assessment. If you
        have any questions or want to continue our conversation, please feel
        free to reach out at any time.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          })
        }>
        Logout
      </Button>
    </Background>
  );
}
