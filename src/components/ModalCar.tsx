import React, { useState } from 'react'
import { FlatList, Modal, Text, useWindowDimensions, View } from 'react-native'
import { Car } from '../screen/TiendaScreen/Tienda';
import { styles } from '../../theme/appTheme';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/contsns';

//


interface Props{
    isVisible:boolean;
    setShowModal:()=>void;
    car: Car[];

}

export const ModalCar = ({isVisible,car,setShowModal}:Props) => {
    const {width} =useWindowDimensions();

  return (
    
    <Modal visible={isVisible} animationType='fade' transparent={true} >
          <View style={styles.contentPrincipal}>
        <View style={{
            ...styles.contentModal,
            width:width *0.80
        }}>  

         <View style={styles.headModal}>
                <Text style={styles.titleModal}>Mis Productos </Text>
                <View style={styles.iconsCard}>
                    <Icon 
                    name='cancel'
                    size={27} 
                    color={PRIMARY_COLOR}
                    onPress={setShowModal}/>
                    </View> 
                </View> 
                <View style={styles.headerTable}>
                    <Text>Producto</Text>
                    <View style={styles.headerInformation}> 
                    <Text style={styles.textInformation}>Prec.</Text>
                    <Text style={styles.textInformation}>Cant.</Text>
                    <Text style={styles.textInformation}>Total</Text> 
                    </View>
                   
                </View>

        <FlatList
        
    data={car}
     renderItem={({ item }) => <Text onPress={setShowModal}>{item.name}</Text>}
    keyExtractor={item => item.id.toString()} />

    </View>
    </View>
    </Modal>


    
    )
}
