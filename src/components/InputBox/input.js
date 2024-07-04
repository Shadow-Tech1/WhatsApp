import { useState } from 'react';
import { View, Text } from 'react-native'
import { TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
 const [newMessage, setNewMessage]= useState('');

  const onSend = () => {
    console.warn('Sending a new message: ', newMessage);
    setNewMessage('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput style={styles.input} 
      value = {newMessage}
        onChange= {text => setNewMessage(text)}
        placeholder="Type a message..." />

      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding:5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,

  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});









export default InputBox;

