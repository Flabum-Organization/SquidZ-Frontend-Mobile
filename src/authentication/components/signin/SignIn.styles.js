import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signInContainer: {
    backgroundColor: '#FFFFFC',
    width: '100%',
    height: '100%',
  },
  signInForm: {
    backgroundColor: '#454545',
    height: '100%',
    width: '100%',
    minWidth: 490,
    minHeight: 650,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  
  logoSquidz: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  inputEmailContainerSignIn: {
    width: '90%',
    height: 'auto',
    marginBottom: 20,
    
  },

  emailInputSignIn: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 8,
    paddingLeft: 15,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'League Spartan',
    outline: 'none',
    backgroundColor: '#FFFFFF',
  },

  passwordInputSignIn: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: 8,
    paddingLeft: 15,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'League Spartan',
    outline: 'none',
    backgroundColor: '#FFFFFF',
  },

  inputPasswordContainerSignIn: {
    width: '90%',
    height: 'auto',
  },

  
  buttomLinkContainerSignIn: {
    marginTop: 40,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 20,
  },

  buttomLinkSignIn: {
    height: 50,
    width: '100%',
    backgroundColor: '#6B9AC4',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'League Spartan',
    color: 'white',
  },
  
  signUpText: {
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
