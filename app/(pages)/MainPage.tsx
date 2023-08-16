import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { useAppContext } from '../utils/AppContext';
import UpcomingLessonJoin from '../components/UpcomingLessonJoin';
import AnnouncementsOverview from '../components/AnnouncementsOverview';

export default function MainPage() {
    const { user, announcements } = useAppContext();

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require('../../assets/Common/Background.png')} />
            <View>
                <View>
                    <Text>Welcome</Text>
                    <Text>{user.name}</Text>
                </View>
                <Image source={{ uri: user.base64Image }} />
            </View>
            <Text>Join The</Text>
            <Text>Upcoming Lesson!</Text>
            <UpcomingLessonJoin lessonName="Software Design Applications" teacherName="Selçuk Şener" date="Monday, 28 September 2023" time="14.00-15.30" />
            <Text>Do Not Miss These</Text>
            <Text>Announcements!</Text>
            <AnnouncementsOverview announcements={announcements} />
            <Text>Quick Access</Text>
            <View>
                <View>
                    <Image source={require("../../assets/Common/CircleDot.png")} />
                    <Pressable>
                        <Text>Online Lessons</Text>
                    </Pressable>
                </View>
                <View>
                    <Image source={require("../../assets/Common/CircleDot.png")} />
                    <Pressable>
                        <Text>HomeWorks</Text>
                    </Pressable>
                </View>
                <View>
                    <Image source={require("../../assets/Common/CircleDot.png")} />
                    <Pressable>
                        <Text>Attendance</Text>
                    </Pressable>
                </View>
                <View>
                    <Image source={require("../../assets/Common/CircleDot.png")} />
                    <Text>Sunny</Text>
                </View>
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
})