import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { useAppContext } from '../utils/AppContext';
import UpcomingLessonJoin from '../components/UpcomingLessonJoin';
import AnnouncementsOverview from '../components/AnnouncementsOverview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function MainPage() {
    const { user, announcements } = useAppContext();

    let [fontsLoaded] = useFonts({
        Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        Gilroy_Medium: require('../../assets/fonts/Gilroy-Medium.ttf'),
        Gilroy_SemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    console.log(user.base64Image)
    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.backgroundImage} source={require('../../assets/Common/Background.png')} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{ width: "100%", flexDirection: "row", alignContent: "center", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 14, color: "#ACADAC" }}>Welcome</Text>
                            <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 14, color: "#000", marginTop: 5 }}>{user.name}</Text>
                        </View>
                        <Image source={{ uri: user.base64Image }} style={{ width: 40, height: 40, borderRadius: 50 }} />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={styles.headingIntro}>Join The</Text>
                        <Text style={styles.headingMain}>Upcoming Lesson!</Text>
                        <UpcomingLessonJoin lessonName="Software Design Applications" teacherName="Selçuk Şener" date="Monday, 28 September 2023" time="14.00 - 15.30" />
                    </View>
                    <View style={{ width: "100%", marginTop: 15 }}>
                        <Text style={styles.headingIntro}>Do Not Miss These</Text>
                        <Text style={styles.headingMain}>Announcements!</Text>
                        <AnnouncementsOverview announcements={announcements} />
                    </View>
                    <Text style={styles.quickAccessText}>Quick Access</Text>
                    <View style={styles.quickAccessContainer}>
                        <View style={styles.quickAccessItem}>
                            <Pressable>
                                <Image source={require("../../assets/Common/CircleDot.png")} style={styles.quickAccessItemImage} />
                                <Text style={styles.quickAccessItemText}>Online Lessons</Text>
                            </Pressable>
                        </View>
                        <View style={styles.quickAccessItem}>
                            <Pressable>
                                <Image source={require("../../assets/Common/CircleDot.png")} style={styles.quickAccessItemImage} />
                                <Text style={styles.quickAccessItemText}>Homeworks</Text>
                            </Pressable>
                        </View>
                        <View style={styles.quickAccessItem}>
                            <Pressable>
                                <Image source={require("../../assets/Common/CircleDot.png")} style={styles.quickAccessItemImage} />
                                <Text style={styles.quickAccessItemText}>Attendance</Text>
                            </Pressable>
                        </View>
                        <View style={styles.quickAccessItem}>
                            <Image source={require("../../assets/Common/CircleDot.png")} style={styles.quickAccessItemImage} />
                            <Text style={styles.quickAccessItemText}>Sunny</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 15
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        contentFit: 'cover',
    },
    headingIntro: {
        fontFamily: "Gilroy_Bold",
        fontSize: 21,
        color: "#000"
    },
    headingMain: {
        fontFamily: "Gilroy_SemiBold",
        fontSize: 27,
        color: "#3C93FF",
        marginTop: -5,
        marginBottom: 10
    },
    quickAccessText: {
        fontFamily: "Gilroy_Bold",
        fontSize: 21,
        color: "#000",
        marginBottom: 15
    },
    quickAccessContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    quickAccessItem: {
        width: "25%",
        height: 50,
    },
    quickAccessItemImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
        alignSelf: "center"
    },
    quickAccessItemText: {
        fontFamily: "Gilroy_SemiBold",
        fontSize: 13,
        color: "#8696BB",
        marginTop: 5,
        textAlign: "center"
    }
})