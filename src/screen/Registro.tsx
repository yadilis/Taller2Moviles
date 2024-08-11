import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../../commons/contsns'
import { TitleConponent } from '../components/TitleComponents'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../../theme/appTheme'
import { InputComponents } from '../components/InputComponents'
import { ButtonComponent } from '../components/ButtonComponent'


interface FormRegister {
    nombre: string
    cedula: string
    email: string
    contraseña: string
    verificarContraseña: string
}



export const Registro = () => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        nombre: '',
        cedula: '',
        email: '',
        contraseña: '',
        verificarContraseña: ''
    })

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const handleSetValues = (name: string, value: string) => {
        setFormRegister({ ...formRegister, [name]: value })
    }

    const handleRegister = () => {
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

        console.log(formRegister)
        
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
                <ButtonComponent textButton='Crear Cuenta' onPress={handleRegister} />
            </BodyComponent>
        </View>
    )
}
