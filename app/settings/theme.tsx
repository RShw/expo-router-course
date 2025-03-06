import { StyleSheet, Text, View } from "react-native";
import { CustomLink } from "../../components/CustomLink";

export default function Theme() {
    return (
        <View style={styles.container}>
            <Text>Theme</Text>

            {/* Go to /app/settings/theme screen */}
            <CustomLink
                label="Go back"
                href="../"
            />
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



