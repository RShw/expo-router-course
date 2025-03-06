import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TButtonProps = {
    label: string;
    href: string;
}

export const DynamicLink: React.FC<TButtonProps> = ({
    label,
    href,
}) => {

    const onNavigate = () => {

        // Navigate to href
        router.navigate(href);
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onNavigate}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 24,
        paddingHorizontal: 8,
        marginVertical: 4,
        borderRadius: 4,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    }
})








