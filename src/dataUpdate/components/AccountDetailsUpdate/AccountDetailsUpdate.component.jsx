import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { DataUpdateService } from '../../services/DataUpdate.service.js';

const AccountDetailsUpdate = ({ userData, navigation }) => {
    const [firstName, setFirstName] = useState(userData?.name?.firstName || '');
    const [lastName, setLastName] = useState(userData?.name?.lastName || '');
    const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber?.number || '');
    const dataUpdateService = new DataUpdateService();

    const handleFormSubmit = async () => {
        try {
            const updatedUserData = {
                name : firstName + ' ' + lastName,
                phoneNumber,
            };
            const response = await dataUpdateService.updateUser(updatedUserData);

            if (response.ok) {
                Alert.alert('Exitoso', 'Datos actualizados correctamente');
                navigation.goBack();
            } else {
                throw new Error('Error actualizando los datos del usuario');
            }
        } catch (error) {
            Alert.alert('Error', 'Error al actualizar los datos del usuario');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombres"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Apellidos"
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}
                />
            </View>
            <View style={styles.formGroup}>
                <TextInput
                    style={styles.input}
                    placeholder="Teléfono (+51)"
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
            </View>
            <View style={styles.formActions}>
                <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
                    <Text style={styles.buttonText}>Guardar cambios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
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
    formActions: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6B9AC4',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
        maxWidth: 200,
    },
    cancelButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center',
        width: '100%',
        maxWidth: 200,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
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
        cancelButton: {
            padding: 12,
            fontSize: 14,
            width: '100%',
        },
    },
});

export default AccountDetailsUpdate;
