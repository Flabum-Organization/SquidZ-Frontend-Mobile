import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    authenticationPage: {
        backgroundColor: '#FFFFFC',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 900,
        position: 'relative',
        overflow: 'hidden',
    },
    backgroundAuthenticationImage: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        resizeMode: 'cover',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.55,
        shadowRadius: 25,
        elevation: 5,
    },
    backgroundLayerAuthenticationImage: {
        position: 'absolute',
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.15,
    },
});
