import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../Tienda';
import { styles } from '../../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../../commons/contsns';
import { ModalProductos } from '../ModalProductos';

interface Props {
    product: Product;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CarritoProductos = ({ product, changeStockProduct }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.contentCard}>
                <Image
                    source={{ uri: product.pathImage }}
                    style={styles.imageCard}
                />

                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>

                <View style={styles.iconsCard}>
                    <Icon
                        name='shopping-cart'
                        size={35}
                        color={PRIMARY_COLOR}
                        onPress={() => setShowModal(true)}
                    />
                </View>
            </View>
            <ModalProductos
                isVisible={showModal}
                setShowModal={() => setShowModal(false)}
                product={product}
                changeStockProduct={changeStockProduct}
            />
        </View>
    );
};
