import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/appTheme'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface Props {
    placeholder:string;
    handleSetValue:(name:string,value:string)=> void;
    name:string;
    isPassword?: boolean;
    hasIcon?: boolean;
    sethiddenPaswword?:() => void;
}
export const InputComponents = ({placeholder,handleSetValue,name,isPassword=false, hasIcon=false, sethiddenPaswword  }:Props ) => {
    return (
        <View>
            
            {
                (hasIcon)
                        
            ? <Icon 
            name='visibility' 
            size={25}
            onPress={sethiddenPaswword}
            style={styles.iconPassword}/>
        :null
        }

            
   
      
    <TextInput
    placeholder={placeholder}
    keyboardType='default'
    onChangeText={(value) => handleSetValue(name,value)}
    secureTextEntry={isPassword}
    style={styles.imputText}
    />
      </View>
    )
}
