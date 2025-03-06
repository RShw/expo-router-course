import { StyleSheet, Text, View } from "react-native";
import { DynamicLink } from "../components/DynamicLink";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>

            {/* Go to /app/settings/index.tsx screen */}
            <DynamicLink
                label="Go to Settings"
                href="/settings"
            />


            {/* Go to /app/settings/index.tsx screen */}
            <DynamicLink
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



