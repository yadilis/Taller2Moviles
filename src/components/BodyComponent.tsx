import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../../theme/appTheme'

export const BodyComponent = (props:any) => {
    const{ height }= useWindowDimensions();
  return (
<View style={{
    ...styles.contenBody,
    height: height*0.93
    
    }}>
    {props.children}
</View>
  )
}
