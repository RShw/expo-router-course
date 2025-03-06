import { StyleSheet, Text, View } from "react-native";
import { CustomLink } from "../components/CustomLink";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>

            {/* Go to /app/settings/index.tsx screen */}
            <CustomLink
                label="Go to Settings"
                href="/settings"
            />


            {/* Go to /app/settings/index.tsx screen */}
            <CustomLink
                label="Go to Profile"
                href="/profile"
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



