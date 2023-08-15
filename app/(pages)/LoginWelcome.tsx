import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { useFonts, RedHatText_400Regular } from '@expo-google-fonts/red-hat-text';
import { useAppContext } from '../utils/AppContext';

export default function LoginWelcome() {
  let [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
  });

  // const { token, setToken, user, setUser, settings, setSettings } = useAppContext();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={require('../../assets/Login/LoginBackground.png')} />
      <Image style={styles.welcomeDrawing} source={require('../../assets/Login/LoginImage.png')} />

      <View style={styles.continueButton}>
        <Link href="/LoginMain" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    contentFit: 'cover',
  },
  welcomeDrawing: {
    position: 'absolute',
    width: '60%',
    height: '60%',
    top: '15%',
    contentFit: 'contain',
  },
  continueButton: {
    position: 'absolute',
    top: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#3C93FF",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 4, height: 4 },
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Gilroy_Bold',
    fontStyle: 'normal',
    fontSize: 19,
    textAlign: 'center',
    letterSpacing: 0.06,
    color: '#FFFFFF',
  }
});