import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function UpcomingLessonJoin({ lessonName, teacherName, date, time }) {

    let [fontsLoaded] = useFonts({
        Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        Gilroy_Medium: require('../../assets/fonts/Gilroy-Medium.ttf'),
        Gilroy_SemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 20 }}>{lessonName}</Text>
                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 13, color: "#676767" }}>{teacherName}</Text>
                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 11, color: "#828282" }}>{date}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text>{time}</Text>
                <View style={styles.materialJoinNowButton}>
                    <Text style={styles.materialJoinNowButtonText}>Join Now</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftContainer: {
        flexDirection: "column",
        width: "60%",
        height: "100%",
        justifyContent: "space-between",
    },
    rightContainer: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    materialJoinNowButton: {
        width: 100,
        height: 30,
        backgroundColor: "#3C93FF",
        borderRadius: 10,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    materialJoinNowButtonText: {
        fontFamily: "Gilroy_SemiBold",
        fontSize: 12,
        color: "#fff"
    }
})