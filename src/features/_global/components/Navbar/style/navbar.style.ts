import { StyleSheet } from 'react-native';

export const navbarStyle = StyleSheet.create({
  container: {
    right: 0,
    left: 0,
    // width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  subcontainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 65,
    position: 'relative',
    bottom: 50,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  menuItem: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    color: '#fff',
    fontSize: 12,
  },
});
