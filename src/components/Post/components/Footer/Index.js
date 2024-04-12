import React from 'react'
import { Text,View } from 'react-native'
import Styles from './Styles'

function Footer({likecount,caption,posted}) {
  return (
    <View>
      <Text style={Styles.likes}>{likecount} likes</Text>
      <Text style={Styles.caption}>{caption}</Text>
      <Text style={Styles.posted}>{posted}</Text>
    </View>
  )
}

export default Footer
