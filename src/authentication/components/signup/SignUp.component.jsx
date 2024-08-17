import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import styles from './SignUp.styles'; 

export function SignUp () {
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

    const insets = useSafeAreaInsets();

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => {
      const minLength = /.{8,}/;
      const hasNumber = /[0-9]/;
      const hasSpecialChar = /[!@#$%^&*]/;
      return minLength.test(password) && hasNumber.test(password) && hasSpecialChar.test(password);
    };
    const validateTelephone = (telephone) => /^\d{9}$/.test(telephone);

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

                <View style={styles.row}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, !nameValid && styles.invalid]}
                            value={name}
                            onChangeText={(text) => {
                                setName(text);
                                setNameValid(validateName(text));
                            }}
                            placeholder="Nombres"
                            placeholderTextColor="#808080"
                        />
                        {!nameValid && <Text style={styles.validMessage}>Sus nombres no deben tener números ni caracteres especiales</Text>}
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.input, !lastNameValid && styles.invalid]}
                            value={lastName}
                            onChangeText={(text) => {
                                setLastName(text);
                                setLastNameValid(validateName(text));
                            }}
                            placeholder="Apellidos"
                            placeholderTextColor="#808080"
                        />
                        {!lastNameValid && <Text style={styles.validMessage}>Sus apellidos no deben tener números ni caracteres especiales</Text>}
                    </View>
                </View>

                <View style={styles.objectContainer}>
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
                    {!emailValid && <Text style={styles.validMessage}>Por favor ingrese su correo electrónico correctamente</Text>}
                </View>

                <View style={styles.objectContainer}>
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
                        maxLength={9}
                    />
                    {!telephoneValid && <Text style={styles.validMessage}>Su número de teléfono debe tener 9 dígitos</Text>}
                </View>
                    
                <View style={styles.objectContainer}>
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
                    {!passwordValid && <Text style={styles.validMessage}>Su contraseña debe tener como mínimo 8 dígitos, al menos 1 número y al menos 1 carácter especial</Text>}
                </View>

                <View style={styles.objectContainer}>
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
                    {!repeatPasswordValid && <Text style={styles.validMessage}>Las contraseñas deben ser iguales</Text>}
                </View>

                <View style={styles.buttomContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleSignUp} disabled={loading}>
                        {loading ? <ActivityIndicator color="#fff"/> : 
                        <Text>Registrarse</Text>}
                    </TouchableOpacity>

                    <View style={styles.signUpText}>
                        <Text>¿Ya tiene una cuenta en SquidZ? </Text>
                        <Link href= "/">
                            <Text style={styles.signUpLink}>
                                Iniciar sesión
                            </Text>
                        </Link>
                    </View>
                </View> 

            </View>        
        </View>
    );
};


