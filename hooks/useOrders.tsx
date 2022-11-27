import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ORDERS } from '../graphql/queries'

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS)
  const [orders, setOrders] = useState<Order[]>([])
  useEffect(() => {
     if (!data) return;
     const orderss: [Order] = data.getOrders.map(({value} : OrderResponse) => ({
      Address: value.Address,
      City: value.City,
      Lat: value.Lat,
      Lng: value.Lng,
      carrier: value.carrier,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId
     }))
     setOrders(orderss)
  }, [data])
  
  return {
     orders,
     loading,
     error
  }
}

export default useOrders