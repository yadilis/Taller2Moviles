import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { Product } from './Tienda';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/contsns';

interface Props {
    product: Product;
    isVisible: boolean;
    setShowModal: () => void;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProductos = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    const handleChangeQuantity = (value: number) => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + value;
            // Limitar la cantidad entre 1 y el stock disponible
            return Math.max(1, Math.min(newQuantity, product.stock));
        });
    };

    // Agregar productos al carrito
    const handleAddProduct = () => {
        changeStockProduct(product.id, quantity);
        setQuantity(1); // Resetear la cantidad
        setShowModal(); // Cerrar el modal
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={[styles.contentPrincipal, styles.shadowStyle]}>
                <View style={{ ...styles.contentModal, width: width * 0.80 }}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>
                            {product.name} - ${product.price.toFixed(2)}
                        </Text>
                        <View style={styles.iconsCard}>
                            <Icon 
                                name='cancel'
                                size={27} 
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} 
                            />
                        </View>
                    </View>

                    <View style={styles.contentBodyModal}>
                        <Image
                            source={{ uri: product.pathImage }}
                            style={styles.imageModal}
                        />
                    </View>

                    {product.stock === 0 ? (
                        <Text style={styles.messageStock}>¡Producto Agotado!</Text>
                    ) : (
                        <View>
                            <View style={styles.contentQuantity}>
                                <TouchableOpacity
                                    onPress={() => handleChangeQuantity(1)}
                                    disabled={quantity === product.stock}
                                    style={styles.buttonQuantity}
                                >
                                    <Text style={styles.textButtonQuantity}>+</Text>
                                </TouchableOpacity>
                                <Text style={styles.textQuantity}>{quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => handleChangeQuantity(-1)}
                                    disabled={quantity === 1}
                                    style={styles.buttonQuantity}
                                >
                                    <Text style={styles.textButtonQuantity}>-</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text style={styles.textQuantity}>
                                    Total: ${(product.price * quantity).toFixed(2)}
                                </Text>
                            </View>

                            <TouchableOpacity
                                onPress={handleAddProduct}
                                style={styles.buttonAddCar}
                            >
                                <Text style={styles.textButtonAddCar}>Agregar al Carrito</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};
