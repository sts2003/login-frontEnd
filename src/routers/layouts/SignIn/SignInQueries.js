import { gql } from "apollo-boost";

export const GET_USER_FOR_LOGIN = gql`
  query getUserForLogin($userId: String!, $userPassword: String!) {
    getUserForLogin(userId: $userId, userPassword: $userPassword) {
      loginResult
      userData {
        _id
      }
    }
  }
`;
