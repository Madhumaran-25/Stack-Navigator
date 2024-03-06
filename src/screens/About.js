<<<<<<< HEAD
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:6}} onPress={() => navigation.navigate('Settings')}>
        <Text style={{color:'#fff', fontWeight:'bold'}}>Go To Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

=======
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:6}} onPress={() => navigation.navigate('Settings')}>
        <Text style={{color:'#fff', fontWeight:'bold'}}>Go To Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

>>>>>>> a2d349b4c3df3a26d220d3a7b45f7d8ad41b31ea
export default About;