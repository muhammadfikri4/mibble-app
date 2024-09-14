import { StyleSheet } from 'react-native';

export const homeContentStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  profile: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10000,
  },
  profileName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  threadContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    width: '80%',
  },
  threadBody: {
    color: 'black',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '300',
  },
});
