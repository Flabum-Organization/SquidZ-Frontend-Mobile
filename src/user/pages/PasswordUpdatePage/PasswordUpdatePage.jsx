import {View, Text, StyleSheet, Alert} from "react-native";
import {useEffect, useState} from "react";
import {AuthenticationService} from "../../services/Authentication.service";
import UpdatePassword from "../../components/UpdatePassword/UpdatePassword.component";

function UpdatePasswordPage() {
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [details, setDetails] = useState('');

    const handleErrorPassword = async() => {
        Alert.alert('Invalid Password')
    }

    return <div className="update-password">
        <UpdatePassword></UpdatePassword>
    </div>
}