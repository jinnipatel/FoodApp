import React from 'react';
import {View,Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {DrawerContentScrollView,DrawerItem,DrawerItemList} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Paragraph,Drawer,TouchableRipple,Switch} from 'react-native-paper'
import styles from './styles';


export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View>
                             <Avatar/> 
                        </View> 
                    </View>
                 
                </View>
            </DrawerContentScrollView>
        </View>
    )
}
