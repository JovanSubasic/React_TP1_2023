import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Item , ScrollView, Button, SafeAreaView, ImageBackground} from 'react-native';
import React , {useState} from 'react';
import ItemList from './composant/ItemList';
import InputAdd from './composant/InputAdd';



export default function App() {

  const sampleGoals = [
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Montaer à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ];
  
  const [liste, setListe] = useState(sampleGoals);
  

  // const image = {uri: 'https://reactjs.org/logo-og.png'};
  const image = {uri: 'data:image/jpeg;base64,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'};

  return (
    <ImageBackground source={image} resizeMode="cover" >
      <SafeAreaView >
        <ScrollView>
          <Text style={styles.text}>
            <Text>Open up </Text>
            <Text style={{fontWeight: 'bold'}}>App.js</Text>
            <Text> to start working on your app!</Text>
          </Text>

          <ItemList list={liste} setListe={setListe}/>

          <InputAdd list={liste} setListe={setListe}/>
          
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
  
});
