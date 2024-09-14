import { StyleSheet } from 'react-native';

export const sectionThreadStyle = StyleSheet.create({
  section: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 10,
  },
  subsection: {
    borderBottomColor: '#4c4d4c',
    borderStyle: 'solid',
    paddingBottom: 15,
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
  activtyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  activityText: {
    color: 'black',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '600',
  },
  'border-b-0-2': {
    borderBottomWidth: 0.2,
  },
  'border-b-0': {
    borderBottomWidth: 0,
  },
  'margin-b-0': {
    marginBottom: 0,
  },
  'margin-b-120': {
    paddingBottom: 120,
  },
  profileTime: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
  time: {
    color: '#ababab',
    fontSize: 12,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
