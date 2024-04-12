import React from 'react'
import {Text, View, TouchableOpacity,SafeAreaView} from 'react-native'
import Stories from '../../components/Stories/Index'
import Feed from '../../components/Post/components/Feed/Index'

function HomeScreen() {
  return (
    <>
   <SafeAreaView>
    <Stories/>
    <Feed /> 
   </SafeAreaView>
     
    
    </>
  )
}

export default HomeScreen
