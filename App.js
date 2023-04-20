import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Item , ScrollView, Button} from 'react-native';
import React , {useState} from 'react';



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
  const [text, setText] = useState('');

  function addListe() {
    
    // const newList = liste.concat(text);
    // setListe(newList);
    setListe([...liste, text])

    setText('');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>
          <Text>Open up </Text>
          <Text style={{fontWeight: 'bold'}}>App.js</Text>
          <Text> to start working on your app!</Text>
        </Text>
        {/* <FlatList
          data={sampleGoals}
          renderItem={({item}) => <Item title={item} />}
          keyExtractor={item => item}
        /> */}
        {liste.map((item) => {
          return (
            <View>
              <Text style={styles.item} key="{item}">{item}</Text>
            </View>
          );
        })}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            value={text}
            onChangeText={(value) => setText(value)}  
            placeholder="Ajouter dans la liste"
            // autoFocus={true}
            // keyboardType="numeric"
          />
          <Button
            color="#2196F3"
            title="Add"
            
            onPress={addListe}
          />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f0f8ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row', // Alignement en ligne
    justifyContent: 'center', // Alignement centré horizontalement
    alignItems: 'center', // Alignement centré verticalement
    margin: 10,
  },
});
