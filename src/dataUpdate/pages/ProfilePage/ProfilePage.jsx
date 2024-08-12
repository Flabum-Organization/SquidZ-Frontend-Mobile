import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/LayoutsComponents/Header';
import Sidebar from '../components/LayoutsComponents/Sidebar';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';
import AccountDetails from '../components/AccountDetails/AccountDetails';
import { DataUpdateService } from '../services/DataUpdate.service.js';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dataUpdateService = new DataUpdateService();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await dataUpdateService.getUser();
                setUserData(data);
            } catch (error) {
                alert("Error fetching user data:", error);
                setError('There was a problem loading user data.');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#000" />
                <Text style={styles.loadingText}>Loading data...</Text>
            </View>
        );
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    return (
        <View style={styles.profilePage}>
            <Header />
            <Sidebar />
            <View style={styles.profileMain}>
                <View style={styles.profileSection}>
                    <ProfilePicture />
                    <AccountDetails userData={userData} />
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
