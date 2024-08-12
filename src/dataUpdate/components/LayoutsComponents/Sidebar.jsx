import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import { FaBars, FaHome, FaCalendarAlt, FaBox, FaSignOutAlt } from 'react-icons/fa';
import { SignOutService } from '../../../share/service/SignOut.service.js';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = async () => {
        try {
            const signOutService = new SignOutService();
            await signOutService.signOut();

            Alert.alert("Success", "Successfully signed out");
            // Here, you can use navigation or any method to refresh the page in React Native
        } catch (error) {
            Alert.alert("Error", "Error signing out. Please try again.");
        }
    };

    return (
        <>
            <TouchableOpacity style={styles.sidebarToggle} onPress={toggleSidebar}>
                <FaBars />
            </TouchableOpacity>
            <View style={[styles.sidebar, isCollapsed && styles.collapsed]}>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <FaHome />
                        {!isCollapsed && <Text style={styles.menuLink}>Home</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <FaCalendarAlt />
                        {!isCollapsed && <Text style={styles.menuLink}>Reservations</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <FaBox />
                        {!isCollapsed && <Text style={styles.menuLink}>Products</Text>}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.logout} onPress={handleLogout}>
                    <FaSignOutAlt />
                    {!isCollapsed && <Text style={styles.logoutText}>Sign Out</Text>}
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        width: 160,
        backgroundColor: '#333',
        color: '#fff',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        transition: 'transform 0.3s ease, width 0.3s ease',
        overflow: 'hidden',
        zIndex: 1100,
        justifyContent: 'space-between',
    },
    collapsed: {
        width: 60,
    },
    sidebarToggle: {
        position: 'absolute',
        top: 15,
        left: 15,
        fontSize: 24,
        cursor: 'pointer',
        padding: 10,
        zIndex: 1200,
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 4,
        display: 'none', // Only show in mobile, but here kept for mobile styling
    },
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        marginBottom: 20,
        alignItems: 'center',
    },
    menuLink: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        transition: 'color 0.3s ease',
        whiteSpace: 'nowrap',
    },
    logout: {
        marginBottom: 20,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
    },
    '@media (max-width: 768px)': {
        sidebar: {
            width: Dimensions.get('window').width - 40, // Adjust to screen width
            transform: 'translateX(-100%)',
        },
        collapsed: {
            transform: 'translateX(0)',
        },
        sidebarToggle: {
            display: 'flex',
        },
    },
});

export default Sidebar;
