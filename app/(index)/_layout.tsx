import { Slot } from 'expo-router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SafeAreaView } from 'react-native';

export default function RootLayout() {
    console.log("RootLayout")
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <Slot />
            <Footer />
        </SafeAreaView>
    )
}







