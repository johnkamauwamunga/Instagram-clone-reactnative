import React from 'react'
import {Text, View, TouchableOpacity,Image} from 'react-native'
import ProfilePicture from '../ProfilePicture/Index'
import Styles from './Styles'


function Story({imageUri, name}) {
  return (
    <View>
      <ProfilePicture uri={imageUri}/>
      <Text style={Styles.name}>{name}</Text>
    </View>
  )
}

export default Story
