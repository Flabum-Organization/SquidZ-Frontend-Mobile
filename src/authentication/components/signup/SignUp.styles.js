import { StyleSheet } from 'react-native';

// Styles for the SignUp component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    backgroundColor: '#FFFFFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpForm: {
    backgroundColor: '#454545',
    width: '70%',
    minWidth: 490,
    minHeight: 800,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.55,
    shadowRadius: 20,
    elevation: 5,
    transform: [{ translateX: -9000 }],
    opacity: 0,
  },
  signUpFormMoveImageTrue: {
    transform: [{ translateX: 0 }],
  },
   logoSquidz: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  inputFullNameContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFull: {
    width: '80%',
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    outlineWidth: 0,
  },
  inputHalf: {
    width: '49%',
  },
  input: {
    width: '100%',
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    outlineWidth: 0,
  },
  
  inputEmail: {
    marginBottom: 10,
  },
  buttonLinkContainer: {
    marginTop: 30,
    height: 50,
    width: '50%',
    backgroundColor: '#6B9AC4',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    fontFamily: 'League Spartan',
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },

  
  signInLink: {
    fontWeight: 'normal',
    color: 'black',
    
    fontWeight: 'bold',
  },
  signInLinkHover: {
    color: '#6B9AC4',
    fontWeight: 'bold',
  },
  invalid: {
    borderColor: 'red',
    borderWidth: 3,
  },
  hideValidMessage: {
    display: 'none',
  },
  validMessage: {
    display: 'flex',
    fontWeight: 'normal',
    marginLeft: 10,
    marginBottom: 10,
    color: '#ff8800',
  },
  // Adjustments for responsive design
  smallScreen: {
    minWidth: '90%',
  },
  mediumScreen: {
    minWidth: '50%',
    position: 'absolute',
    top: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default styles;
