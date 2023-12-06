import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import	{ Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';


export function PasswordItem({ data, removePassword }) {
  const [noShow, setShow] = useState(true);

  const handlePass = () => {
    setShow(!noShow);
  };

  const displayText = noShow
    ? data.split('').map(() => '*').join('')
    : data;
    
  async function HandleCopyPassword(){
    await Clipboard.setStringAsync(data)
    alert ("Senha copiada para área de transferência")
 
}
  return (
    <View>
      <Pressable onPress={HandleCopyPassword} onLongPress={removePassword} style={styles.container}>
        <Text style={styles.text}>{displayText}</Text>
        <TouchableOpacity onPress={handlePass}>
          <Ionicons id='eye1' name={noShow ? 'eye-off-outline' : 'eye-outline'} style={{ color: '#FFF', fontSize: 20 }} />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width:"100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text:{
        color: "#FFF"
    }
})