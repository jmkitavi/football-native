import { StyleSheet, Dimensions } from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#333333',
    width: width,
    alignSelf: 'center',
  },
  tableHeader: {
    backgroundColor: '#202020',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  tableList: {
    paddingBottom: 35
  },
  tableRow: {
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  tableData: {
    flex: 1,
    flexDirection: 'row',
  },
  tableSingle: {
    fontSize: 12,
    color: 'white',
    width: 25,
    textAlign: "center"
  },
  tableDouble: {
    fontSize: 12,
    color: 'white',
    width: 40,
    textAlign: "center"
  },
  tablePos: {
    fontSize: 12,
    color: 'white',
    width: 18,
    textAlign: 'center',
  },
  tableName: {
    fontSize: 12,
    color: 'white',
    width: 150
  },
})

export default styles
