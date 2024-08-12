import {View, Text, StyleSheet, Alert} from "react-native";
import {useEffect, useState} from "react";
import PasswordUpdateComponent from "../../components/PasswordUpdate/PasswordUpdate.componentt";

const PasswordUpdatePage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Update Password</Text>
            <PasswordUpdateComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
});

export default PasswordUpdatePage;