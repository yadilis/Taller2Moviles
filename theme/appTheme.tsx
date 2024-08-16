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
        backgroundColor:SECUNDARY_COLOR,
      },
      imputText:{
        backgroundColor:INPUT_COMPONENT,
        paddingHorizontal:20,

        
        paddingVertical:10,
        borderRadius:10
      },
      contentInput: {
  gap: 22,
  backgroundColor: '#b4f7f7', 
  borderRadius: 18, 
  padding: 30, 
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 4 }, 
  shadowOpacity: 0.2, 
 shadowRadius: 10, 
elevation: 200, 
borderColor: '#000', 
borderWidth: 0.2, 
        overflow: 'hidden', 
    },
      button:{
        backgroundColor:PRIMARY_COLOR,
        paddingVertical:20,
        marginHorizontal:30,
        borderRadius:70,
        marginTop:30
      },
      buttonText:{
        color:'#000',
        fontSize:20,
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
        fontSize: 18, 
        fontWeight:'bold',
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
  marginVertical:2,
  marginTop:2,
  marginLeft: 4,
    },
    image: {
      width: 400,
      height: 200,
      borderRadius: 30, 
      resizeMode: 'cover', 
    },
    titleHeaderBody: {
      fontSize: 28, 
marginLeft: 3,
marginVertical: 20,
fontWeight: 'bold',
color: '#333', 
 marginTop: 10,
textShadowColor: '#bf5df0', 
textShadowOffset: { width: 2, height: 2 },
textShadowRadius: 5,
letterSpacing: 1.2, 
textAlign: 'center',
fontFamily: 'Arial', 
    },
  contentCard: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 7,
    borderStyle: 'solid',
    alignItems: 'center',
    padding: 6,
    borderRadius: 12,
    backgroundColor: '#FAEAD8', 
    borderWidth: 2, 
    borderColor: '#8AFAE2', 
    shadowOffset: { width: 0, height: 0 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 15, 
    elevation: 10, 
    justifyContent: 'space-between',
},

  
titleCard: {
  fontSize: 19,
  fontWeight: 'bold',
  color: '#333', 
  marginBottom: 5,
},

  imageCard:{
    width: 140,
    height: 140,
    borderRadius: 10, 
    marginRight: 15,
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
    padding: 19,
    paddingHorizontal:11,
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
  fontSize: 18, 
  color: '#000', 
  fontWeight: '600', 
  flex: 1, 
  textAlign: 'center',
},
contentBodyModal: {
  padding: 19, 
  backgroundColor: '#e6e6fa',
  borderRadius: 7, 
  shadowColor: '#000000', 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2, 
},
imageModal: {
  width: '100%', 
  height: 220, 
  borderRadius: 14, 
  borderColor: '#dddddd', 
  borderWidth: 1,
  marginBottom: 18, 
},
contentQuantity: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 21, 
},
buttonQuantity: {
  width: 45,
  height: 45,
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
  fontWeight:'bold',
  marginHorizontal: 13, 
  textAlign:'center'
},
buttonAddCar: {
  marginTop: 15,
  backgroundColor: PRIMARY_COLOR,
  borderRadius: 5,
  paddingVertical: 15,
  alignItems: 'center'
},
textButtonAddCar: {
  color: SECUNDARY_COLOR,
  fontWeight: 'bold'
},
messageStock: {
  fontSize: 26,
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
  fontWeight:'bold',
  color:'#000'
},
textTotalPay: {
  marginTop:5,
  fontSize: 20, 
  fontWeight: 'bold', 
  color: '#000', 
  paddingVertical: 12, 
  paddingHorizontal: 1, 
  shadowColor: '#000', 
  
},
iconContainer: {
alignItems: 'center', 
justifyContent: 'center',
    },
iconBorder: {
borderWidth: 2,
borderColor: 'black',    
borderRadius: 5, 
padding: 5, 
    },
    descriptionContainer: {
      marginTop:5,
      padding: 10,
      borderRadius: 8,
backgroundColor: '#FFFAF0', 
borderColor: '#FFD700', 
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.2,
shadowRadius: 4,
elevation: 2,
  },
descriptionText: {
fontSize: 16,
fontWeight: '600',
      color: '#333',
textAlign: 'center',
  },
  productName: {
  fontSize: 22,
  fontWeight: 'bold',
          margin: 10,
      },
  
});






