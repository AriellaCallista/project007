import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import { auth } from '../../config/Firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Logo } from '../../assets'
import { colors } from '../../utils';

const Opening = ({navigation}) => {
    useEffect(() => {
      const logged = onAuthStateChanged(auth, (user) => {
        setTimeout(() => {
            if (user) {
                navigation.replace('MainApp');
            } else {
                navigation.replace('Home');
            }
        }, 12000);
      })
    
      return () => {
        logged()
      }
    }, [navigation])
    
  return (
    <View style={styles.page}>
        <Image style={styles.image} source={Logo} />
        <Text style={styles.title}>Your finance solution</Text>
    </View>
  )
}

export default Opening

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
        justifyContent: 'center'
    },
    title: {
        paddingTop: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        color: 'white'
    }
})