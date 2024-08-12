import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Dimensions, Animated } from 'react-native';
import styles from './SignUp.styles'; 


const SignUp = ({ onSignInClick, errorSignUp, successSignUp, moveImage, navigation  }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
  
    const [nameValid, setNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [telephoneValid, setTelephoneValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [repeatPasswordValid, setRepeatPasswordValid] = useState(true);

    const handleSignUp = async () => {
        setLoading(true);
    
        if (!validateName(name) || !validateName(lastName) || !validateEmail(email) || !validateTelephone(telephone) || !validatePassword(password) || password !== repeatPassword) {
          setLoading(false);
          errorSignUp();
          return;
        }
    
        try {
          // Replace this with your sign-up logic
          // await authenticationService.signUp(name, lastName, email, telephone, password, repeatPassword);
          successSignUp();
          handleSignInClick();
        } catch (error) {
          errorSignUp();
        } finally {
          setLoading(false);
        }
      };

    const handleSignInClick = () => {
        
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'public/assets/squidz.png' }} style={styles.logoSquidz} />
            
            <View style={styles.inputFullNameContainer}>
                <View>
                    <TextInput
                        style={[styles.inputFull, !nameValid && styles.invalid]}
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            setNameValid(validateName(text));
                        }}
                        placeholder="Nombres"
                        placeholderTextColor="#808080"
                    />
                    {!nameValid && <Text style={styles.errorMessage}>Sus nombres no deben tener números ni caracteres especiales</Text>}
                </View>
                <View>
                    <TextInput
                        style={[styles.inputFull, !lastNameValid && styles.invalid]}
                        value={lastName}
                        onChangeText={(text) => {
                            setLastName(text);
                            setLastNameValid(validateName(text));
                        }}
                        placeholder="Apellidos"
                        placeholderTextColor="#808080"
                    />
                    {!lastNameValid && <Text style={styles.errorMessage}>Sus apellidos no deben tener números ni caracteres especiales</Text>}
                </View>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !emailValid && styles.invalid]}
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailValid(validateEmail(text));
                    }}
                    keyboardType="email-address"
                    placeholder="Correo Electronico"
                    placeholderTextColor="#808080"
                />
                {!emailValid && <Text style={styles.errorMessage}>Por favor ingrese su correo electrónico correctamente</Text>}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !telephoneValid && styles.invalid]}
                    value={telephone}
                    onChangeText={(text) => {
                        setTelephone(text);
                        setTelephoneValid(validateTelephone(text));
                    }}
                    keyboardType="numeric"
                    placeholder="Telefono (+51)"
                    placeholderTextColor="#808080"
                />
                {!telephoneValid && <Text style={styles.errorMessage}>Su número de teléfono debe tener 9 dígitos</Text>}
            </View>
                
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !passwordValid && styles.invalid]}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setPasswordValid(validatePassword(text));
                    }}
                    secureTextEntry
                    placeholder="Contraseña"
                    placeholderTextColor="#808080"
                />
                {!passwordValid && <Text style={styles.errorMessage}>Su contraseña debe tener como mínimo 8 dígitos, al menos 1 número y al menos 1 carácter especial</Text>}
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, !repeatPasswordValid && styles.invalid]}
                    value={repeatPassword}
                    onChangeText={(text) => {
                        setRepeatPassword(text);
                        setRepeatPasswordValid(text === password);
                    }}
                    secureTextEntry
                    placeholder="Repetir Contraseña"
                    placeholderTextColor="#808080"
                />
                {!repeatPasswordValid && <Text style={styles.errorMessage}>Las contraseñas deben ser iguales</Text>}
            </View>
            
            <TouchableOpacity style={styles.buttonLinkContainer} onPress={handleSignUp} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff"/> : 
                <Text>Registrarse</Text>}
            </TouchableOpacity>
            
            <View style={styles.signInLinkContainer}>
                <Text>¿Ya tiene una cuenta en SquidZ? </Text>
                
                <Text style={styles.signInLink}  onPress={() => navigation.goBack()}>Iniciar sesión</Text>
               
            </View>

        </View>                
    );
};

export { SignUp };
