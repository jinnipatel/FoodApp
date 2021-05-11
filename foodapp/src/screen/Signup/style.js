import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1B32'
    },
    action: {
        flexDirection:'row',
        marginTop:0,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom:2,
    },
    header: {
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingBottom:20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    footer: {
        flex:10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default styles;