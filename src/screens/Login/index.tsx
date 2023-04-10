import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native" 
import { styles } from "./styles"
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components"
import { LoginTypes } from "../../navigations/login.navigation"

export function Login({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style ={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor={colors.black}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Entypo name="key" size={24} color="black" />
                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor={colors.black}
                        secureTextEntry={true} //fazer com que a senha fique com bolinha
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Entrar" type="primary" onPressI={()=>{navigation.navigate("Cadastrar")}} />
                <ComponentButtonInterface title="Cadastrar" type="primary" onPressI={()=>{console.log("Cadastrar")}} />
            </KeyboardAvoidingView>
        </View>
    
    )
}