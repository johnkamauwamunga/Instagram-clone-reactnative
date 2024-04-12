import React from 'react'
import Header from './Header/Index'
import Body from './Body/Index'
import Footer from './Footer/Index'
import { View } from 'react-native'


function Post({post}) {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name}/>
      <Body imageUri={post.imageUri} />
      <Footer 
       likecount={post.likecount}
       caption={post.caption}
       posted={post.posted}
      />
    </View>
  )
}

export default Post
