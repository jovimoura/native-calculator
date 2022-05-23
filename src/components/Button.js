import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#505050',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    color: '#FFF'
  },
  clearButton: {
    backgroundColor: '#333'
  },
  operationButton: {
    color: '#FFF',
    backgroundColor: '#FF9500'
  },
  doubleButton: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3
  }
})

export default props => {
  const stylesButton = [styles.button]
  if (props.double) stylesButton.push(styles.doubleButton)
  if (props.triple) stylesButton.push(styles.tripleButton)
  if (props.operation) stylesButton.push(styles.operationButton)
  if (props.clearButton) stylesButton.push(styles.clearButton)
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}
