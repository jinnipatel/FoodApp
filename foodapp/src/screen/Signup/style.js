import { StyleSheet } from 'react-native'
import { Color } from '../../utils/Color';

const styles = StyleSheet.create({
    MainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center', 
    },
    linerGradient:{
        width:'100%',
        height:'100%',
        opacity:0.95,
        justifyContent:'center',
        alignItems:'center'
     },
    // container: {
    //     flex: 1,
    //     backgroundColor: '#0C1B32'
    // },
    action: {
        flexDirection:'row',
        borderWidth:2,
        borderRadius:50,
        justifyContent:'center',
        alignSelf:'center', 
        marginTop:5
    },
    // header: {
    //     flex:1,
    //     justifyContent: 'flex-end',
    //     paddingHorizontal: 10,
    //     paddingBottom:20
    // },
    // text_header: {
    //     color: '#fff',
    //     fontWeight: 'bold',
    //     fontSize: 30
    // },
    footer: {
        height:560,
        width:'100%',
        paddingHorizontal:20,
        backgroundColor:Color.WHITE,
        borderRadius:12,
    },
    error_section:{
        marginLeft:60
    }
})

export default styles;