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
  contentCard:{
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    borderStyle:'solid',
    borderColor:'black',
    borderWidth:1,
    marginBottom:15
  },
  titleCard:{
    fontWeight:'bold',
    color:'black',
    fontSize:15
  },
  imageCard:{
    width:90,
    height:90


  },
  iconsCard:{
    flex:1,
    alignItems:'flex-end'

  },
  contentPrincipal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',


  },

  contentModal:{
    padding: 25,
    backgroundColor: SECUNDARY_COLOR,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
  },
  shadowOpacity: 0.25, 
    shadowRadius: 4,    
    elevation: 6,       
    borderWidth: 3,     
    borderColor: 'rgba(155, 89, 182, 0.9)',       
    margin: 10,  
  
  },

  shadowStyle: {
    shadowColor: '#000',  
    shadowOffset: {
        width: 0,     
        height: 2,   
    },
          
},
headModal: {
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomColor: '', 
  borderBottomWidth: 1,
  padding: 10, 
  backgroundColor: '#e0f2e9', 
  shadowColor: '#000000', 
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 4, 
},
titleModal: {
  fontSize: 20, 
  color: '#000', 
  fontWeight: '600', 
  flex: 1, 
  textAlign: 'center',
},
contentBodyModal: {
  padding: 20, 
  backgroundColor: '#e6e6fa',
  borderRadius: 10, 
  shadowColor: '#000000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2, 
},
imageModal: {
  width: '100%', 
  height: 260, 
  borderRadius: 15, 
  borderColor: '#dddddd', 
  borderWidth: 1,
  marginBottom: 18, 
},
contentQuantity: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 28, 
},
buttonQuantity: {
  width: 40,
  height: 40,
  borderRadius: 28, 
  backgroundColor: '#f5f5dc', 
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 10, 
  shadowColor: '#ff6f61', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  
},
textButtonQuantity: {
  color: '#000', 
  fontSize: 26, 
  fontWeight: 'bold',
},
textQuantity: {
  fontSize: 22, 
  color: '#333333', 
  marginHorizontal: 15, 
  textAlign:'center'
},
buttonAddCar: {
  marginTop: 15,
  backgroundColor: PRIMARY_COLOR,
  borderRadius: 5,
  paddingVertical: 10,
  alignItems: 'center'
},
textButtonAddCar: {
  color: SECUNDARY_COLOR,
  fontWeight: 'bold'
},
messageStock: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#a92424',
  textAlign: 'center'
},
contentHeaderHome: {
  flexDirection: 'row',
  alignItems: 'center'
},
iconCardHome: {
  flex: 1,
  alignItems: 'flex-end',
  paddingHorizontal: 33
},
textIconCard: {
  backgroundColor: SECUNDARY_COLOR,
  borderRadius: 20,
  paddingHorizontal: 5,
  fontSize: 13,
  fontWeight: 'bold'
},
headerTable: {
  flexDirection: 'row',
  justifyContent: 'space-between'
},
headerInformation: {
  flexDirection: 'row',
},
textInformation: {
  marginHorizontal: 10
}









});
