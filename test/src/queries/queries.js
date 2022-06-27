import { gql } from "@apollo/client";

export const FETCH_ALL = gql`
query {
  categories {
    name,
    products {
      id,
      name,
      gallery,
      prices {
        amount,
        currency {
            symbol, label
        }
      }
    }
  }
}
`;

export const FETCH_SINGLE = gql`
query {
  product(id: "ps-5") {
    name, 
    description, 
    category, 
    brand, 
    gallery,
    attributes {
      name,
      items {
        id,
        displayValue,
      }
    },
    prices {
      amount
      currency {
        symbol
      }
    }
  }
}
`;