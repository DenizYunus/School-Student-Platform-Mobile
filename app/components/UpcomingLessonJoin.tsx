import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UpcomingLessonJoin({lessonName, teacherName, date, time}) {
    return (
        <View>
            <View>
                <Text>{lessonName}</Text>
                <Text>{teacherName}</Text>
                <Text>Monday, 28 September 2023</Text>
            </View>
            <View>
                <Text>14.00 - 15.30</Text>
                <Text>Join</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})