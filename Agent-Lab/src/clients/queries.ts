import { gql } from '@apollo/client';

export const GET_ALL_MODELS = gql`
  query getAllModels {
    getAllModels {
      id
      name
    }
  }
`;

export const GET_AGENT_WITH_PROMPTS = gql`
  query getAgentWithPrompts($agentId: ID!) {
    getAgentWithPrompts(agentId: $agentId) {
      id
      name
      description
      reasoning {
        llmModel
        prompt
        variablePassThrough
      }
      capabilities {
        name
        id
        prompts {
          name
          id
          text
        }
      }
      memoryEnabled
      subscriptionFilter
      outputFilter
    }
  }
`;

export const GET_ALL_AGENTS = gql`
  query getAllAgents($logicalCollection: String) {
    getAllAgents(logicalCollection: $logicalCollection) {
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

export const GET_AGENT = gql`
  query getAgent($agentId: ID!) {
    getAgent(agentId: $agentId) {
      id
      name
      description
      reasoning {
        llmModel
        prompt
        variablePassThrough
      }
      capabilities {
        name
        id
      }
      memoryEnabled
      subscriptionFilter
      outputFilter
    }
  }
`;

export const GET_ALL_CAPABILITIES = gql`
  query getAllCapabilities($logicalCollection: String) {
    getAllCapabilities(logicalCollection: $logicalCollection) {
      id
      prompts {
        name
        id
        text
      }
      alias
      name
      llmModel
      description
      outputMode
      subscriptionFilter
      outputFilter
    }
  }
`;

export const GET_CAPABILITY = gql`
  query getCapability($capabilityId: ID!) {
    getCapability(capabilityId: $capabilityId) {
      id
      llmModel
      prompts {
        name
        id
        text
      }
      alias
      name
      description
      outputMode
      subscriptionFilter
      outputFilter
    }
  }
`;

export const GET_ALL_PROMPTS = gql`
  query getAllPrompts($logicalCollection: String) {
    getAllPrompts(logicalCollection: $logicalCollection) {
      id
      name
      text
    }
  }
`;

export const GET_PROMPT = gql`
  query getPrompt($promptId: ID!) {
    getPrompt(promptId: $promptId) {
      id
      name
      text
    }
  }
`;

export const GET_ALL_AUDIO_VOICES = gql`
  query getAllAudioVoices {
    getAllAudioVoices {
      id
      name
    }
  }
`;

export const GET_ALL_COLLECTIONS = gql`
  query getAllCollections {
    getAllCollections {
      id
      name
    }
  }
`;
