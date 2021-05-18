import { StyleSheet } from 'react-native'
import { Color } from '../../utils/Color';

const styles = StyleSheet.create({
    Maincontainer:{
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
    // header: {
    //     flex: 1,
    //     justifyContent: 'flex-end',
    //     paddingHorizontal: 20,
    //     paddingBottom: 50
    // },
    // gradient: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 5
    // },
    footer: {
        height:560,
        width:'100%',
        paddingHorizontal:10,
        backgroundColor:Color.WHITE,
        borderRadius:12,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,

    },
    action: {
        
        flexDirection:'row',
        borderWidth:2,
        borderRadius:50,
        justifyContent:'center',
        alignSelf:'center',        
    },
    button: {
        // alignItems: 'center',
        marginTop:10,
        marginRight:6
    },
    signup: {
        // marginLeft:10,
        // marginRight:20,
        // marginTop: 15,
        // marginTop:10
    },
    button_text: {
        color:'#009387',
        fontSize: 20,
        fontWeight: 'bold'

    }
})
export default styles;