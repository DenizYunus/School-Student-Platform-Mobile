import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(pages)" />
        </Stack>
    )
}

export default StackLayout;