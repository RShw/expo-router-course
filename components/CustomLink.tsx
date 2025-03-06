import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type TButtonProps = {
    label: string;
    href: string;
}

export const CustomLink: React.FC<TButtonProps> = ({
    label,
    href,
}) => {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.container}>
                <Text>{label}</Text>
            </TouchableOpacity>
        </Link>
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








