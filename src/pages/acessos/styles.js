import {StyleSheet} from 'react-native';
import Variables from '../../styles';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Variables.colors.white,
        alignItems: "stretch",
    },
    header: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Variables.colors.primary,
        shadowColor: Variables.colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20
    },
    logo: {
        width: 200,
        height: 105,
    },
    logoView:{
        backgroundColor: Variables.colors.white,
        borderRadius: 6,
        padding: 10
    },
    body: {
        flex: 8,
        backgroundColor: Variables.colors.whitesh,

    },
    aboutCard:{
        padding: 15,
        backgroundColor: Variables.colors.white,
        paddingBottom: 30
    },
    normalCard: {
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "stretch",
        backgroundColor: Variables.colors.white,
        shadowColor: Variables.colors.dark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        borderRadius: 3
    },
    normalCardTitle: {
        fontSize: 22,
        color: Variables.colors.dark,
        marginBottom: 10,
        textAlign: "left"
    },
    normalCardBody: {
        fontSize: 16,
        color: Variables.colors.regular,
        marginBottom: 10,
    },

    museuTitle: {
        fontSize: 18,
        color: Variables.colors.dark,
        marginBottom: 5,
        textAlign: 'center'
    },
    museuObs: {
        fontSize: 14,
        color: Variables.colors.dark,
        marginBottom: 5,
        textAlign: 'center'
    },
    pestana: {
        width: 200,
        height: 200,
        marginHorizontal: 5
    },
    patrocinio: {
        width: 150,
        height: 50,
        marginHorizontal: 5

    },
    primaryButton:{
        backgroundColor: Variables.colors.primary,
        padding: 15,
        borderRadius: 6
    },
    primaryButtonText:{
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center",
        color: Variables.colors.white,

    },
})