import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { useFonts, RedHatText_400Regular, RedHatText_700Bold, RedHatText_500Medium, RedHatText_300Light } from '@expo-google-fonts/red-hat-text';


export default function LoginMain() {
    let [fontsLoaded] = useFonts({
        RedHatText_400Regular,
        RedHatText_700Bold,
        RedHatText_500Medium,
        RedHatText_300Light,
        Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        Gilroy_Medium: require('../../assets/fonts/Gilroy-Medium.ttf'),
    });

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require('../../assets/Login/Background.png')} />
            <Text style={styles.signInToContinueText}>Sign In to Continue</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Enter Email or Student Number"
                    placeholderTextColor="#4F555A"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Pressable onPress={() => setEmail('')} style={styles.clearButton}>
                    <Image source={require("../../assets/Login/ClearUsernameField.png")} style={{ width: 33, height: 33 }} />
                </Pressable>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="••••••••"
                    placeholderTextColor="#667085"
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Pressable onPress={() => setPasswordVisible(!isPasswordVisible)} style={styles.visibilityButton}>
                    <Image source={isPasswordVisible
                    ? require("../../assets/Login/VisiblePasswordIcon.png")
                    : require("../../assets/Login/HiddenPasswordIcon.png"
                        )} style={{ width: 33, height: 33 }} />
                </Pressable>
            </View>

            <Pressable style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </Pressable>

            <Text style={styles.readBefore}>Read before Signing In</Text>

            <View style={styles.importantNoteContainer}>
                <Text style={styles.importantNote}>
                    Important Note: This app is not the official app of Istanbul Aydin University. This application is developed and maintained by Deniz Yunus Göğüş as a fun project and for educational purposes.
                </Text>
            </View>

            <View style={styles.contactContainer}>
                <Text style={styles.contactContainerText}>Please contact the mail below if you encounter any error.</Text>
                <Pressable onPress={() => { console.log("Go to mail.") }}>
                    <Text style={styles.contactContainerTextBlue}>denizyunusgogus@gmail.com</Text>
                </Pressable>
            </View>
        </View>
    )
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
    signInToContinueText: {
        marginTop: "10%",
        fontFamily: 'Gilroy_Bold',
        fontSize: 46,
        textAlign: 'center',
        color: '#000',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "85%",
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginTop: "5%",
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        height: 80,
        // other styling based on your preference
    },
    clearButton: {
        // styling for the clear button
    },
    visibilityButton: {
        // styling for the visibility toggle button
    },
    emailInput: {
        flex: 1,
        color: '#4F555A',
        alignSelf: 'center',
        fontFamily: 'Gilroy_Medium',
        fontSize: 26,
        letterSpacing: 1
    },
    passwordInput: {
        flex: 1,
        fontFamily: "Gilroy_Medium",
        fontSize: 26,
        color: '#667085',
        alignSelf: 'center'
    },
    signInButton: {
        width: "85%",
        height: 80,
        marginTop: "17%",
        backgroundColor: '#3C93FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    signInText: {
        fontFamily: 'Gilroy_Bold',
        fontSize: 25,
        letterSpacing: 0.5,
        color: '#FFFFFF',
    },
    readBefore: {
        width: "36%",
        marginTop: "6%",
        fontFamily: 'Gilroy_Medium',
        fontSize: 18,
        letterSpacing: 1.5,
        lineHeight: 77,
        textAlign: 'center',
        color: '#ACADAC',
        alignSelf: 'center',
    },
    importantNoteContainer: {
        marginTop: "6%",
        backgroundColor: '#FFFFFF',
        width: "85%",
        height: "7%",
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 40
    },
    importantNote: {
        fontFamily: 'Gilroy_Medium',
        fontSize: 16,
        // lineHeight: 13,
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.6)',
        alignSelf: 'center',
    },
    contactContainer: {
        marginTop: "15%",
        alignItems: 'center',
    },
    contactContainerText: {
        fontFamily: 'Gilroy_Medium',
        letterSpacing: 1
    },
    contactContainerTextBlue: {
        fontFamily: 'Gilroy_Medium',
        textDecorationLine: 'underline',
        color: '#3C93FF',
        letterSpacing: 1
    },
});