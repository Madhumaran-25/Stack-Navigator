import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:6}} onPress={() => navigation.navigate('Home')}>
      <Text style={{color:'#fff', fontWeight:'bold'}}>Go To Home</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Contact;