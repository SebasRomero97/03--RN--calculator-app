import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    
    background: {
        flex: 1,
        backgroundColor: Colors.backGroundColor
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,

    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'SpaceMono'
    },

    subResult:{
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'SpaceMono'

    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 30,
        marginHorizontal: 20
    },

    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGrey,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginHorizontal: 10,
    },

    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: 300,
        fontFamily: 'SpaceMono'
    }
})