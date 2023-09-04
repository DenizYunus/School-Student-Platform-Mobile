import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { Image } from 'expo-image'
import { useFonts, RedHatText_400Regular } from '@expo-google-fonts/red-hat-text';
import { useAppContext } from '../utils/AppContext';

export default function LoginWelcome() {
  let [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
  });

  // const { token, setToken, user, setUser, settings, setSettings } = useAppContext();

  const { setUser, setAnnouncements } = useAppContext();

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
        <Pressable style={styles.button} onPress={() => {
          const hardcodedUserData = {
            name: 'Deniz Yunus Göğüş',
            studentNumber: 'B1905.010031',
            email: 'denizgogus@stu.aydin.edu.tr',
            base64Image: 'data:image/jpeg;base64,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',
          };

          const hardcodedAnnouncements = {
            announcements: [
              {
                announcement: '2023-2024 Akademik Yılı Güz Dönemi Başlangıç Tarihi Hakkında',
                date: '29.08.2023',
                type: 'General',
              },
              {
                announcement: '2022-2023 Eğitim ve Öğretim Yılı YAZ Dönemi Ortak Dersler FİNAL SINAV Çizelgesi',
                date: '26.08.2023',
                type: 'Department',
              },
              {
                announcement: '2022-2023 Eğitim ve Öğretim Yılı YAZ Dönemi Ortak Dersler ARA SINAV Çizelgesi',
                date: '03.08.2023',
                type: 'Course',
              },
            ],
          }

          setUser(hardcodedUserData);
          setAnnouncements(hardcodedAnnouncements.announcements);

          router.replace("/MainPage")
        }}>
          <Text style={styles.buttonText}>
            Pass
          </Text>
        </Pressable>
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