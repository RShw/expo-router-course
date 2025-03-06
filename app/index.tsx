import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function Home() {

    const searchParams = {
        pathname: "/profile",
        params: {
            id: "123",
            name: "Bob"
        }
    }

    const navigate = () => {
        router.navigate(searchParams)
        console.log("Navigate to Profile")
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>

            <TouchableOpacity
                onPress={navigate}
            >
                <Text>Go to Profile</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})



