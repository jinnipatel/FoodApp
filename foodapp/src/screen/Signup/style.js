import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1B32'
    },
    action: {
        flexDirection:'row',
        borderWidth:2,
        borderRadius:50,
        justifyContent:'center',
        alignSelf:'center', 
        marginTop:5
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
        marginTop:25,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    error_section:{
        marginLeft:60
    }
})

export default styles;