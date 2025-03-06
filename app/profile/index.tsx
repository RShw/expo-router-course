import { StyleSheet, Text, View } from "react-native";
import { Link, useGlobalSearchParams } from "expo-router";

export default function Profile() {

    const props = useGlobalSearchParams();

    console.log("index", props) // {"id": "123", "name": "Bob"}

    return (
        <View style={styles.container}>
            <Text>Profile with ID : {props.id} {props.name}</Text>

            {/* Go Back screen */}
            <Link href="../">Go Back</Link>

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