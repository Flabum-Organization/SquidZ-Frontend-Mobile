import { StyleSheet } from 'react-native';

// Styles for the SignUp component
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',  
  },
  
  logoSquidz: {
    marginTop: 60,
    width: 250,
    height: 250,
    marginBottom: 30,
  },

  objectContainer: {
    width: '90%',
    height: 'auto',
  
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputContainer: {
    flex: 1,
    marginHorizontal: 22,
  },

  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    paddingLeft: 15,
    fontSize: 13,
    fontWeight: 'bold',
    outline: 'none',
    backgroundColor: '#F3F0F0',
    marginBottom: 15,
  },

  invalid: {
    borderWidth: 3,
    borderColor: 'red',
  },

  validMessage: {
    display: 'flex',
    fontWeight: 'normal',
    marginLeft: 10,
    marginBottom: 10,
    color: '#ff8800',
  },

  passwordForgotten: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  buttomContainer: {
    marginTop: 5,
    alignItems: 'center',  
  },

  button: {
    height: 50,
    width: 200,
    backgroundColor: '#6B9AC4',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',  
  },

  signUpText: {
    marginTop: 20,
    fontWeight: 'normal',
    color: 'white',
  },

  signUpLink: {
    fontWeight: 'normal',
    color: 'black',
    textDecorationLine: 'underline',
    
    fontWeight: 'bold',
  
  },
});

export default styles;
