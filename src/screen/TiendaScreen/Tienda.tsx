import React, { useState } from 'react';
import { FlatList, Modal, Text, View } from 'react-native';
import { TitleConponent } from '../../components/TitleComponents';
import { BodyComponent } from '../../components/BodyComponent';
import { CarritoProductos } from './components/CarritoProductos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SECUNDARY_COLOR } from '../../../commons/contsns';
import { styles } from '../../../theme/appTheme';
import { ModalCar } from './components/ModalCar';


export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
    description: string;  
     
}

export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

export const Tienda = () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'Pantalón Casual',
            price: 27,
            stock: 12,
            pathImage: 'https://i.pinimg.com/736x/52/c3/2f/52c32f3755ab1bd2b35f588da178ba57.jpg',
            description: 'Pantalón casual cómodo y elegante, perfecto para cualquier ocasión.'
    
            
        },
        {
            id: 2,
            name: 'Camiseta Básica',
            price: 6.50,
            stock: 10,
            pathImage: 'https://i.pinimg.com/736x/ee/2f/23/ee2f23f34bbd62e4b28efdf297dff5eb.jpg',
            description: 'Camiseta básica de algodón, disponible en varios colores.',
           
        },
        {
            id: 3,
            name: 'Chaqueta Jean',
            price: 13.50,
            stock: 15,
            pathImage: 'https://i.pinimg.com/736x/70/61/82/706182d10cad43652419f18b9e21707a.jpg',
            description: 'Chaqueta manga larga con terminacion en botón metálico',
           
        },
        {
            id: 4,
            name: 'Falda',
            price: 12,
            stock: 8,
            pathImage: 'https://i.pinimg.com/736x/f8/ef/0d/f8ef0d31096355f2f317f8e2e6f3b49c.jpg',
            description: 'Falda de Mezquilla S & Unicolor tipo cargo .',
           
        },
        {
            id: 5,
            name: 'Top ',
            price: 5,
            stock: 3,
            pathImage: 'https://i.pinimg.com/564x/6a/26/8d/6a268debcda51617c5dacb29ddc03373.jpg',
            description: 'Top casuales con tiras gruesas,tela llana y corte en V.',
            
        },
        {
            id: 6,
            name: 'Vestido Elegante',
            price: 10,
            stock: 10,
            pathImage: 'https://i.pinimg.com/564x/8f/4a/76/8f4a7659ccecffbb3cff004f0fa1cc9f.jpg',
            description: 'Vestido llano con apertura, perfecto para ocasiones especiales.',
        },
        {
            id: 7,
            name: 'Zapatos Deportivos',
            price: 19.99,
            stock: 13,
            pathImage: 'https://i.pinimg.com/564x/e5/bb/08/e5bb089e840e0b95ec43918cdf8038b6.jpg',
            description: 'Zapatos deportivos casuales con suela gruesa y comodos para cualquier ocación.',
        }
    ];

    const [productState, setProductsState] = useState(products);
    const [car, setCar] = useState<Car[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    // Cambiar el stock de un producto
    const changeStockProduct = (idProduct: number, quantity: number) => {
        const updateStock = productState.map(product =>
            product.id === idProduct
                ? { ...product, stock: product.stock - quantity }
                : product
        );
        setProductsState(updateStock);
        addProduct(idProduct, quantity);
    };

    // Agregar producto al carrito
    const addProduct = (idProduct: number, quantity: number) => {
        const product = productState.find(product => product.id === idProduct);

        if (!product) {
            return;
        }

        const existingProduct = car.find(item => item.id === idProduct);

        if (existingProduct) {
            // Producto ya está en el carrito
            const updatedCar = car.map(item =>
                item.id === idProduct
                    ? { ...item, totalQuantity: item.totalQuantity + quantity }
                    : item
            );
            setCar(updatedCar);
        } else {
            // No está en el carrito
            const newProductCar: Car = {
                id: product.id,
                name: product.name,
                price: product.price,
                totalQuantity: quantity
            };

            setCar([...car, newProductCar]);
        }
    };

    const emptyCar = () => {
        setCar([]);
    };

    const hasProducts = car.length > 0; // Verifica si hay productos en el carrito

    return (
        <View>
            <View style={styles.contentHeaderHome}>
                <TitleConponent title='Productos' />
                <View style={styles.iconCardHome}>
                    <Text style={styles.textIconCard}>{car.length}</Text>
                    <Icon
                        name='shopping-bag'
                        size={35}
                        color={SECUNDARY_COLOR}
                        onPress={() => hasProducts && setShowModal(!showModal)}
                        disabled={!hasProducts} // Deshabilita el botón
                        style={{ opacity: hasProducts ? 1 : 0.5 }} 
                    />
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productState}
                    renderItem={({ item }) => <CarritoProductos product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
            <ModalCar
                isVisible={showModal}
                car={car} 
                setShowModal={() => setShowModal(!showModal)}
                emptyCar={emptyCar}
            />
        </View>
    );
};
