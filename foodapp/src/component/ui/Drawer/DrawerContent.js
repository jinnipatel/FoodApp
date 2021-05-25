import AsyncStorage from '@react-native-async-storage/async-storage'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/routers'
import React, { Component } from 'react'
import { ActivityIndicatorBase, Text, View } from 'react-native'
import {Avatar, Caption, Drawer, Title} from 'react-native-paper'
import Routes from '../../../routes/routes'
import Button from '../Buttons'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Color } from '../../../utils/Color'

export function DrawerContent (props) {

  
        return (
            <View style={styles.drawerContainer}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View>
                               <Avatar.Image source={require('../../../assets/Img/user1.png')} size={100} style={{alignSelf:'center',marginTop:25}} /> 
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Title style={styles.title}>User Name</Title>
                                <Caption style={styles.caption}>Xyz</Caption>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                            icon={()=>(
                                <Icon name="home-outline"
                                color={Color.GRADIENT4}
                                size={25}/>
                            )}
                            label="Profile" labelStyle={{fontSize:15,color:Color.GRADIENT4}}/>
                            <DrawerItem 
                              icon={()=>(<Icon name="file-document-edit-outline"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Document Info" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />
                             <DrawerItem 
                              icon={()=>(<Icon name="bank-outline"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Bank Details" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />

                            <DrawerItem 
                              icon={()=>(<Icon name="history"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Order History" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />

                            <DrawerItem 
                              icon={()=>(<Icon name="home-outline"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Customer Feedback" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />
                            

                            <DrawerItem 
                              icon={()=>(<Icon name="home-outline"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Earning" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />

                            <DrawerItem 
                              icon={()=>(<Icon name="logout"
                              color={Color.GRADIENT4}
                              size={25}/>)}
                              label="Log-Out" labelStyle={{fontSize:15,color:Color.GRADIENT4}}
                            />

                           
                        </Drawer.Section>
                    </View>

                </DrawerContentScrollView>
            </View>
        )
   
}

export default DrawerContent
