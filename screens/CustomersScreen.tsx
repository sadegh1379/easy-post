import React, { useLayoutEffect } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { tabStackParamsList } from '../navigator/TabNavigator';
import { RootStackParamsList } from '../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<tabStackParamsList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamsList>
  >;

const CustomersScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>()

  useLayoutEffect(() => {
     navigation.setOptions({
          headerShown: false,
     })
  }, [])
  return (
    <ScrollView>
     <View>
          <Text>salam</Text>
     </View>
    </ScrollView>
  )
}

export default CustomersScreen