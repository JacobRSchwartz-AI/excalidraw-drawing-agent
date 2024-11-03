import { gql } from '@apollo/client';

export const GENERATE_AUDIO = gql`
  mutation generateAudio($voice: String!, $text: String!) {
    generateAudio(voice: $voice, text: $text)
  }
`;

export const ADD_PREDICTION = gql`
  mutation addPrediction($subscriptionId: ID!, $agentId: ID!, $variables: JSONObject, $attachments: [JSONObject!]) {
    addPrediction(subscriptionId: $subscriptionId, agentId: $agentId, variables: $variables, attachments: $attachments)
  }
`;

export const ADD_UPDATE_AGENT = gql`
  mutation upsertAgent($agent: AgentInput!) {
    upsertAgent(agent: $agent) {
      id
      name
      description
      reasoning {
        llmModel
        prompt
        variablePassThrough
      }
      capabilities {
        id
      }
    }
  }
`;

export const DELETE_AGENT = gql`
  mutation deleteAgent($agentId: ID!) {
    deleteAgent(agentId: $agentId) {
      id
    }
  }
`;

export const ADD_UPDATE_CAPABILITY = gql`
  mutation upsertCapability($capability: CapabilityInput!) {
    upsertCapability(capability: $capability) {
      id
      name
      alias
      description
      llmModel
      outputMode
      subscriptionFilter
      outputFilter
      prompts {
        id
        name
        text
      }
    }
  }
`;

export const DELETE_CAPABILITY = gql`
  mutation deleteCapability($capabilityId: ID!) {
    deleteCapability(capabilityId: $capabilityId) {
      id
    }
  }
`;

export const ADD_UPDATE_PROMPT = gql`
  mutation upsertPrompt($prompt: PromptInput!) {
    upsertPrompt(prompt: $prompt) {
      id
      name
      text
    }
  }
`;

export const DELETE_PROMPT = gql`
  mutation deletePrompt($promptId: ID!) {
    deletePrompt(promptId: $promptId) {
      id
    }
  }
`;

export const UPSERT_COLLECTION = gql`
  mutation upsertCollection($input: CollectionInput!) {
    upsertCollection(input: $input) {
      id
      name
    }
  }
`;

export const DELETE_COLLECTION = gql`
  mutation deleteCollection($collectionId: ID!) {
    deleteCollection(collectionId: $collectionId) {
      id
    }
  }
`;
