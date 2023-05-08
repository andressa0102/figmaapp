import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native" 
import { styles } from "./styles"
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from "../../components"
import { Navigation } from "../../navigations";
import { LoginTypes } from "../../navigations/login.navigation";

export function Cadastrar({navigation}:LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style ={styles.title}>Cadastrar</Text>
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
                <ComponentButtonInterface title='Salvar' type='primary' onPressI={()=>{navigation.navigate('Drawer')}} />
                <ComponentButtonInterface title='Voltar' type='primary' onPressI={()=>{navigation.navigate('Login')}} />
            </KeyboardAvoidingView>
        </View>
    
    )
}