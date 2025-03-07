import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Advance Settings",
                }}
            />
            <Text>Tab Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});






