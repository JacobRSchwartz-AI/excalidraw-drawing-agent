import { gql } from "@apollo/client";

export const ADD_VISUAL_PREDICTION = gql`
  # Increments a back-end counter and gets its resulting value
  mutation Mutation(
    $subscriptionId: ID!
    $agentId: ID!
    $variables: JSONObject
  ) {
    addPrediction(
      subscriptionId: $subscriptionId
      agentId: $agentId
      variables: $variables
    )
  }
`;

export const GENERATE_TRANSCRIPTION_CREDENTIALS = gql`
  mutation Mutation {
    generateTranscriptionStreamingCredentials {
      accessKeyId
      secretAccessKey
      sessionToken
    }
  }
`;
