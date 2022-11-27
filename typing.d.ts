type Customer = {
     email: String
     name: String
};

type CustomerList = {
     name: ID
     value: Customer
};

type TrackingItem = {
     customer_id: String
     items: [Items]
     customer: Customer
}

type Item = {
     item_id: Int
     name: String
     price: Number
     quantity: Number
}

type OrderResponse = {
     value: Order
}

type CustomerResponse = {
     name: ID
     value: Customer
}

type Order = {
     carrier: String
     createdAt: Date
     shippingCost: Number
     trackingId: String
     Address: String
     City: String
     Lat: Number
     Lng: Number
     trackingItems: TrackingItem
   }