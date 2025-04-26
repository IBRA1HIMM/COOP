// mobile/screens/DashboardScreen.js
import React from 'react'
import { View, Text } from 'react-native'

export default function Dashboard({ route }) {
  const { role, data } = route.params

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome, {role}!</Text>
      <Text style={{ marginTop: 10 }}>{JSON.stringify(data, null, 2)}</Text>
    </View>
  )
}
