import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Consulta from '../Screens/Consulta';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Listado from '../Navigarions/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName="HomeScreen"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Lista"
                component={Listado}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"list"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Consulta"
                component={Consulta}
                options={{
                    tabBarIcon:({color})=>(
                        <Ionicons name={"search"} size={20} color={color}/>
                    )
                }}
            
            />
        </Tab.Navigator>
    )
}