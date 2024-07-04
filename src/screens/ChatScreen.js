import { useEffect } from "react";
import { ImageBackground, StyleSheet,FlatList, KeyboardAvoidingView, Platform } from "react-native";
import Message from "../components/Message";
import InputBox from "../components/InputBox/input";
import { useRoute, useNavigation } from '@react-navigation/native';
import bg from "../../assets/images/BG.png";
import messages from '../../assets/data/messages.json'



const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

useEffect(() => {
  navigation.setOptions({ title: route.params.name });
}, [route.params]);


  return (
    <KeyboardAvoidingView
    
    style={styles.bg}
  >
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={{ padding: 10 }}
        inverted
      />

      <InputBox />
    </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
});

export default ChatScreen;