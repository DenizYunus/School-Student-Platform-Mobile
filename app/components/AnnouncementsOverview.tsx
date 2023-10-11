import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';

export default function AnnouncementsOverview({ announcements }) {
    // const announcements = [
    //     { "announcement": "General Announcement 1", "date": "03.08.2023", "type": "General" },
    //     { "announcement": "General Announcement 2", "date": "01.08.2023", "type": "General" },
    //     { "announcement": "General Announcement 3", "date": "01.08.2023", "type": "General" },
    //     { "announcement": "Department Announcement 1", "date": "03.08.2023", "type": "Department" },
    //     { "announcement": "Department Announcement 2", "date": "01.08.2023", "type": "Department" },
    //     { "announcement": "Department Announcement 3", "date": "01.08.2023", "type": "Department" },
    //     { "announcement": "Course Announcement 1", "date": "03.08.2023", "type": "Course" },
    //     { "announcement": "Course Announcement 2", "date": "01.08.2023", "type": "Course" },
    //     { "announcement": "Course Announcement 3", "date": "01.08.2023", "type": "Course" }
    // ];

    const [selectedType, setSelectedType] = useState('General');

    let [fontsLoaded] = useFonts({
        Gilroy_Bold: require('../../assets/fonts/Gilroy-Bold.ttf'),
        Gilroy_Medium: require('../../assets/fonts/Gilroy-Medium.ttf'),
        Gilroy_SemiBold: require('../../assets/fonts/Gilroy-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    console.log(announcements);

    const getButtonStyle = (type) => {
        return type === selectedType ?
            { width: "130%", height: 50, backgroundColor: "white", elevation: 20, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5, marginTop: 5, borderColor: "#0001", borderWidth: 2, alignItems: "center", flexDirection: "row" } :
            { width: "100%", height: 40, paddingHorizontal: 10, paddingVertical: 5, marginTop: 5, alignItems: "center", flexDirection: "row" };
    };

    return (
        <View style={{ backgroundColor: "white", borderRadius: 20, elevation: 15, padding: 12 }} >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={{ width: 15, aspectRatio: 1 }} source={require("../../assets/Common/CircleDot.png")} />
                <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 15, marginLeft: 5, marginTop: -2 }}>{selectedType} Announcements</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Image source={require("../../assets/Common/LongSeperatorAnnouncementsLeft.png")} style={{ height: 150, marginLeft: 6 }} />
                <ScrollView style={{ height: 150, marginLeft: 10, elevation: 15, backgroundColor: "white", borderRadius: 20, paddingHorizontal: 15 }}>
                    {announcements.filter(a => a.type === selectedType).map((item, index) => (
                        <>
                            <Text style={{ fontSize: 11, fontFamily: "Gilroy_Medium", marginTop: 5 }}>{item.announcement}</Text>
                            <Text style={{ fontSize: 11, fontFamily: "Gilroy_Medium", opacity: 0.5, marginTop: 2 }}>{item.date}</Text>
                        </>
                    ))}
                </ScrollView>
                <View style={{ marginLeft: 5, width: "30%" }}>
                    <Pressable onPress={() => setSelectedType('General')}>
                        <View style={getButtonStyle('General') as any}>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <Image style={{ width: 15, height: 15 }} source={require("../../assets/Common/CircleDot.png")} />
                                <Image source={require("../../assets/Common/LongSeperatorAnnouncementsLeft.png")} style={{ height: 10, width: 2, marginTop: 2, opacity: 0.4 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 13 }}>General</Text>
                                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 11 }}>General</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setSelectedType('Faculty')}>
                        <View style={getButtonStyle('Faculty') as any}>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <Image style={{ width: 15, height: 15 }} source={require("../../assets/Common/CircleDot.png")} />
                                <Image source={require("../../assets/Common/LongSeperatorAnnouncementsLeft.png")} style={{ height: 10, width: 2, marginTop: 2, opacity: 0.4 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 13 }}>Faculty</Text>
                                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 11 }}>Faculty</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setSelectedType('Course')}>
                        <View style={getButtonStyle('Course') as any}>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <Image style={{ width: 15, height: 15 }} source={require("../../assets/Common/CircleDot.png")} />
                                <Image source={require("../../assets/Common/LongSeperatorAnnouncementsLeft.png")} style={{ height: 10, width: 2, marginTop: 2, opacity: 0.4 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontFamily: "Gilroy_SemiBold", fontSize: 13 }}>Course</Text>
                                <Text style={{ fontFamily: "Gilroy_Medium", fontSize: 11 }}>Course</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
