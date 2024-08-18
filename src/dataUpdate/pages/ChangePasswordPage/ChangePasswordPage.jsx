import {View, Text, StyleSheet, Alert, Image} from "react-native";
import {ChangePasswordComponent} from '../../components/ChangePassword/PasswordUpdate.component';
import { StatusBar } from "expo-status-bar";

const logoSquidz = require('../../../../assets/squidz.png');

const ChangePasswordPage = () => {
    return (
        <View style={styles.container}>
            <Image source={logoSquidz} style={{ width: 300, height: 300, marginTop: 100 }} />
            <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
});

export default ChangePasswordPage;