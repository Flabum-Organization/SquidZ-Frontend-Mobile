import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { DataUpdateService } from '../../services/DataUpdate.service.js';
import AccountDetailsUpdate from '../AccountDetailsUpdate/AccountDetailsUpdate.jsx';

const AccountDetails = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const dataUpdateService = new DataUpdateService();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await dataUpdateService.getUser();
                setUserData(data);
            } catch (error) {
                Alert.alert('Error', 'Failed to fetch user data.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleConfirmEdit = (updatedUserData) => {
        setUserData((prevData) => ({
            ...prevData,
            name: {
                firstName: updatedUserData.firstName,
                lastName: updatedUserData.lastName,
            },
            phoneNumber: {
                ...prevData.phoneNumber,
                number: updatedUserData.phoneNumber.number,
            }
        }));
        setIsEditing(false);
    };

    if (loading) {
        return <Text>Loading data...</Text>;
    }

    if (isEditing) {
        return (
            <AccountDetailsUpdate
                userData={{
                    ...userData,
                    phoneNumber: {
                        ...userData.phoneNumber,
                        number: String(userData.phoneNumber.number) // Convert to string
                    }
                }}
                onCancel={handleCancelEdit}
                onConfirm={handleConfirmEdit}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Details</Text>
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={userData.name.firstName}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={userData.name.lastName}
                    editable={false}
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={userData.emailAddress.address}
                    editable={false}
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Phone (+51)"
                    value={userData.phoneNumber.number}
                    editable={false}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleEditClick}>
                <Text style={styles.buttonText}>Actualizar Datos</Text>
            </TouchableOpacity>
            <Text style={styles.passwordLink}>
                <Text onPress={() => { /* add action to change password */ }}>
                    Quiere cambiar su contraseña?
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center',
    },
    title: {
        marginTop: 0,
        marginBottom: 5,
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        fontFamily: "League Spartan, sans-serif",
    },
    formGroup: {
        marginBottom: 20,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        fontSize: 14,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#6B9AC4',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
    passwordLink: {
        fontSize: 14,
        color: '#333',
        marginTop: 20,
        textAlign: 'left',
    },
    '@media (max-width: 768px)': {
        container: {
            maxWidth: '100%',
        },
        input: {
            fontSize: 16,
        },
        button: {
            padding: 12,
            fontSize: 14,
            width: '100%',
        },
    },
});

export default AccountDetails;