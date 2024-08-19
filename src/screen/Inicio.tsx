import React, { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { TitleConponent } from '../components/TitleComponents'
import { BodyComponent } from '../components/BodyComponent'
import { InputComponents } from '../components/InputComponents'
import {  styles } from '../../theme/appTheme'
import { ButtonComponent } from '../components/ButtonComponent'
import { StatusBar } from 'expo-status-bar'
import { PRIMARY_COLOR } from '../../commons/contsns'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { User } from '../../navigaitor/StackNavigator'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Props{
    users:User[]
    
}


interface FormLogin{
    email:string;
    password:string;
}


export const Inicio = ({users}:Props) => {

  



    const[formLogin, setFormLogin] =useState<FormLogin>({
        email:'',
        password:''

    });
    const [hiddenPaswword,setHiddenPaswword] = useState<boolean>(true);
    const navigation =useNavigation();

    const handleSetValues=(name:string,value:string)=>{
        setFormLogin({...formLogin,[name]: value });
        
    }
    const handleSignIn=() =>{
        if(formLogin.email === '' || formLogin.password === ''){
            Alert.alert(
                'ERROR',
                'Por favor, llena todo los campos !'
            );
            return;
        }

        navigation.dispatch(CommonActions.navigate({name:'Tienda'}));
        
        if(!verifyUser()){
            Alert.alert(
                'Error',
                'Correo o Contraseña incorecta!'
            );
            return;
        }

        console.log(formLogin)
    }

    const verifyUser = ():User => {
    
    const existUser = users.filter(user => user.email === formLogin.email && user.password === formLogin.password)[0];
    
        return existUser;
    }

    return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleConponent title='Inciciar Sesión'/>

        <BodyComponent>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://marketplace.canva.com/EAFg-uOorvQ/1/0/1600w/canva-logotipo-boutique-de-ropa-moderno-negro-y-rosa-uoDu8e-9ixg.jpg' }}
            style={styles.image}
          />
        

    </View>

            <View style={styles.contentInput}>
            <InputComponents placeholder='Correo' handleSetValue={handleSetValues} name='email'/>
            <InputComponents placeholder='Contraseña'handleSetValue={handleSetValues} 
            name='password'
            isPassword={hiddenPaswword}
            hasIcon={true}
            sethiddenPaswword={()=>setHiddenPaswword(!hiddenPaswword)}/>
        

            </View>
            <ButtonComponent textButton='Iniciar Sesión' onPress={handleSignIn}/>
            <TouchableOpacity>
            <Text style={styles.textRedirection} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
        ¡No tienes cuenta! {'\n'}<Text style={styles.highlight}>Regístrate y accede a ofertas especiales.</Text>
    </Text>
            </TouchableOpacity>
            </BodyComponent>
    </View>
    )
}
