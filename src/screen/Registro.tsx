import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR } from '../../commons/contsns'
import { TitleConponent } from '../components/TitleComponents'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../../theme/appTheme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../../navigaitor/StackNavigator'
interface Props{
    users:User[];
    handleAddUse:(user:User)=>void;
}


interface FormRegister {
    nombre: string
    cedula: string
    email: string
    contraseña: string
    verificarContraseña: string
}



export const Registro = ({users,handleAddUse}:Props) => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        nombre: '',
        cedula: '',
        email: '',
        contraseña: '',
        verificarContraseña: ''
    })

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation =useNavigation();

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value })
    }

    const handleSignUp = () => {
        if (
            formRegister.nombre === '' ||
            formRegister.cedula === '' ||
            formRegister.email === '' ||
            formRegister.contraseña === '' ||
            formRegister.verificarContraseña === ''
        ) {
            Alert.alert('ERROR', 
                'Por favor, llena todos los campos!')
            return
        }

        if (formRegister.contraseña !== formRegister.verificarContraseña) {
            Alert.alert('ERROR', 
                'Las contraseñas no coinciden!')
            return
        }
         
        if(verifyUser()!=null ){
            Alert.alert(
                'Error',
                'El usuario ya existe!'
            );
            return;
        }

        const getIdUsers=users.map(user => user.id);

        const getNewId= Math.max(...getIdUsers)+1;
        const newUser:User={
            id:getNewId,
            email:formRegister.email,
            password:formRegister.contraseña
        }

        handleAddUse(newUser);
        Alert.alert
        (   
            'BIENVENIDO A BOUTIQUE!',
            'Gracias por Registrarse'
        );
        navigation.goBack();
        
    }

    const verifyUser=()=>{
        const existUser=users.filter(user =>user.email ===formRegister.email)[0];
        return existUser;
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleConponent title="Registrarse" />

            <BodyComponent>
            <View>
                    <Text style={styles.titleHeaderBody}>INGRESA TUS DATOS</Text>
                    
                </View>
                <View style={styles.contentInput}>
                    <InputComponents placeholder='Nombre' handleSetValue={handleSetValues} name='nombre'/>
                    <InputComponents placeholder='Cédula' handleSetValue={handleSetValues} name='cedula'/>
                    <InputComponents placeholder='Correo' handleSetValue={handleSetValues} name='email'/>
                    <InputComponents 
                        placeholder='Contraseña'
                        handleSetValue={handleSetValues}
                        name='contraseña'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        sethiddenPaswword={() => setHiddenPassword(!hiddenPassword)}
                    />
                    <InputComponents
                        placeholder='Confirmar Contraseña'
                        handleSetValue={handleSetValues}
                        name='verificarContraseña'
                        isPassword={hiddenPassword}
                        hasIcon={true}
                        sethiddenPaswword={() => setHiddenPassword(!hiddenPassword)}
                    />
                  </View>
                  <ButtonComponent textButton="Registrate" onPress={handleSignUp} />
      <TouchableOpacity onPress={() => navigation.dispatch(
        CommonActions.navigate({ name: 'Home' })
      )}>
        <Text style={styles.textRedirection}>Ya tienes una cuenta? Iniciar Sesión</Text>
      </TouchableOpacity>
            </BodyComponent>
    </View>
    
    )
}
