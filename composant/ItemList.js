import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Item , ScrollView, Button, SafeAreaView} from 'react-native';
import React , {useState} from 'react';
import ModalShow from './ModalShow';


export default function ItemList({liste, setListe}) {

    

  function deleteListe(index) {

    // console.log(item)
    setListe(liste => liste.filter((item, i) => item !== index));

  }

  return (
    /*
    list.map((item, index) => {
        return (
        <View style={styles.listContainer}>
            <Text key="{index}">{item}</Text>
            <Button
            color="red"
            title="X"
            
            onPress={() => deleteListe(index)}
            />
        </View>
        );
    })*/

    <FlatList  
        data={liste}
        renderItem={({item , index}) => 
            <View style={styles.listContainer}>
                
                <Text key="{item}">{item}</Text>
                <ModalShow setListe={setListe} value={item} liste={liste} index={index}/>
                <Button
                color="red"
                title="X"
                
                onPress={() => deleteListe(item)}
                />
            </View>
        }
        keyExtractor={item => item}
        
    />
          
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#f0f8ff',
    flexDirection: 'row', // Alignement en ligne
    justifyContent: 'center', // Alignement centré horizontalement
    alignItems: 'center', // Alignement centré verticalement
    margin: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});