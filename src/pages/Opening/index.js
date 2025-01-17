import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {colors} from '../../utils';
import Config from 'react-native-config';

const Opening = ({navigation}) => {
  useEffect(() => {
    fetch(`http://${Config.NODEJS_URL}:${Config.NODEJS_PORT}/auth/is-logged-in`)
      .then(res => res.json())
      .then(res => {
        setTimeout(() => {
          if (res.status) {
            navigation.replace('Home');
          } else {
            navigation.replace('Login');
          }
        }, 2000);
      });
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Image style={styles.image} source={Logo} />
      <Text style={styles.title}>Your finance solution</Text>
    </View>
  );
};

export default Opening;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  page: {
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
  },
});
