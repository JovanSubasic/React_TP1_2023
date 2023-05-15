import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Item , ScrollView, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import React , {useState} from 'react';



export default function ItemList({liste, setListe}) {

    const [text, setText] = useState('');

    function addListe() {

        // const newList = liste.concat(text);
        // setListe(newList);
        setListe([...liste, text]);

        setText('');
    }


  return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={(value) => setText(value)}  
            placeholder="Ajouter dans la liste"
        />
        <TouchableOpacity style={styles.button} onPress={addListe}>
            <Text>Add</Text>
        </TouchableOpacity>
    </View>
          
  );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row', // Alignement en ligne
        justifyContent: 'center', // Alignement centré horizontalement
        alignItems: 'center', // Alignement centré verticalement
        margin: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
      },
});
