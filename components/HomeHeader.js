import { View, Text, Image, TextInput } from 'react-native'

import { COLORS, SHADOWS, SIZES, FONTS, assets } from '../constants'

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{ width: 95, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image 
            source={assets.person03}
            resizeMode='contain'
            style={{ width: "100%", height: "100%" }}
          />
          <Image 
            source={assets.badge}
            resizeMode='contain'
            style={{ position: 'absolute', right: 0, bottom: 0, width: 15, height: 15 }}
          />
        </View>
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text style={{fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white}}>Hello Joseph 👋</Text>
        <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2}}>
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{marginTop: SIZES.font}}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.gray,
          borderRadius: SIZES.font,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}>
          <Image 
            source={assets.search}
            resizeMode='contain'
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput 
            style={{flex: 1}}
            placeholder='Search NFTs'
            onChangeText={onSearch}
          />
        </View>
      </View>

      
    </View>
  )
}

export default HomeHeader
