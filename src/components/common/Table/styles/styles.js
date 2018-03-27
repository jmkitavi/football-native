import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#333333',
    width: width,
    alignSelf: 'center',
  },
  tableHeader: {
    height: 30,
    backgroundColor: '#202020',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  tableRow: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  tableList: {
    paddingBottom: 35
  },
  teamDetails: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamPos: {
    fontSize: 12,
    color: 'white',
    width: 18,
    textAlign: 'center',
  },
  teamImage: {
    height: 26,
    width: 26,
  },
  teamName: {
    color: 'white',
    fontSize: 12,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 2,
  },
  tableData: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableSingle: {
    fontSize: 12,
    color: 'white',
    flex: 2,
    textAlign: "center"
  },
  tableDouble: {
    fontSize: 12,
    color: 'white',
    flex: 3,
    textAlign: "center"
  },
})

export default styles
