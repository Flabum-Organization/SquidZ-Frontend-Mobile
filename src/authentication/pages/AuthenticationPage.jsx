import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SignIn } from "../../components/SignIn/SignIn.component";
import { SignUp } from "../../components/SignUp/SignUp.component";
import { AuthenticationService } from "../../services/Authentication.service";

const authenticationService = new AuthenticationService();

export function AuthenticationPage() {
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [details, setDetails] = useState('');

    const handleErrorSignIn = async () => {
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
                throw new Error("Estructura de usuario inválida");
            }
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
            setType('error');
            setMessage("Error al obtener la información del usuario");
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
        <View style={styles.container}>
            <View style={styles.backgroundLayer} />
            <SignUp
                onSignInClick={handleSignInClick}
                errorSignUp={handleErrorSignUp}
                successSignUp={handleSuccessSignUp}
            />
            <SignIn
                onSignUpClick={handleSignUpClick}
                errorSignIn={handleErrorSignIn}
                successSignIn={handleSuccessSignIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    backgroundLayer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    cardAlert: {
        position: 'absolute',
        right: -1000,
        top: 20,
        width: 300,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        borderWidth: 1,
    }
});
