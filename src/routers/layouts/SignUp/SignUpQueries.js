import { gql } from "apollo-boost";

// export const GET_USER_BY_USERID = gql`
//   query getUserByUserId($userId: String!) {
//     getUserByUserId(userId: $userId) {
//       result
//       userData {
//         _id
//       }
//     }
//   }
// `;

export const CREATE_USER = gql`
  mutation createUser(
    $userId: String!
    $userPassword: String!
    $name: String!
    $mobile: String!
    $email: String!
    $zoneCode: String!
    $address: String!
    $detailAddress: String!
  ) {
    createUser(
      userId: $userId
      userPassword: $userPassword
      name: $name
      mobile: $mobile
      email: $email
      zoneCode: $zoneCode
      address: $address
      detailAddress: $detailAddress
    )
  }
`;

export const GET_USER_BY_USERID = gql`
  query getUserByUserId($userId: String!) {
    getUserByUserId(userId: $userId)
  }
`;
