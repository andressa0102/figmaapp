import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin: 10,
    },
    buttonThird: {
        backgroundColor: colors.third,
        borderRadius: 5,
        margin: 10,
    },
    buttonThirdLight: {
        backgroundColor: colors.thirdLight,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        color: colors.white
    }
})