import { Stack } from 'expo-router';

export default function TabLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'salmon',
                },
                headerTitleStyle: {
                    color: 'blue',
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
        </Stack>
    );
}







