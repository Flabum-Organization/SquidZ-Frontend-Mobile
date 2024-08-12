import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Animated } from 'react-native';
import styles from './SignIn.styles'; // Asegúrate de que los estilos están correctamente definidos



const SignIn = ({ moveImage, onSignUpClick, erroSignIn, successSignIn, navigation }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formAnim] = useState(new Animated.Value(0)); // Para animación

    useEffect(() => {
        // Configura la animación inicial si es necesario
        Animated.timing(formAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }, []);

    const SignInFormSubmit = async () => {
        setLoading(true);

        try {
            await authenticationService.signIn(email, password);
            successSignIn();
        } catch (error) {
            erroSignIn();
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.signInContainer}>
            <Animated.View style={[styles.signInForm, { opacity: formAnim }]}>
                <Image source={{ uri: 'public/assets/squidz.png' }} style={styles.logoSquidz} />
             
                <View style={styles.inputEmailContainerSignIn}>
                    <TextInput
                        style={styles.emailInputSignIn}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="Correo Electrónico"
                        placeholderTextColor="#808080"
                    />
                </View>

                <View style={styles.inputPasswordContainerSignIn}>
                    <TextInput
                        style={styles.passwordInputSignIn}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholder="Contraseña"
                        placeholderTextColor="#808080"
                    />
                </View>

                <View style={styles.buttomLinkContainerSignIn}>
                    <Button
                        style={styles.buttomLinkSignIn}
                        title={loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                        onPress={SignInFormSubmit}
                        color="#6B9AC4"
                    />
                    <Text style={styles.signUpText}>
                        ¿Aún no tiene una cuenta en SquidZ?{' '}
                        <Text style={styles.signUpLink} onPress={() => navigation.navigate('SignUp')}>
                            Registrarse
                        </Text>
                    </Text>
                    <Text style={styles.passwordForgotten}>Olvidé mi contraseña</Text>
                </View>
            </Animated.View>
        </View>
    );
};

export { SignIn };
