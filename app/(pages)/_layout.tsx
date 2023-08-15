import { Tabs } from "expo-router";
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import { AppProvider } from "../utils/AppContext";

export default () => {
    return (
        <SafeAreaProvider>
            <AppProvider>
                <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
                    <Tabs.Screen name="LoginWelcome" />
                    <Tabs.Screen name="LoginMain" />
                </Tabs>
            </AppProvider>
        </SafeAreaProvider>
    )
}