import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { useFonts, RedHatText_400Regular, RedHatText_700Bold, RedHatText_500Medium, RedHatText_300Light } from '@expo-google-fonts/red-hat-text';
import { useAppContext } from '../utils/AppContext';
import { router } from 'expo-router';
import { getLoginAddress, performLoginAndGetLinks, getDashboardData, getLessonDetails } from '../utils/RequestsManager';

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
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [errorMessage, setErrorMessage] = React.useState(null);

    const { setToken, setUser, setAnnouncements } = useAppContext();

    async function getAnnouncements(token, user) {
        try {
            // Send a GET request to the announcements endpoint
            const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/get-announcements", {
                method: 'GET',
                headers: {
                    'Authorization': token, // Pass the token in the Authorization header
                },
            });

            const announcements = await response.json();

            setAnnouncements(announcements);

            console.log("Name: ", user.name);
            console.log("Student Number: ", user.studentNumber);
            console.log("Email: ", user.email);
            console.log("Announcements: ", announcements);
            console.log("base64Image: ", user.base64Image);

            router.replace("/MainPage")
        } catch (error) {
            console.error("Error fetching announcements:", error);
        }
    }


    async function handleLogin() {

        if (email === '' || password === '') {
            setErrorMessage("Please fill in all the fields.");
            return;
        }

        setButtonDisabled(true);

        const actionURL = await getLoginAddress();
        if (actionURL) {
            // console.log(actionURL);
            const links = await performLoginAndGetLinks(actionURL, email, password);

            if (links) {
                for (const link of links) {
                    if (link.includes("YazildigimDersler")) {
                        const details = await getLessonDetails(`https://ubism.aydin.edu.tr${link}`);
                        if (details) {
                            console.log(details);  // It will be an array of objects containing lessonName and teacherName.
                        }
                    }

                    // console.log("-------------- " + link + " --------------")
                    // const data = await getDashboardData(link);
                    // console.log(data);
                }
            }
        }

        // const requestBody = {
        //     username: email,
        //     password: password
        // };

        // try {
        //     const response = await fetch(process.env.EXPO_PUBLIC_API_URL + "/login", {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(requestBody)
        //     });

        //     // Handle the response
        //     const result = await response.json();

        //     // Save the token using the setToken function from your context
        //     setToken(result.token);
        //     setUser(result.userData);

        //     getAnnouncements(result.token, result.userData);


        // } catch (error) {
        //     console.error("Error in login:", error);
        //     // Re-enable the sign-in button if there is an error
        //     setButtonDisabled(false);
        // }
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require('../../assets/Common/Background.png')} />
            <View style={{ width: "100%", justifyContent: "flex-end", alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 17, marginRight: "2%" }}>English</Text>
                <Image source={require("../../assets/Login/DropdownIcon.png")} style={{ width: 8, height: 8, marginRight: "8%" }} />
            </View>
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
                    <Image source={require("../../assets/Login/ClearUsernameField.png")} style={{ width: 25, height: 25 }} />
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
                        )} style={{ width: 25, height: 25 }} />
                </Pressable>
            </View>

            <Pressable style={styles.signInButton} onPress={handleLogin} disabled={buttonDisabled}>
                {buttonDisabled ? <Image source={require("../../assets/Common/Loading.gif")} style={{ width: 25, height: 25 }} /> : <Text style={styles.signInText}>Sign In</Text>}
            </Pressable>
            {errorMessage && <Text style={{ color: "red", fontFamily: "Gilroy_Medium", height: 20, marginTop: 5, marginBottom: -25 }}>{errorMessage}</Text>}

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
        marginTop: "15%",
        marginBottom: "5%",
        fontFamily: 'Gilroy_Bold',
        fontSize: 32,
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
        height: 60,
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
        fontSize: 16,
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
        height: 60,
        marginTop: "17%",
        backgroundColor: '#3C93FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    signInText: {
        fontFamily: 'Gilroy_Bold',
        fontSize: 19,
        letterSpacing: 0.5,
        color: '#FFFFFF',
    },
    readBefore: {
        marginTop: "5%",
        fontFamily: 'Gilroy_Medium',
        fontSize: 14,
        letterSpacing: 1.5,
        lineHeight: 77,
        textAlign: 'center',
        color: '#ACADAC',
        alignSelf: 'center',
    },
    importantNoteContainer: {
        marginTop: "5%",
        backgroundColor: '#FFFFFF',
        width: "90%",
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 5
    },
    importantNote: {
        fontFamily: 'Gilroy_Medium',
        fontSize: 11,
        lineHeight: 13,
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
        letterSpacing: 1,
        fontSize: 11
    },
    contactContainerTextBlue: {
        fontFamily: 'Gilroy_Medium',
        textDecorationLine: 'underline',
        color: '#3C93FF',
        letterSpacing: 1,
        fontSize: 11
    },
});