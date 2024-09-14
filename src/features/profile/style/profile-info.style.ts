import { StyleSheet } from 'react-native';

export const profileInfoStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 35,
    justifyContent: 'flex-start',
    width: '100%',
  },
  photo: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ababab',
    backgroundColor: '#ababab',
    marginBottom: 20,
  },
  accountInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  accountInfoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
  },
  accountInfoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  accountInfoDesc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  fullName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  profileDescContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  profileAction: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  pressableButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    padding: 5,
    backgroundColor: '#e1e3e1',
    borderRadius: 5,
    width: '50%',
  },
  pressableButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});
