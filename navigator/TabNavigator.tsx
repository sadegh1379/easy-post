import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export type tabStackParamsList = {
     Customers: undefined;
     Order: undefined;
}
const Tab = createBottomTabNavigator<tabStackParamsList>();

const TabNavigator = () => {
     const navigation = useNavigation()
     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     }, [])
     return (
          <Tab.Navigator
               screenOptions={({ route }) => ({
                    tabBarActiveTintColor: "#59C1CC",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused, size, color }) => {
                         if(route.name === 'Customers') {
                              return(
                                   <Icon
                                        name="users"
                                        type="entypo"
                                        color={focused ? '#59C1CC' : 'gray'}
                                   />
                              )
                         } else if (route.name === 'Order') {
                              return (
                                   <Icon
                                        name="box"
                                        type="entypo"
                                        color={focused ? '#59C1CC' : 'gray'}
                                   />
                              )
                         }
                    }
               })}
          >
               <Tab.Screen name="Customers" component={CustomersScreen} />
               <Tab.Screen name="Order" component={OrderScreen} />
          </Tab.Navigator>
     )
}

export default TabNavigator