import React from 'react'
import { FlatList } from 'react-native'
import Post  from '../Index'

const data=[
{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg',
  caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},
{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://reallifedinner.com/wp-content/uploads/2021/05/Brownie_Oreo_Ice_Cream_Cake_4.jpg',
  caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},
{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://irepo.primecp.com/2015/06/223330/Bacon-and-Egg-Breakfast-Grilled-Cheese_ExtraLarge700_ID-1029586.jpg?v=1029586',
  caption: 'Doha City #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},
// from here
{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://howtobecabincrew.com/wp-content/uploads/2016/09/qatar-airways-stewardese-3-2.jpg',
  caption: 'Cabin Crew #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},
{
  user: {
    imageUri: 'https://recipes.net/wp-content/uploads/2020/03/classic-sunny-side-up-eggs-with-bacon-and-pancakes-recipes.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://qatarofw.com/wp-content/uploads/2019/07/Qatar-Airways-Cabin-Crew-How-Much-Do-They-Make-3.jpg',
  caption: 'Spirit of the skies #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},
{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://adventureholidays.co.ke/wp-content/uploads/2021/11/DSC_7456-copy.jpg',
  caption: 'Nature at its best #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},

{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://www.travelandleisure.com/thmb/L17tdbwPEJH9E1wmCpqozrG5C9k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/glass-bottom-bridge-china-GBOTTOM0920-892633ead1f34931afbeabc623c34435.jpg',
  caption: 'Scare the hell out of you #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},

{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0ca68d42-fc09-11e9-a4b4-b816768ca711.jpg?crop=1500%2C1000%2C0%2C0',
  caption: 'Spirit of ... #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},

{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://adventureholidays.co.ke/wp-content/uploads/2021/11/DSC_7456-copy.jpg',
  caption: 'Nature at its best #astrocommunity #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},

{
  user: {
    imageUri: 'https://www.instyle.com/thmb/6ueTPAsYVYKZoaJLl0vabTLuoXo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/080323-Jennifer-Lopez-Social-9fe4ee0e5f6f478abaa0d345df003701.jpg',
    name: 'jennifer lopez'
  },

  imageUri:'https://static.toiimg.com/thumb/69504332.cms?resizemode=75&width=1200&height=900',
  caption: 'Safari africa #april.kisha #johnniey.mwangi #Thomas',
  likecount: '137M',
  posted: '6 min ago'
},

]
function Feed() {
  return (
    <FlatList
    data={data}
    renderItem={({item})=> <Post post={item} />}
    />
 
  )
}

export default Feed
