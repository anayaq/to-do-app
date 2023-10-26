import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Keyboard } from 'react-native';
import MyList from './components/MyList';

/*new commit has been created*/
export default function App() {
  const [listitem, addToListItem] = useState();
 const [listitems, addToListItems] = useState([]);

  const displayListItem = () =>{
    Keyboard.dismiss();
    addToListItems([...listitems, listitem]);
    addToListItem(null);
  }
  const clearList = (index) =>{
    let listitemsCopy = [...listitems];
    listitemsCopy.splice(index,1);
    addToListItems(listitemsCopy);

  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
      <Text style={styles.text}>Today's Tasks</Text>
      <View>
        {
         listitems.map((listitem, uniquekey)=>{
         return (
          <TouchableOpacity key={uniquekey} onPress={()=>clearList(uniquekey)}>
            <MyList text={listitem} />
          </TouchableOpacity>
         )
         })
          }
      </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS=='ios' ? 'padding' : 'height'} style={styles.inputview}>
        <TextInput style={styles.input} placeholder={'Enter Task Here'} value={listitem} onChangeText={enteredtext=>addToListItem(enteredtext)}></TextInput>
        <TouchableOpacity style={styles.addbutton} onPress={()=>displayListItem()}>
          <View style={styles.plusback}>
          <Text style={styles.addsign}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1eb34',
    
  },
  wrapper: {
    paddingTop: 81,
    paddingHorizontal: 20,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 20,
    
  },
  inputview: {
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    bottom: 60,
  },
  addbutton: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    marginLeft: 10
  },
  plusback: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#ccdcde',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addsign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    width: '85%',
    padding: 10,
  }
});
