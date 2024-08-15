import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TitleConponent } from '../../components/TitleComponents'
import { BodyComponent } from '../../components/BodyComponent'
import { CarritoProductos } from './components/CarritoProductos';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { SECUNDARY_COLOR } from '../../../commons/contsns';
import { styles } from '../../../theme/appTheme';
import { ModalCar } from '../../components/ModalCar';



export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
    description: string;  
    size: string[];  
    color: string[];  }


    export interface Car{
        id:number;
        name:string;
        price:number;
        totalQuantity: number;
    }


    export const Tienda = () => {


    const products:Product[]=[
    {
    id: 1,
    name: 'Pantalón Casual',
    price: 49.99,
    stock: 0,
    pathImage: 'https://i.pinimg.com/736x/52/c3/2f/52c32f3755ab1bd2b35f588da178ba57.jpg',
    description: 'Pantalón casual cómodo y elegante, perfecto para cualquier ocasión.',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Azul', 'Negro', 'Gris']
},
{
    id: 2,
    name: 'Camiseta Básica',
    price: 19.99,
    stock: 50,
    pathImage: 'https://i.pinimg.com/736x/ee/2f/23/ee2f23f34bbd62e4b28efdf297dff5eb.jpg',
    description: 'Camiseta básica de algodón, disponible en varios colores.',
    size: ['S', 'M', 'L'],
    color: ['Blanco', 'Negro', 'Rojo', 'Azul']
},
{
    id: 3,
    name: 'Chaqueta Jean',
    price: 69.99,
    stock: 15,
    pathImage: 'https://i.pinimg.com/736x/70/61/82/706182d10cad43652419f18b9e21707a.jpg',
    description: 'Chaqueta manga larga con terminacion en botón metálico',
    size: ['M', 'L', 'XL'],
    color: ['Negro', 'Verde', 'Azul']
},
{
    id: 4,
    name: 'Falda',
    price: 59.99,
    stock: 25,
    pathImage: 'https://i.pinimg.com/736x/f8/ef/0d/f8ef0d31096355f2f317f8e2e6f3b49c.jpg',
    description: 'Falda de Mezquilla S & Unicolor tipo cargo .',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Azul Oscuro', 'Negro','Beige','Morada']
},
{
    id: 5,
    name: 'Top camisola',
    price: 39.99,
    stock: 30,
    pathImage: 'https://i.pinimg.com/564x/6a/26/8d/6a268debcda51617c5dacb29ddc03373.jpg',
    description: 'Top casuales con tiras gruesas,tela llana y corte en V.',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Gris', 'Negro', 'Rojo']
},
{
    id: 6,
    name: 'Vestido Elegante',
    price: 79.99,
    stock: 10,
    pathImage: 'https://i.pinimg.com/564x/8f/4a/76/8f4a7659ccecffbb3cff004f0fa1cc9f.jpg',
    description: 'Vestido llano con apertura , perfecto para ocasiones especiales.',
    size: ['S', 'M', 'L'],
    color: ['Blanco', 'Azul', 'Rosa']
},
{
    id: 7,
    name: 'Zapatos Deportivos',
    price: 89.99,
    stock: 40,
    pathImage: 'https://i.pinimg.com/564x/e5/bb/08/e5bb089e840e0b95ec43918cdf8038b6.jpg',
    description: 'Zapatos deportivos casuales con suela gruesa y comodos para cualquier ocación.',
    size: ['38', '39', '40', '41', '42', '43'],
    color: ['Negro', 'Blanco', 'Rojo']
}
];

//manipular el estado del producto
const [productState,setProductsState]= useState(products);

const [car,setCar]= useState<Car[]>([]);

const [showModal, setShowModal] = useState<boolean>(false);


//Stock de productos
const changeStockProduct =(idProduct: number ,quantity:number)=>{

    const updateStock=productState.map(product=>product.id === idProduct
        ?{...product, stock:product.stock -quantity }
        :product );

        //Actualizar
        setProductsState(updateStock);

        addProduct(idProduct,quantity);
}
    

const addProduct =(idProduct:number,quantity:number)=>{
    const product =productState.find(product =>product.id === idProduct);

    if(!product){
        return;
    }

    const newProductCar: Car={
        id:product.id,
        name:product.name,
        price:product.price,
        totalQuantity:quantity
    }

    setCar([...car,newProductCar]);
   // console.log(car);
}
  
return (

    <View>
        <View style={styles.contentHeaderHome}>   
        <TitleConponent title='Productos'/>
        <View style={styles.iconCardHome}> 
            <Text style={styles.textIconCard}>{car.length}</Text>
        <Icon 
        name='shopping-cart' 
        size={35} 
        color={SECUNDARY_COLOR}
        onPress={()=>setShowModal(!showModal)}/>
        </View>
    </View>
        <BodyComponent>
            <FlatList
            data={productState}
            renderItem={({item})=> <CarritoProductos product={item} changeStockProduct={changeStockProduct}/>}
            keyExtractor={item => item.id.toString()}/>
            
        </BodyComponent>
        <ModalCar isVisible={showModal} car={car} setShowModal={()=>setShowModal(!showModal)}/>
    </View>
    
  )
}
