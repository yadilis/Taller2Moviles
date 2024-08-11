import React from 'react'
import { StyleSheet } from 'react-native'
import { INPUT_COMPONENT, PRIMARY_COLOR, SECUNDARY_COLOR } from '../commons/contsns'


    export const styles = StyleSheet.create({
      globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 26,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
      },
      contenBody:{
        backgroundColor:SECUNDARY_COLOR
      },
      imputText:{
        backgroundColor:INPUT_COMPONENT,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
      },
      contentInput:{
        marginTop:10,
        gap:14
      },
      button:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:20,
        borderRadius:10,
        marginTop:30
      },
      buttonText:{
        color:SECUNDARY_COLOR,
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
      },
      iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1,
        marginTop:10
      },
      textRedirection: {
        marginTop:30,
        fontSize: 16, 
        color: '#333', 
        textAlign: 'center', 
    },
    highlight: {
        fontWeight: 'bold', 
        color: PRIMARY_COLOR, 
        
    },
    imageContainer: {
  justifyContent: 'center',  
  alignItems: 'center',      
  marginBottom: 10,
  marginLeft: 7,
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 30, 
      resizeMode: 'cover', 
    },
    titleHeaderBody: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'black',
      marginTop:10
  },

    },
      )
    

