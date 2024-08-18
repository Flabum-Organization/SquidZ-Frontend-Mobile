import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AccountDetails from '../components/AccountDetails/AccountDetails';

const ProfilePage = () => {
    return (
        <View style={styles.profilePage}>
            <View style={styles.profileMain}>
                <View style={styles.profileSection}>
                    <AccountDetails />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profilePage: {
        backgroundColor: '#c6c6c6',
        minHeight: '100vh',
    },
    profileMain: {
        paddingTop: 40,
        paddingLeft: 160,
        paddingRight: 80,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
    },
    profileSection: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 20,
        fontSize: 18,
        color: '#333',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    '@media (max-width: 768px)': {
        profileMain: {
            padding: 20,
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
});

export default ProfilePage;
