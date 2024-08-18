import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { DataUpdateService } from '../../services/DataUpdate.service';

const ChangePasswordComponent = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const dataUpdateService = new DataUpdateService();

    const handleUpdatePassword = async () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'New password and confirmation do not match.');
            return;
        }
        setLoading(true);
        try {
            await dataUpdateService.updatePassword(currentPassword, newPassword);
            Alert.alert('Success', 'Password updated successfully.');
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Current Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                value={currentPassword}
                onChangeText={setCurrentPassword}
            />
            <Text style={styles.label}>New Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <Text style={styles.label}>Confirm New Password</Text>
            <TextInput
                secureTextEntry
                style={styles.input}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <Button 
                title={loading ? 'Updating...' : 'Update Password'} 
                onPress={handleUpdatePassword} 
                disabled={loading}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 16,
        borderRadius: 4,
    },
});

export default ChangePasswordComponent;