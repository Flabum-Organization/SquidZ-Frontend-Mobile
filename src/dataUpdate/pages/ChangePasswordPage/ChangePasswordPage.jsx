import {View, Text, StyleSheet, Alert, Image} from "react-native";
import ChangePasswordComponent from '../../components/ChangePassword/ChangePassword.component';

const logoSquidz = require('../../../../assets/squidz.png');

const ChangePasswordPage = () => {
    return (
        <View style={styles.container}>
            <Image source={logoSquidz} style={{ width: 300, height: 300, marginTop: 50 }} />
            <ChangePasswordComponent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default ChangePasswordPage;