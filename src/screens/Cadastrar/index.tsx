import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native" 
import { styles } from "./styles"
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components"

export function Cadastrar() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style ={styles.title}>Cadastre-se</Text>
                <View style={styles.formRow}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                    />
                </View>
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
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <ComponentButtonInterface title="Salvar" type="primary" onPressI={()=>{console.log("Cadastrar")}} />
                <ComponentButtonInterface title="Voltar" type="primary" onPressI={()=>{console.log("Login")}} />
            </KeyboardAvoidingView>
        </View>
    
    )
}