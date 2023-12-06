import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal';


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset[Math.floor(Math.random() * n)]
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.Button} onPress={generatePassword}>
        <Text style={styles.TextButton}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F3F3FF"
  },
  logo: {
    marginBottom: 60
  },
  area: {
    marginTop: 14,
    marginBottom: 14, // Corrigido o nome da propriedade
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 8,
  },
  Button: {
    width: "80%",
    height: 50,
    backgroundColor: "#392de9",
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextButton: {
    color: "#fff",
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
