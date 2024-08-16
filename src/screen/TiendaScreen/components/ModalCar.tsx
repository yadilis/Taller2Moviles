import React from 'react';
import { FlatList, Modal, Text, useWindowDimensions, View } from 'react-native';
import { Car } from '../Tienda';
import { styles } from '../../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../../commons/contsns';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    isVisible: boolean;
    setShowModal: () => void;
    car: Car[];
    emptyCar: () => void; // Vaciar el carrito
}

 export const ModalCar = ({ isVisible, car, setShowModal, emptyCar }: Props) => {
    const { width } = useWindowDimensions();

    // Calcular el total a pagar
    const totalPay = () => {
        let total: number = 0;
        car.forEach(product => {
            total += product.price * product.totalQuantity;
        });
        return total; // Acumulación total
    };

    // Manejar el envío de la compra y vaciar el carrito
    const handleSendInfo = () => {
        emptyCar(); // Vaciar carrito
        setShowModal(); // Cerrar el modal
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{ ...styles.contentModal, width: width * 0.80 }}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.iconsCard}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal}
                            />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text style={styles.textInformation}>Producto</Text>
                        <View style={styles.headerInformation}>
                            <Text style={{ ...styles.textInformation, marginHorizontal: 10 }}>Prec.</Text>
                            <Text style={{ ...styles.textInformation, marginHorizontal: 10 }}>Cant.</Text>
                            <Text style={{ ...styles.textInformation, marginHorizontal: 10 }}>Total</Text>
                            
                        </View>
                    </View>

                    <FlatList
                        data={car}
                        renderItem={({ item }) => (
                            <View style={styles.headerTable}>
                                <Text>{item.name}</Text>
                                <View style={styles.headerInformation}>
                                    <Text style={{ marginHorizontal: 10 }}>{item.price.toFixed(2)}</Text>
                                    <Text style={{ marginHorizontal: 15 }}>{item.totalQuantity}</Text>
                                    <Text style={{ marginHorizontal: 10 }}>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.textTotalPay}>Total: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleSendInfo}
                        style={styles.buttonAddCar}
                    >
                        <Text style={styles.textButtonAddCar}>COMPRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
