import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';

export default function ModalShow({value , liste, setListe ,index}) {

  const [modalVisible, setModalVisible] = useState(false);

  const [text, setText] = useState(value);
  
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
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          editListe(text);
        }}>
        <View style={styles.centeredView}>
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
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Edit</Text>
      </Pressable>
    </View>
  );  
};

const styles = StyleSheet.create({
  centeredView: {
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
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
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
