import {View, Text, StyleSheet, Alert} from "react-native";
import {PasswordUpdateComponent} from '../../components/PasswordUpdate/PasswordUpdate.component';

const PasswordUpdatePage = () => {
    return (
        <View style={styles.container}>
            <PasswordUpdateComponent />
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

export default PasswordUpdatePage;