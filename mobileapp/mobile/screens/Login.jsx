// mobile/screens/LoginScreen.js
import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      const token = await userCred.user.getIdToken()

      const res = await fetch('http://192.168.8.187:5000/api/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (data.role === "admin") {
        navigation.navigate('Dashboard', { role: 'admin', data })
      } else {
        navigation.navigate('Dashboard', { role: 'user', data })
      }
    } catch (err) {
      console.error(err)
      Alert.alert('Login failed', err.message)
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}
