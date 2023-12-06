import React from "react";
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from "../../hooks/useStorage";

export function ModalPassword({password, handleClose}){
    const {saveItem} = useStorage();

    async function HandleCopyPassword(){
    await Clipboard.setStringAsync(password)
    await saveItem("@pass", password)
    alert ("Senha salva com sucesso!")
    handleClose();
}

    return(
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.contentText}> 
        Senha gerada
        </Text>
        <Pressable style={styles.innerPassword} onLongPress={HandleCopyPassword}>
            <Text style={styles.text}>
            {password}
            </Text>
        </Pressable>      
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText} onPress={handleClose}>Voltar</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={HandleCopyPassword}>
             <Text style={styles.buttonSaveText}>salvar senha</Text>   
            </TouchableOpacity>
        </View>
        </View>
    </View>
    )    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        width: '80%',
        backgroundColor: '#fff',
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#000'
    },
    innerPassword:{
        backgroundColor: '#0E0E0E',
        width: '90%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,

    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '900'
    },
    buttonArea:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 8
    },
    button:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        borderRadius: 15,
        padding: 10
    },
    buttonSave:{
        backgroundColor: '#392de9'
    },
    buttonSaveText:{
        color: '#fff',
        fontWeight:'bold'
    }
})