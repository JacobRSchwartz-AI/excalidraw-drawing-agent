import { gql } from "@apollo/client";

export const GET_ALL_AGENTS = gql`
  query Query {
    getAllAgents {
      id
      name
      description
      capabilities {
        name
        id
      }
    }
  }
`;
