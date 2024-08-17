import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Animated} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import styles from './SignIn.styles';

export function SignIn ()  {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const insets = useSafeAreaInsets();

    const handleSignUp = async () => {
        setLoading(true);

        if (!validateName(name) || !validateName(lastName) || !validateEmail(email) || !validateTelephone(telephone) || !validatePassword(password) || password !== repeatPassword) {
            setLoading(false);
            errorSignUp();
            return;
        }

        try {
            await authenticationService.signUp(name, lastName, email, telephone, password, repeatPassword);
            successSignUp();
            onSignInClick();
        } catch (error) {
            errorSignUp();
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <View style={styles.container}>
                <Image
                    source={require('../../../../assets/squidz.png')} // Ruta relativa
                    style={styles.logoSquidz}
                />

                <View style={styles.objectContainer}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Correo Electrónico"
                        placeholderTextColor="#808080"
                    />
                </View>

                <View style={styles.objectContainer}>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder="Contraseña"
                        placeholderTextColor="#808080"
                    />
                </View>
                
                <View style={styles.buttomContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => console.log('Boton presionado :D')}>
                        <Text style={styles.buttonText}>
                            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.signUpText}>
                        ¿Aún no tiene una cuenta en SquidZ?{' '}
                        <Link href= "/register">
                            <Text style={styles.signUpLink}>
                                Registrarse
                            </Text>
                        </Link>
                    </Text>
                    <Text style={styles.passwordForgotten}>Olvidé mi contraseña</Text>
                </View>

                
            </View>        
        </View>
    );
};

