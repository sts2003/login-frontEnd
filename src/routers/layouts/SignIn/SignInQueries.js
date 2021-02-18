import { gql } from "apollo-boost";

export const GET_USER_FOR_LOGIN = gql`
  mutation getUserForLogin($userId: String!, $userPassword: String!) {
    getUserForLogin(userId: $userId, userPassword: $userPassword) {
      loginResult
      userData
    }
  }
`;

export const GET_COOKIES = gql`
  query getCookie($cookieToken: String!) {
    getCookie(cookieToken: $cookieToken) {
      _id
      userId
      userPassword
    }
  }
`;
