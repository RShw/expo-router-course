import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HeaderProfile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>HeaderProfile Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'salmon',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    }
})

export default HeaderProfile









