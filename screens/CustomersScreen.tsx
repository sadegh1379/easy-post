import React, { useLayoutEffect, useState } from 'react'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { tabStackParamsList } from '../navigator/TabNavigator';
import { RootStackParamsList } from '../navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, Input } from '@rneui/themed';
import tw from 'twrnc';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
     BottomTabNavigationProp<tabStackParamsList, 'Customers'>,
     NativeStackNavigationProp<RootStackParamsList>
>;

const CustomersScreen = () => {
     const navigation = useNavigation<CustomerScreenNavigationProp>()
     const [search, setSearch] = useState<string>('')
     const { data, error, loading } = useQuery(GET_CUSTOMERS);
     console.log('loading', loading)
     console.log('data:', data);
     console.log('error:', error);

     useLayoutEffect(() => {
          navigation.setOptions({
               headerShown: false,
          })
     }, [])
     return (
          <ScrollView style={{ backgroundColor: '#59C1CC' }} >
               <Image source={require('../assets/home-header.jpg')}
                    containerStyle={tw`w-full h-58`}
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