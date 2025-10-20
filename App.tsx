import { Spinner } from '@core'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'PlaypenSans-Bold', fontSize: 24, textAlign: 'center' }}>iniciemos el inventario123423478!</Text>
      <Text style={{ fontFamily: 'PlaypenSans-Regular', fontSize: 24, textAlign: 'center' }}>iniciemos el inventario123423478!</Text>
      <Text style={{ fontFamily: 'PlaypenSans-Light', fontSize: 24, textAlign: 'center' }}>iniciemos el inventario123423478!</Text>
      
      <StatusBar style='auto' />
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
