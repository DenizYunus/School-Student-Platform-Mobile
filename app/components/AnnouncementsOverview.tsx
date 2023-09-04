import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function AnnouncementsOverview({announcements}) {
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

    return (
        <View>
            <View>
                <Image source={require("../../assets/Common/CircleDot.png")} />
                <Text>{selectedType} Announcements</Text>
            </View>
            <View>
                <Image source={require("../../assets/Common/LongSeperatorAnnouncementsLeft.png")} style={{height: 150}} />
                <View>
                    {announcements.filter(a => a.type === selectedType).map((item, index) => (
                        <Text key={index}>{item.announcement}</Text>
                    ))}
                </View>
                <View>
                    <Pressable onPress={() => setSelectedType('General')}>
                        <Text>General</Text>
                    </Pressable>
                    <Pressable onPress={() => setSelectedType('Department')}>
                        <Text>Department</Text>
                    </Pressable>
                    <Pressable onPress={() => setSelectedType('Course')}>
                        <Text>Course</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
