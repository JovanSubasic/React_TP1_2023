import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button, TouchableOpacity} from 'react-native';

export default function ModalShow({value , liste, setListe ,index}) {

  const [modalVisible, setModalVisible] = useState(false);

  const [text, setText] = useState(value);
  
  function deleteListe(index) {

    setListe(liste => liste.filter((item, i) => item !== index));

  }
  
  function editListe(newText) {

    /*
    liste.map((item, index) => {
      // console.log('newText :', item);
      if(value == item) liste[index] = newText ;
    })*/

    const newListe = [...liste]; 
    newListe[index] = newText; 
    setListe(newListe); 
    
    console.log('newList :', liste);

    setModalVisible(!modalVisible);

  }

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.centeredView}>

      <Text key="{value}">{value}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          editListe(text);
        }}>

        <View style={styles.centeredViewModal}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={(value) => setText(value)}  
              placeholder="Ajouter dans la liste"
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => editListe(text)}>
              <Text style={styles.textStyle}>Edit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Button
        color="red"
        title="X"
        
        onPress={() => deleteListe(value)}
        />

    </TouchableOpacity>
  );  
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: '#f0f8ff',
    flexDirection: 'row', // Alignement en ligne
    justifyContent: 'center', // Alignement centré horizontalement
    alignItems: 'center', // Alignement centré verticalement
    margin: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  button: {
    borderRadius: 20,
    padding: 5,
  },
  buttonOpen: {
    backgroundColor: '#daa520',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
  },
});
