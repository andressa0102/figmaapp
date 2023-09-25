import React, { useEffect, useState } from "react"
import { View, Text, KeyboardAvoidingView, Alert } from "react-native"
import { ComponentButtonInterface, ComponentLoading } from "../../components"
import { TabTypes } from "../../navigations/tab.navigation"
import { styles } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";
import { useAuth } from "../../hooks/auth"; 
import { AxiosError } from "axios";
import { IAuthenticate } from "../../services/data/User";
import { LoginTypes } from "../../navigations/login.navigation"
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export function Perfil({ navigation }: TabTypes) {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    function handleVoltar() {
        const login = navigation.getParent()
        login?.goBack()
    }
    useEffect(() => {
        if (user){
            setIsLoading(false);
        }
    }, [user]);
    useEffect(()=> {
        async function fetchToken(){
            const token = await registerForPushNotificationsAsync()
            console.log(token)
        }
        fetchToken()
    }, []);
    return(
        <>
        {isLoading ? (
          <ComponentLoading />
        ) : (
          <View style={styles.container}>
              <Text>Perfil</Text>
              <TouchableOpacity onPress={handleVoltar}>
                  <Text>Voltar</Text>
              </TouchableOpacity>
          </View>
        )}
      </>
    )
}
