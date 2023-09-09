import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';


export default function App() {
  const [numero, setNumero] = useState('');
  const [vastaus, setVastaus] = useState('Guess a number between 1-100');
  const [arvaukset,setArvaus] = useState(0);
  const [arvattava1,setArvattava] = useState(0);
  const arvattava = (Math.floor(Math.random() * 100) + 1);
  
  const buttonPressed = () => {
    setArvattava(arvattava)
    setArvaus(arvaukset + 1)
    if (numero > arvattava1){
      setVastaus('Your guess ' + numero + ' is too high')
    } else if(numero < arvattava1){
      setVastaus('Your guess ' + numero + ' is too low')
    } else if (numero == arvattava1){
      Alert.alert('you guessed the number in ' + arvaukset + ' guesses');
      setArvaus(0)
    }
    
  }
  return (
    <View style={styles.container}>
      <Text>{vastaus}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={numero => setNumero(numero)} value={numero.toString()}/>
      <Button title='MAKE GUESS' style={styles.button} onPress={() => buttonPressed()}>MAKE GUESS</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniContainer: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: 150,
    color: 'blue',
    borderColor: 'gray',
    borderWidth: 1,
  },
});

/*
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [vastaus, setVastaus] = useState('0');

  const buttonPressedplus = () => {
    setVastaus(parseInt(numero1) + parseInt(numero2))
  }
  const buttonPressedminus = () => {
    setVastaus(numero1 - numero2)
  }
  return (
    <View style={styles.container}>
      <Text>Result:{vastaus}</Text> 
      <StatusBar style="auto" />
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={numero1 => setNumero1(numero1)} value={numero1.toString()}/>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={numero2 => setNumero2(numero2)} value={numero2.toString()}/>
      <View style={styles.miniContainer}>
      <Button title='+' style={styles.button} onPress={() => buttonPressedplus()}>+</Button>
      <Button title='-' style={styles.button} onPress={() => buttonPressedminus()}>-</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniContainer: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    width: 150,
    color: 'blue',
    borderColor: 'gray',
    borderWidth: 1,
  },
});
*/