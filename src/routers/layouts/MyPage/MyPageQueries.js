import { gql } from "apollo-boost";

export const GET_USER_DETAIL = gql`
  query getUserDetail($id: String!) {
    getUserDetail(id: $id) {
      _id
      userId
      name
      mobile
      email
      zoneCode
      address
      detailAddress
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $userId: String!
    $name: String!
    $mobile: String!
    $email: String!
    $zoneCode: String!
    $address: String!
    $detailAddress: String!
  ) {
    updateUser(
      id: $id
      userId: $userId
      name: $name
      mobile: $mobile
      email: $email
      zoneCode: $zoneCode
      address: $address
      detailAddress: $detailAddress
    )
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
