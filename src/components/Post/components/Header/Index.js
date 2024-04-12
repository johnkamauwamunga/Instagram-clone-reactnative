import React from 'react'
import { Text,View } from 'react-native'
import ProfilePicture from '../../../ProfilePicture/Index'
import Styles from './Styles'

function Header({imageUri,name}) {
  return (
    <View style={Styles.Container}>
      <ProfilePicture uri={imageUri} size={40}/>
      <Text style={Styles.name}>{name}</Text>
    </View>
  )
}

export default Header
