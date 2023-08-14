import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { useFonts, RedHatText_400Regular } from '@expo-google-fonts/red-hat-text';

export default function LoginWelcome() {
  let [fontsLoaded] = useFonts({
    RedHatText_400Regular,
  });

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
              Login
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
    width: '50%',
    height: '50%',
    top: '15%',
    contentFit: 'contain',
  },
  continueButton: {
    position: 'absolute',
    top: '75%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#3C93FF",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: { width: 4, height: 4 },
    borderRadius: 10,
    paddingVertical: 30, // Adjust vertical padding as needed
    paddingHorizontal: 50, // Adjust horizontal padding as needed
    minWidth: 100, // Set minimum width
    alignItems: 'center', // Center-align the text horizontally
    justifyContent: 'center', // Center-align the text vertically
  },
  buttonText: {
    fontFamily: 'RedHatText_400Regular',
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: 0.06,
    color: '#FFFFFF',
  }
});