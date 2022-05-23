import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import Button from './src/components/Button'
import Display from './src/components/Display'

export default function App() {
  const [displayValue, setDisplayValue] = useState('0')

  const clear = () => {
    setDisplayValue("0")
  }

  const addDigit = digit => {
    if (displayValue === '0' || displayValue === '.') setDisplayValue(digit)
    else setDisplayValue(displayValue.concat(digit))
  }

  const backspace = () => {
    if (displayValue == 0) {
      setDisplayValue('0')
    }
    else {
      setDisplayValue(displayValue.slice(0, -1))
    }
  }

  const result = () => {
    setDisplayValue(eval(displayValue).toString())
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button clearButton double onClick={clear} label='AC'/>
        <Button clearButton onClick={backspace} label='C'/>
        <Button operation onClick={() => addDigit('/')} label='/'/>
        <Button onClick={addDigit} label='7'/>
        <Button onClick={addDigit} label='8'/>
        <Button onClick={addDigit} label='9'/>
        <Button operation onClick={() => addDigit('*')} label='x'/>
        <Button onClick={addDigit} label='4'/>
        <Button onClick={addDigit} label='5'/>
        <Button onClick={addDigit} label='6'/>
        <Button operation onClick={() => addDigit('-')} label='-'/>
        <Button onClick={addDigit} label='1'/>
        <Button onClick={addDigit} label='2'/>
        <Button onClick={addDigit} label='3'/>
        <Button operation onClick={() => addDigit('+')} label='+'/>
        <Button onClick={addDigit} double label='0'/>
        <Button onClick={addDigit} label='.'/>
        <Button operation onClick={result} label='='/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
