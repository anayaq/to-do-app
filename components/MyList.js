import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";

const MyList = (props) => {
    return (
        <View style={styles.con}>
            <View style={styles.item}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    con: {  
    marginBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 15,
    },
item: {
    backgroundColor: '#fff', 
    flexDirection: 'row',
    alignItems: 'center',
},
square: {
   width: 20,
   height: 20,
   backgroundColor: '#02ab5c',
   borderRadius: 5,
   marginRight: 10
},
text: {
      maxWidth: '90%'  
},
circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#02ab5c',
    borderRadius: 5
}
});
 
export default MyList;