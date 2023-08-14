import { Tabs } from "expo-router";

export default () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarStyle: {display: "none"} }}>
            <Tabs.Screen name="LoginWelcome" />
            <Tabs.Screen name="LoginMain" />
        </Tabs>
    )
}