import React, { useEffect, useState } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';
import { SignIn } from '../components/signin/SignIn.component';
import { SignUp } from '../components/signup/SignUp.component';
import { AuthenticationService } from '../services/Authentication.service'
import { styles } from './AuthenticationPage.styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const authenticationService = new AuthenticationService();
const Stack = createStackNavigator();

function AuthenticationPage() {

    const moveCardAlert = async () => {
        // Implement card alert animation
    };

    const handleErroSignIn = async () => {
        setType('warning');
        setMessage('Credenciales incorrectas');
        setDetails('Ingrese su correo y su contraseña correctamente');
        await moveCardAlert();
    };

    const handleSuccessSignIn = async () => {
        try {
            const user = await authenticationService.getUser();
            if (user && user.name && user.name.firstName) {
                setType('success');
                setMessage(`Bienvenido ${user.name.firstName}`);
                setDetails('');
            } else {
                throw new Error("Invalid user structure");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
            setType('error');
            setMessage("Error fetching user information");
            setDetails(error.message);
        }
        await moveCardAlert();
    };

    const handleErrorSignUp = async () => {
        setType('warning');
        setMessage('Datos Incorrectos');
        setDetails('Por favor revise que haya ingresado los datos correctamente');
        await moveCardAlert();
    };

    const handleSuccessSignUp = async () => {
        setType('success');
        setMessage('Registrado con éxito');
        setDetails('');
        await moveCardAlert();
    };

    return (
        <View style={styles.authenticationPage}>
           
           <SignUp 
                errorSignUp={handleErrorSignUp} 
                successSignUp={handleSuccessSignUp} 
            />
        </View>
    );
}

export default AuthenticationPage;
