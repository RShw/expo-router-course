import { Slot } from 'expo-router';
import HeaderProfile from '../../components/HeaderProfile';

export default function ProfileLayout() {
    return (
        <>
            <HeaderProfile />
            <Slot />
        </>
    )
}







