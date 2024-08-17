import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454545',
    width: '100%',
    height: '100%',
    alignItems: 'center',  
  },
  
  objectContainer: {
    width: '90%',
    height: 'auto',
    marginBottom: 20,
  },

  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 8,
    paddingLeft: 15,
    fontSize: 13,
    fontWeight: 'bold',
    outline: 'none',
    backgroundColor: '#FFFFFF',
  },

  logoSquidz: {
    marginTop: 100,
    width: 300,
    height: 300,
    marginBottom: 20,
  },

  buttomContainer: {
    marginTop: 20,
    alignItems: 'center',  
  },

  button: {
    height: 65,
    width: 200,
    backgroundColor: '#6B9AC4',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  signUpText: {
    marginTop: 20,
    fontWeight: 'normal',
    color: 'white',
  },

  signUpLink: {
    fontWeight: 'normal',
    color: 'white',
    textDecorationLine: 'underline',
    color: '#6B9AC4',
    fontWeight: 'bold',
  },

  passwordForgotten: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'normal',
    color: '#6B9AC4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
