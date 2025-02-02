/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation generateAudio($voice: String!, $text: String!) {\n    generateAudio(voice: $voice, text: $text)\n  }\n": types.GenerateAudioDocument,
    "\n  mutation addPrediction($subscriptionId: ID!, $agentId: ID!, $variables: JSONObject, $attachments: [JSONObject!]) {\n    addPrediction(subscriptionId: $subscriptionId, agentId: $agentId, variables: $variables, attachments: $attachments)\n  }\n": types.AddPredictionDocument,
    "\n  mutation upsertAgent($agent: AgentInput!) {\n    upsertAgent(agent: $agent) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        id\n      }\n    }\n  }\n": types.UpsertAgentDocument,
    "\n  mutation deleteAgent($agentId: ID!) {\n    deleteAgent(agentId: $agentId) {\n      id\n    }\n  }\n": types.DeleteAgentDocument,
    "\n  mutation upsertCapability($capability: CapabilityInput!) {\n    upsertCapability(capability: $capability) {\n      id\n      name\n      alias\n      description\n      llmModel\n      outputMode\n      subscriptionFilter\n      outputFilter\n      prompts {\n        id\n        name\n        text\n      }\n    }\n  }\n": types.UpsertCapabilityDocument,
    "\n  mutation deleteCapability($capabilityId: ID!) {\n    deleteCapability(capabilityId: $capabilityId) {\n      id\n    }\n  }\n": types.DeleteCapabilityDocument,
    "\n  mutation upsertPrompt($prompt: PromptInput!) {\n    upsertPrompt(prompt: $prompt) {\n      id\n      name\n      text\n    }\n  }\n": types.UpsertPromptDocument,
    "\n  mutation deletePrompt($promptId: ID!) {\n    deletePrompt(promptId: $promptId) {\n      id\n    }\n  }\n": types.DeletePromptDocument,
    "\n  mutation upsertCollection($input: CollectionInput!) {\n    upsertCollection(input: $input) {\n      id\n      name\n    }\n  }\n": types.UpsertCollectionDocument,
    "\n  mutation deleteCollection($collectionId: ID!) {\n    deleteCollection(collectionId: $collectionId) {\n      id\n    }\n  }\n": types.DeleteCollectionDocument,
    "\n  query getAllModels {\n    getAllModels {\n      id\n      name\n    }\n  }\n": types.GetAllModelsDocument,
    "\n  query getAgentWithPrompts($agentId: ID!) {\n    getAgentWithPrompts(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n        prompts {\n          name\n          id\n          text\n        }\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n": types.GetAgentWithPromptsDocument,
    "\n  query getAllAgents($logicalCollection: String) {\n    getAllAgents(logicalCollection: $logicalCollection) {\n      id\n      name\n      description\n      capabilities {\n        name\n        id\n      }\n    }\n  }\n": types.GetAllAgentsDocument,
    "\n  query getAgent($agentId: ID!) {\n    getAgent(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n": types.GetAgentDocument,
    "\n  query getAllCapabilities($logicalCollection: String) {\n    getAllCapabilities(logicalCollection: $logicalCollection) {\n      id\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      llmModel\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n": types.GetAllCapabilitiesDocument,
    "\n  query getCapability($capabilityId: ID!) {\n    getCapability(capabilityId: $capabilityId) {\n      id\n      llmModel\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n": types.GetCapabilityDocument,
    "\n  query getAllPrompts($logicalCollection: String) {\n    getAllPrompts(logicalCollection: $logicalCollection) {\n      id\n      name\n      text\n    }\n  }\n": types.GetAllPromptsDocument,
    "\n  query getPrompt($promptId: ID!) {\n    getPrompt(promptId: $promptId) {\n      id\n      name\n      text\n    }\n  }\n": types.GetPromptDocument,
    "\n  query getAllAudioVoices {\n    getAllAudioVoices {\n      id\n      name\n    }\n  }\n": types.GetAllAudioVoicesDocument,
    "\n  query getAllCollections {\n    getAllCollections {\n      id\n      name\n    }\n  }\n": types.GetAllCollectionsDocument,
    "\n  subscription predictionAdded($subscriptionId: ID!) {\n    predictionAdded(subscriptionId: $subscriptionId) {\n      id\n      subscriptionId\n      result\n      type\n    }\n  }\n": types.PredictionAddedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation generateAudio($voice: String!, $text: String!) {\n    generateAudio(voice: $voice, text: $text)\n  }\n"): (typeof documents)["\n  mutation generateAudio($voice: String!, $text: String!) {\n    generateAudio(voice: $voice, text: $text)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addPrediction($subscriptionId: ID!, $agentId: ID!, $variables: JSONObject, $attachments: [JSONObject!]) {\n    addPrediction(subscriptionId: $subscriptionId, agentId: $agentId, variables: $variables, attachments: $attachments)\n  }\n"): (typeof documents)["\n  mutation addPrediction($subscriptionId: ID!, $agentId: ID!, $variables: JSONObject, $attachments: [JSONObject!]) {\n    addPrediction(subscriptionId: $subscriptionId, agentId: $agentId, variables: $variables, attachments: $attachments)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation upsertAgent($agent: AgentInput!) {\n    upsertAgent(agent: $agent) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation upsertAgent($agent: AgentInput!) {\n    upsertAgent(agent: $agent) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteAgent($agentId: ID!) {\n    deleteAgent(agentId: $agentId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteAgent($agentId: ID!) {\n    deleteAgent(agentId: $agentId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation upsertCapability($capability: CapabilityInput!) {\n    upsertCapability(capability: $capability) {\n      id\n      name\n      alias\n      description\n      llmModel\n      outputMode\n      subscriptionFilter\n      outputFilter\n      prompts {\n        id\n        name\n        text\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation upsertCapability($capability: CapabilityInput!) {\n    upsertCapability(capability: $capability) {\n      id\n      name\n      alias\n      description\n      llmModel\n      outputMode\n      subscriptionFilter\n      outputFilter\n      prompts {\n        id\n        name\n        text\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteCapability($capabilityId: ID!) {\n    deleteCapability(capabilityId: $capabilityId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteCapability($capabilityId: ID!) {\n    deleteCapability(capabilityId: $capabilityId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation upsertPrompt($prompt: PromptInput!) {\n    upsertPrompt(prompt: $prompt) {\n      id\n      name\n      text\n    }\n  }\n"): (typeof documents)["\n  mutation upsertPrompt($prompt: PromptInput!) {\n    upsertPrompt(prompt: $prompt) {\n      id\n      name\n      text\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deletePrompt($promptId: ID!) {\n    deletePrompt(promptId: $promptId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deletePrompt($promptId: ID!) {\n    deletePrompt(promptId: $promptId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation upsertCollection($input: CollectionInput!) {\n    upsertCollection(input: $input) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation upsertCollection($input: CollectionInput!) {\n    upsertCollection(input: $input) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteCollection($collectionId: ID!) {\n    deleteCollection(collectionId: $collectionId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteCollection($collectionId: ID!) {\n    deleteCollection(collectionId: $collectionId) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllModels {\n    getAllModels {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getAllModels {\n    getAllModels {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAgentWithPrompts($agentId: ID!) {\n    getAgentWithPrompts(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n        prompts {\n          name\n          id\n          text\n        }\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"): (typeof documents)["\n  query getAgentWithPrompts($agentId: ID!) {\n    getAgentWithPrompts(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n        prompts {\n          name\n          id\n          text\n        }\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllAgents($logicalCollection: String) {\n    getAllAgents(logicalCollection: $logicalCollection) {\n      id\n      name\n      description\n      capabilities {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllAgents($logicalCollection: String) {\n    getAllAgents(logicalCollection: $logicalCollection) {\n      id\n      name\n      description\n      capabilities {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAgent($agentId: ID!) {\n    getAgent(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"): (typeof documents)["\n  query getAgent($agentId: ID!) {\n    getAgent(agentId: $agentId) {\n      id\n      name\n      description\n      reasoning {\n        llmModel\n        prompt\n        variablePassThrough\n      }\n      capabilities {\n        name\n        id\n      }\n      memoryEnabled\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllCapabilities($logicalCollection: String) {\n    getAllCapabilities(logicalCollection: $logicalCollection) {\n      id\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      llmModel\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"): (typeof documents)["\n  query getAllCapabilities($logicalCollection: String) {\n    getAllCapabilities(logicalCollection: $logicalCollection) {\n      id\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      llmModel\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCapability($capabilityId: ID!) {\n    getCapability(capabilityId: $capabilityId) {\n      id\n      llmModel\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"): (typeof documents)["\n  query getCapability($capabilityId: ID!) {\n    getCapability(capabilityId: $capabilityId) {\n      id\n      llmModel\n      prompts {\n        name\n        id\n        text\n      }\n      alias\n      name\n      description\n      outputMode\n      subscriptionFilter\n      outputFilter\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllPrompts($logicalCollection: String) {\n    getAllPrompts(logicalCollection: $logicalCollection) {\n      id\n      name\n      text\n    }\n  }\n"): (typeof documents)["\n  query getAllPrompts($logicalCollection: String) {\n    getAllPrompts(logicalCollection: $logicalCollection) {\n      id\n      name\n      text\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPrompt($promptId: ID!) {\n    getPrompt(promptId: $promptId) {\n      id\n      name\n      text\n    }\n  }\n"): (typeof documents)["\n  query getPrompt($promptId: ID!) {\n    getPrompt(promptId: $promptId) {\n      id\n      name\n      text\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllAudioVoices {\n    getAllAudioVoices {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getAllAudioVoices {\n    getAllAudioVoices {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllCollections {\n    getAllCollections {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getAllCollections {\n    getAllCollections {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription predictionAdded($subscriptionId: ID!) {\n    predictionAdded(subscriptionId: $subscriptionId) {\n      id\n      subscriptionId\n      result\n      type\n    }\n  }\n"): (typeof documents)["\n  subscription predictionAdded($subscriptionId: ID!) {\n    predictionAdded(subscriptionId: $subscriptionId) {\n      id\n      subscriptionId\n      result\n      type\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;