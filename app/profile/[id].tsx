import { StyleSheet, Text, View } from "react-native";
import { Link, useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function Profile() {

    const urlProps = useLocalSearchParams();
    const searchProps = useGlobalSearchParams();

    console.log(urlProps) // {"id": "123"}
    console.log(searchProps) // {"id": "123", "name": "Bob"}

    return (
        <View style={styles.container}>
            <Text>Profile with ID : {urlProps.id}</Text>

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



