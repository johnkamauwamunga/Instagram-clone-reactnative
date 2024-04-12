import React from 'react'
import { Text, Image,View } from 'react-native'
import Styles from './Styles'

function Body({imageUri}) {
  return (
    <View>
      <Image source={{uri:imageUri}} style={Styles.image}/>
    </View>
  )
}

export default Body
