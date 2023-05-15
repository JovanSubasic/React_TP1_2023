import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Item , ScrollView, Button, SafeAreaView} from 'react-native';
import React , {useState} from 'react';
import ModalShow from './ModalShow';


export default function ItemList({liste, setListe}) {

    


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
        scrollEnabled={false}
        renderItem={({item , index}) => 
            <View >
                <ModalShow setListe={setListe} value={item} liste={liste} index={index}/>
            </View>
        }
        keyExtractor={item => item}
        
    />
          
  );
}

const styles = StyleSheet.create({
});
