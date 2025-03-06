import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

export default function Profile() {

    const props = useLocalSearchParams<{ params: string[] }>();

    console.log("[...params]", props) // {"params": ["123", "blocked"]}

    return (
        <View style={styles.container}>
            <Text>Profile params : {props.params}</Text>

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



