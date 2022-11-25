import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screens/CustomersScreen';
import OrderScreen from '../screens/OrderScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
     <Tab.Navigator>
          <Tab.Screen name="Customers" component={CustomersScreen}/>
          <Tab.Screen name="Order" component={OrderScreen}/>
     </Tab.Navigator>
  )
}

export default TabNavigator