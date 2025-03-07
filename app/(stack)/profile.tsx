import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Profile() {

    const navigation = useNavigation();

    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    const actionDismiss = () => {
        if (router.canDismiss()) {
            router.dismiss(3);
        }

        if (router.canGoBack()) {
            router.dismissTo('/');
        }

        if (router.canGoBack()) {
            router.dismissAll();
        }
    }

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <TouchableOpacity
                onPress={actionDismiss}
            >
                <Text style={{ color: 'white' }}>Dismiss</Text>
            </TouchableOpacity>
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






