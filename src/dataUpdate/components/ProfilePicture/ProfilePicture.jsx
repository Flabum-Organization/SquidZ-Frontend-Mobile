import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import defaultProfile from '../../assets/images/default-profile.png';

const ProfilePicture = () => {
    return (
        <View style={styles.profilePicture}>
            <Text style={styles.profileTitle}>Profile Picture</Text>
            <View style={styles.profileContainer}>
                <Image source={defaultProfile} style={styles.profileImage} />
            </View>
            <TouchableOpacity style={styles.profileButton}>
                <Text style={styles.profileButtonText}>Upload New Image</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    profilePicture: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
        maxWidth: 350,
        height: '100%',
        maxHeight: 350,
        marginHorizontal: 'auto', // Centrar horizontalmente
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileTitle: {
        marginTop: 0,
        fontSize: 18,
        color: '#333',
        fontFamily: 'League Spartan, sans-serif',
    },
    profileContainer: {
        justifyContent: 'center',
        marginVertical: 20,
    },
    profileImage: {
        borderRadius: 50,
        height: 100,
        width: 100,
        resizeMode: 'cover', // Asegura que la imagen se ajuste bien al contenedor
    },
    profileButton: {
        backgroundColor: '#6B9AC4',
        color: '#000000',
        borderWidth: 0,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        cursor: 'pointer',
        transitionDuration: '0.3s',
        whiteSpace: 'nowrap',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileButtonText: {
        color: '#000000',
        fontSize: 16,
    },
    profileButtonHover: {
        backgroundColor: '#0056b3',
    },
    '@media (max-width: 768px)': {
        profilePicture: {
            width: '100%',
            maxWidth: 'none',
        },
        profileImage: {
            height: 80,
            width: 80,
        },
        profileButton: {
            paddingVertical: 12,
            fontSize: 14,
            whiteSpace: 'normal',
            width: 'auto',
        },
    },
});

export default ProfilePicture;
