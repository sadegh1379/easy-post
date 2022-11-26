import { gql } from '@apollo/client';

const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      value {
          email
          name
      }
      name
    }
  }
`;

const GET_ORDERS = gql`
  query GetOrders   {
    getOrders {
      value {
          carrier
          createdAt
          shippingCost
          trackingId
          Address
          City
          Lat
          Lng
          trackingItems {
               customer_id
               customer {
                    email
                    name
               }
               items {
                    item_id
                    name
                    price
                    quantity
               }
          }
      }
    }
  }
`;