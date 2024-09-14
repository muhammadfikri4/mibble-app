import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  text: {
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    width: 75,
    height: 75,
  },
  icon: {
    width: 75,
    height: 75,
    backgroundColor: 'black',
    borderRadius: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -55,
  },
  iconText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 32,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#000',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    minHeight: 200,
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 30,
  },
  body: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});
