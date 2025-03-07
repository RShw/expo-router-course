import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Text>Tab Home</Text>
            <Link href="/profile">Profile</Link>
            <Link href="/settings">Settings</Link>
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
