import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/user-icon.png';
import cartIcon from '../../assets/images/cart-icon.png';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Image source={logo} style={styles.headerLogo} />
            </View>
            <View style={styles.headerCenter}>
                <Text style={styles.headerTitle}>SQUIDZ</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity>
                    <Image source={userIcon} style={styles.headerIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={cartIcon} style={styles.headerIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 75,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        zIndex: 1000,
        position: 'relative',
    },
    headerLeft: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 180,
    },
    headerLogo: {
        height: 50,
        resizeMode: 'contain',
    },
    headerCenter: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'League Spartan, sans-serif',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        width: 30,
        height: 30,
        marginLeft: 20,
        resizeMode: 'contain',
    },
});

export default Header;
