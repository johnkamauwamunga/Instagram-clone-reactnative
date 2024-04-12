import React from 'react'
import {Text, View, TouchableOpacity,Image} from 'react-native'
import Styles from './Styles'


function ProfilePicture({uri,size  = 70}) {
  return (
    <View style={[Styles.Container,{width:size + 6,height:size + 6}]}>
      <Image source={{uri: uri}}
      style={[Styles.Image,{width:size,height:size}]}
      />

    </View>
  )
}

export default ProfilePicture
