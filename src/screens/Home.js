import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

  const navigation = useNavigation();


  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:6}} onPress={() => navigation.navigate('About')}>
        <Text style={{color:'#fff', fontWeight:'bold'}}>Go To About</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;