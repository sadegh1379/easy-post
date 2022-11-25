import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { tabStackParamsList } from '../navigator/TabNavigator';
import { RootStackParamsList } from '../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Input } from '@rneui/themed';
import tw from 'twrnc';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
     BottomTabNavigationProp<tabStackParamsList, 'Customers'>,
     NativeStackNavigationProp<RootStackParamsList>
>;

const CustomersScreen = () => {
     const navigation = useNavigation<CustomerScreenNavigationProp>()
     const [search, setSearch] = useState<string>('')
     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     }, [])
     return (
          <ScrollView style={{ backgroundColor: '#59C1CC' }} >
               <Image source={require('../assets/home-header.jpeg')}
                    containerStyle={tw`w-full h-64`}
                    style={tw`w-full`}
               />
               <Input
                    placeholder='Search By Customer'
                    containerStyle={tw`px-7 bg-white pt-4 pb-0`}
                    onChangeText={setSearch}
                    value={search}
               />
          </ScrollView>
     )
}

export default CustomersScreen