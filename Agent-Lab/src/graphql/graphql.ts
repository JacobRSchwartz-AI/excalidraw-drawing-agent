/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSONObject: { input: any; output: any; }
};

export type AgentInput = {
  capabilities: Array<InputMaybe<Scalars['String']['input']>>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  logicalCollection: Scalars['String']['input'];
  memoryEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  outputFilter?: InputMaybe<Scalars['String']['input']>;
  reasoning?: InputMaybe<AgentReasoningInput>;
  subscriptionFilter?: InputMaybe<Scalars['String']['input']>;
};

export type AgentReasoningInput = {
  llmModel: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  variablePassThrough: Scalars['Boolean']['input'];
};

export type CapabilityInput = {
  alias: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  llmModel?: InputMaybe<Scalars['String']['input']>;
  logicalCollection: Scalars['String']['input'];
  name: Scalars['String']['input'];
  outputFilter?: InputMaybe<Scalars['String']['input']>;
  outputMode?: InputMaybe<Scalars['String']['input']>;
  prompts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subscriptionFilter?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export enum PredictionType {
  Data = 'DATA',
  Error = 'ERROR',
  Received = 'RECEIVED',
  Success = 'SUCCESS'
}

export type PromptInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  logicalCollection: Scalars['String']['input'];
  name: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export enum Role {
  Admin = 'admin',
  Default = 'default',
  Member = 'member'
}

export type GenerateAudioMutationVariables = Exact<{
  voice: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type GenerateAudioMutation = { __typename?: 'Mutation', generateAudio?: string | null };

export type AddPredictionMutationVariables = Exact<{
  subscriptionId: Scalars['ID']['input'];
  agentId: Scalars['ID']['input'];
  variables?: InputMaybe<Scalars['JSONObject']['input']>;
  attachments?: InputMaybe<Array<Scalars['JSONObject']['input']> | Scalars['JSONObject']['input']>;
}>;


export type AddPredictionMutation = { __typename?: 'Mutation', addPrediction?: string | null };

export type UpsertAgentMutationVariables = Exact<{
  agent: AgentInput;
}>;


export type UpsertAgentMutation = { __typename?: 'Mutation', upsertAgent?: { __typename?: 'Agent', id: string, name: string, description: string, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', id: string }> } | null };

export type DeleteAgentMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type DeleteAgentMutation = { __typename?: 'Mutation', deleteAgent?: { __typename?: 'Agent', id: string } | null };

export type UpsertCapabilityMutationVariables = Exact<{
  capability: CapabilityInput;
}>;


export type UpsertCapabilityMutation = { __typename?: 'Mutation', upsertCapability?: { __typename?: 'Capability', id: string, name: string, alias: string, description: string, llmModel: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', id: string, name: string, text: string }> } | null };

export type DeleteCapabilityMutationVariables = Exact<{
  capabilityId: Scalars['ID']['input'];
}>;


export type DeleteCapabilityMutation = { __typename?: 'Mutation', deleteCapability?: { __typename?: 'Capability', id: string } | null };

export type UpsertPromptMutationVariables = Exact<{
  prompt: PromptInput;
}>;


export type UpsertPromptMutation = { __typename?: 'Mutation', upsertPrompt?: { __typename?: 'Prompt', id: string, name: string, text: string } | null };

export type DeletePromptMutationVariables = Exact<{
  promptId: Scalars['ID']['input'];
}>;


export type DeletePromptMutation = { __typename?: 'Mutation', deletePrompt?: { __typename?: 'Prompt', id: string } | null };

export type UpsertCollectionMutationVariables = Exact<{
  input: CollectionInput;
}>;


export type UpsertCollectionMutation = { __typename?: 'Mutation', upsertCollection?: { __typename?: 'Collection', id: string, name: string } | null };

export type DeleteCollectionMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
}>;


export type DeleteCollectionMutation = { __typename?: 'Mutation', deleteCollection?: { __typename?: 'Collection', id: string } | null };

export type GetAllModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllModelsQuery = { __typename?: 'Query', getAllModels: Array<{ __typename?: 'Model', id: string, name: string }> };

export type GetAgentWithPromptsQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type GetAgentWithPromptsQuery = { __typename?: 'Query', getAgentWithPrompts?: { __typename?: 'Agent', id: string, name: string, description: string, memoryEnabled: boolean, subscriptionFilter?: string | null, outputFilter?: string | null, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', name: string, id: string, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> }> } | null };

export type GetAllAgentsQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllAgentsQuery = { __typename?: 'Query', getAllAgents: Array<{ __typename?: 'Agent', id: string, name: string, description: string, capabilities: Array<{ __typename?: 'Capability', name: string, id: string }> }> };

export type GetAgentQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type GetAgentQuery = { __typename?: 'Query', getAgent?: { __typename?: 'Agent', id: string, name: string, description: string, memoryEnabled: boolean, subscriptionFilter?: string | null, outputFilter?: string | null, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', name: string, id: string }> } | null };

export type GetAllCapabilitiesQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCapabilitiesQuery = { __typename?: 'Query', getAllCapabilities: Array<{ __typename?: 'Capability', id: string, alias: string, name: string, llmModel: string, description: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> }> };

export type GetCapabilityQueryVariables = Exact<{
  capabilityId: Scalars['ID']['input'];
}>;


export type GetCapabilityQuery = { __typename?: 'Query', getCapability?: { __typename?: 'Capability', id: string, llmModel: string, alias: string, name: string, description: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> } | null };

export type GetAllPromptsQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPromptsQuery = { __typename?: 'Query', getAllPrompts?: Array<{ __typename?: 'Prompt', id: string, name: string, text: string } | null> | null };

export type GetPromptQueryVariables = Exact<{
  promptId: Scalars['ID']['input'];
}>;


export type GetPromptQuery = { __typename?: 'Query', getPrompt?: { __typename?: 'Prompt', id: string, name: string, text: string } | null };

export type GetAllAudioVoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAudioVoicesQuery = { __typename?: 'Query', getAllAudioVoices: Array<{ __typename?: 'Voice', id: string, name: string }> };

export type GetAllCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCollectionsQuery = { __typename?: 'Query', getAllCollections: Array<{ __typename?: 'Collection', id: string, name: string }> };

export type PredictionAddedSubscriptionVariables = Exact<{
  subscriptionId: Scalars['ID']['input'];
}>;


export type PredictionAddedSubscription = { __typename?: 'Subscription', predictionAdded?: { __typename?: 'Prediction', id: string, subscriptionId: string, result?: string | null, type: string } | null };


export const GenerateAudioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateAudio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"voice"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateAudio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"voice"},"value":{"kind":"Variable","name":{"kind":"Name","value":"voice"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}]}}]} as unknown as DocumentNode<GenerateAudioMutation, GenerateAudioMutationVariables>;
export const AddPredictionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrediction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"variables"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSONObject"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPrediction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"variables"},"value":{"kind":"Variable","name":{"kind":"Name","value":"variables"}}},{"kind":"Argument","name":{"kind":"Name","value":"attachments"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attachments"}}}]}]}}]} as unknown as DocumentNode<AddPredictionMutation, AddPredictionMutationVariables>;
export const UpsertAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agent"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reasoning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"variablePassThrough"}}]}},{"kind":"Field","name":{"kind":"Name","value":"capabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertAgentMutation, UpsertAgentMutationVariables>;
export const DeleteAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteAgentMutation, DeleteAgentMutationVariables>;
export const UpsertCapabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertCapability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capability"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CapabilityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCapability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"capability"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capability"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"outputMode"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionFilter"}},{"kind":"Field","name":{"kind":"Name","value":"outputFilter"}},{"kind":"Field","name":{"kind":"Name","value":"prompts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<UpsertCapabilityMutation, UpsertCapabilityMutationVariables>;
export const DeleteCapabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCapability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capabilityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCapability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"capabilityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capabilityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCapabilityMutation, DeleteCapabilityMutationVariables>;
export const UpsertPromptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertPrompt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PromptInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertPrompt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prompt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<UpsertPromptMutation, UpsertPromptMutationVariables>;
export const DeletePromptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePrompt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"promptId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePrompt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"promptId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"promptId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeletePromptMutation, DeletePromptMutationVariables>;
export const UpsertCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpsertCollectionMutation, UpsertCollectionMutationVariables>;
export const DeleteCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const GetAllModelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllModelsQuery, GetAllModelsQueryVariables>;
export const GetAgentWithPromptsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAgentWithPrompts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgentWithPrompts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reasoning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"variablePassThrough"}}]}},{"kind":"Field","name":{"kind":"Name","value":"capabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"memoryEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionFilter"}},{"kind":"Field","name":{"kind":"Name","value":"outputFilter"}}]}}]}}]} as unknown as DocumentNode<GetAgentWithPromptsQuery, GetAgentWithPromptsQueryVariables>;
export const GetAllAgentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAgents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllAgents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"logicalCollection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"capabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllAgentsQuery, GetAllAgentsQueryVariables>;
export const GetAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"agentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"agentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"reasoning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"variablePassThrough"}}]}},{"kind":"Field","name":{"kind":"Name","value":"capabilities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"memoryEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionFilter"}},{"kind":"Field","name":{"kind":"Name","value":"outputFilter"}}]}}]}}]} as unknown as DocumentNode<GetAgentQuery, GetAgentQueryVariables>;
export const GetAllCapabilitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCapabilities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCapabilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"logicalCollection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"outputMode"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionFilter"}},{"kind":"Field","name":{"kind":"Name","value":"outputFilter"}}]}}]}}]} as unknown as DocumentNode<GetAllCapabilitiesQuery, GetAllCapabilitiesQueryVariables>;
export const GetCapabilityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCapability"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"capabilityId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCapability"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"capabilityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"capabilityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"llmModel"}},{"kind":"Field","name":{"kind":"Name","value":"prompts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"outputMode"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionFilter"}},{"kind":"Field","name":{"kind":"Name","value":"outputFilter"}}]}}]}}]} as unknown as DocumentNode<GetCapabilityQuery, GetCapabilityQueryVariables>;
export const GetAllPromptsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPrompts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPrompts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"logicalCollection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"logicalCollection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetAllPromptsQuery, GetAllPromptsQueryVariables>;
export const GetPromptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPrompt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"promptId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPrompt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"promptId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"promptId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetPromptQuery, GetPromptQueryVariables>;
export const GetAllAudioVoicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAudioVoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllAudioVoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllAudioVoicesQuery, GetAllAudioVoicesQueryVariables>;
export const GetAllCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCollections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllCollectionsQuery, GetAllCollectionsQueryVariables>;
export const PredictionAddedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"predictionAdded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"predictionAdded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"subscriptionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"subscriptionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"subscriptionId"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<PredictionAddedSubscription, PredictionAddedSubscriptionVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSONObject: { input: any; output: any; }
};

export type Agent = {
  __typename?: 'Agent';
  capabilities: Array<Capability>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logicalCollection: Collection;
  memoryEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  outputFilter?: Maybe<Scalars['String']['output']>;
  reasoning?: Maybe<AgentReasoning>;
  subscriptionFilter?: Maybe<Scalars['String']['output']>;
};

export type AgentInput = {
  capabilities: Array<InputMaybe<Scalars['String']['input']>>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  logicalCollection: Scalars['String']['input'];
  memoryEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  outputFilter?: InputMaybe<Scalars['String']['input']>;
  reasoning?: InputMaybe<AgentReasoningInput>;
  subscriptionFilter?: InputMaybe<Scalars['String']['input']>;
};

export type AgentReasoning = {
  __typename?: 'AgentReasoning';
  llmModel: Scalars['String']['output'];
  prompt: Scalars['String']['output'];
  variablePassThrough: Scalars['Boolean']['output'];
};

export type AgentReasoningInput = {
  llmModel: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  variablePassThrough: Scalars['Boolean']['input'];
};

export type Capability = {
  __typename?: 'Capability';
  alias: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  llmModel: Scalars['String']['output'];
  logicalCollection: Collection;
  name: Scalars['String']['output'];
  outputFilter?: Maybe<Scalars['String']['output']>;
  outputMode: Scalars['String']['output'];
  prompts: Array<Prompt>;
  subscriptionFilter?: Maybe<Scalars['String']['output']>;
};

export type CapabilityInput = {
  alias: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  llmModel?: InputMaybe<Scalars['String']['input']>;
  logicalCollection: Scalars['String']['input'];
  name: Scalars['String']['input'];
  outputFilter?: InputMaybe<Scalars['String']['input']>;
  outputMode?: InputMaybe<Scalars['String']['input']>;
  prompts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subscriptionFilter?: InputMaybe<Scalars['String']['input']>;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CollectionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Model = {
  __typename?: 'Model';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMediaAsset?: Maybe<Scalars['String']['output']>;
  addPrediction?: Maybe<Scalars['String']['output']>;
  deleteAgent?: Maybe<Agent>;
  deleteCapability?: Maybe<Capability>;
  deleteCollection?: Maybe<Collection>;
  deletePrompt?: Maybe<Prompt>;
  generateAudio?: Maybe<Scalars['String']['output']>;
  upsertAgent?: Maybe<Agent>;
  upsertCapability?: Maybe<Capability>;
  upsertCollection?: Maybe<Collection>;
  upsertPrompt?: Maybe<Prompt>;
};


export type MutationAddMediaAssetArgs = {
  fileName: Scalars['String']['input'];
  fileType: Scalars['String']['input'];
};


export type MutationAddPredictionArgs = {
  agentId: Scalars['ID']['input'];
  attachments?: InputMaybe<Array<Scalars['JSONObject']['input']>>;
  subscriptionId: Scalars['ID']['input'];
  variables?: InputMaybe<Scalars['JSONObject']['input']>;
};


export type MutationDeleteAgentArgs = {
  agentId: Scalars['ID']['input'];
};


export type MutationDeleteCapabilityArgs = {
  capabilityId: Scalars['ID']['input'];
};


export type MutationDeleteCollectionArgs = {
  collectionId: Scalars['ID']['input'];
};


export type MutationDeletePromptArgs = {
  promptId: Scalars['ID']['input'];
};


export type MutationGenerateAudioArgs = {
  text: Scalars['String']['input'];
  voice: Scalars['String']['input'];
};


export type MutationUpsertAgentArgs = {
  agent: AgentInput;
};


export type MutationUpsertCapabilityArgs = {
  capability: CapabilityInput;
};


export type MutationUpsertCollectionArgs = {
  input: CollectionInput;
};


export type MutationUpsertPromptArgs = {
  prompt: PromptInput;
};

export type Prediction = {
  __typename?: 'Prediction';
  id: Scalars['ID']['output'];
  result?: Maybe<Scalars['String']['output']>;
  subscriptionId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export enum PredictionType {
  Data = 'DATA',
  Error = 'ERROR',
  Received = 'RECEIVED',
  Success = 'SUCCESS'
}

export type Prompt = {
  __typename?: 'Prompt';
  id: Scalars['ID']['output'];
  logicalCollection: Collection;
  name: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type PromptInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  logicalCollection: Scalars['String']['input'];
  name: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAgent?: Maybe<Agent>;
  getAgentWithPrompts?: Maybe<Agent>;
  getAllAgents: Array<Agent>;
  getAllAudioVoices: Array<Voice>;
  getAllCapabilities: Array<Capability>;
  getAllCollections: Array<Collection>;
  getAllModels: Array<Model>;
  getAllPrompts?: Maybe<Array<Maybe<Prompt>>>;
  getCapability?: Maybe<Capability>;
  getCollection?: Maybe<Collection>;
  getPrompt?: Maybe<Prompt>;
};


export type QueryGetAgentArgs = {
  agentId: Scalars['ID']['input'];
};


export type QueryGetAgentWithPromptsArgs = {
  agentId: Scalars['ID']['input'];
};


export type QueryGetAllAgentsArgs = {
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllCapabilitiesArgs = {
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAllPromptsArgs = {
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCapabilityArgs = {
  capabilityId: Scalars['ID']['input'];
};


export type QueryGetCollectionArgs = {
  collectionId: Scalars['ID']['input'];
};


export type QueryGetPromptArgs = {
  promptId: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'admin',
  Default = 'default',
  Member = 'member'
}

export type Subscription = {
  __typename?: 'Subscription';
  predictionAdded?: Maybe<Prediction>;
};


export type SubscriptionPredictionAddedArgs = {
  subscriptionId: Scalars['ID']['input'];
};

export type Voice = {
  __typename?: 'Voice';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GenerateAudioMutationVariables = Exact<{
  voice: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type GenerateAudioMutation = { __typename?: 'Mutation', generateAudio?: string | null };

export type AddPredictionMutationVariables = Exact<{
  subscriptionId: Scalars['ID']['input'];
  agentId: Scalars['ID']['input'];
  variables?: InputMaybe<Scalars['JSONObject']['input']>;
  attachments?: InputMaybe<Array<Scalars['JSONObject']['input']> | Scalars['JSONObject']['input']>;
}>;


export type AddPredictionMutation = { __typename?: 'Mutation', addPrediction?: string | null };

export type UpsertAgentMutationVariables = Exact<{
  agent: AgentInput;
}>;


export type UpsertAgentMutation = { __typename?: 'Mutation', upsertAgent?: { __typename?: 'Agent', id: string, name: string, description: string, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', id: string }> } | null };

export type DeleteAgentMutationVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type DeleteAgentMutation = { __typename?: 'Mutation', deleteAgent?: { __typename?: 'Agent', id: string } | null };

export type UpsertCapabilityMutationVariables = Exact<{
  capability: CapabilityInput;
}>;


export type UpsertCapabilityMutation = { __typename?: 'Mutation', upsertCapability?: { __typename?: 'Capability', id: string, name: string, alias: string, description: string, llmModel: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', id: string, name: string, text: string }> } | null };

export type DeleteCapabilityMutationVariables = Exact<{
  capabilityId: Scalars['ID']['input'];
}>;


export type DeleteCapabilityMutation = { __typename?: 'Mutation', deleteCapability?: { __typename?: 'Capability', id: string } | null };

export type UpsertPromptMutationVariables = Exact<{
  prompt: PromptInput;
}>;


export type UpsertPromptMutation = { __typename?: 'Mutation', upsertPrompt?: { __typename?: 'Prompt', id: string, name: string, text: string } | null };

export type DeletePromptMutationVariables = Exact<{
  promptId: Scalars['ID']['input'];
}>;


export type DeletePromptMutation = { __typename?: 'Mutation', deletePrompt?: { __typename?: 'Prompt', id: string } | null };

export type UpsertCollectionMutationVariables = Exact<{
  input: CollectionInput;
}>;


export type UpsertCollectionMutation = { __typename?: 'Mutation', upsertCollection?: { __typename?: 'Collection', id: string, name: string } | null };

export type DeleteCollectionMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
}>;


export type DeleteCollectionMutation = { __typename?: 'Mutation', deleteCollection?: { __typename?: 'Collection', id: string } | null };

export type GetAllModelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllModelsQuery = { __typename?: 'Query', getAllModels: Array<{ __typename?: 'Model', id: string, name: string }> };

export type GetAgentWithPromptsQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type GetAgentWithPromptsQuery = { __typename?: 'Query', getAgentWithPrompts?: { __typename?: 'Agent', id: string, name: string, description: string, memoryEnabled: boolean, subscriptionFilter?: string | null, outputFilter?: string | null, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', name: string, id: string, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> }> } | null };

export type GetAllAgentsQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllAgentsQuery = { __typename?: 'Query', getAllAgents: Array<{ __typename?: 'Agent', id: string, name: string, description: string, capabilities: Array<{ __typename?: 'Capability', name: string, id: string }> }> };

export type GetAgentQueryVariables = Exact<{
  agentId: Scalars['ID']['input'];
}>;


export type GetAgentQuery = { __typename?: 'Query', getAgent?: { __typename?: 'Agent', id: string, name: string, description: string, memoryEnabled: boolean, subscriptionFilter?: string | null, outputFilter?: string | null, reasoning?: { __typename?: 'AgentReasoning', llmModel: string, prompt: string, variablePassThrough: boolean } | null, capabilities: Array<{ __typename?: 'Capability', name: string, id: string }> } | null };

export type GetAllCapabilitiesQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllCapabilitiesQuery = { __typename?: 'Query', getAllCapabilities: Array<{ __typename?: 'Capability', id: string, alias: string, name: string, llmModel: string, description: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> }> };

export type GetCapabilityQueryVariables = Exact<{
  capabilityId: Scalars['ID']['input'];
}>;


export type GetCapabilityQuery = { __typename?: 'Query', getCapability?: { __typename?: 'Capability', id: string, llmModel: string, alias: string, name: string, description: string, outputMode: string, subscriptionFilter?: string | null, outputFilter?: string | null, prompts: Array<{ __typename?: 'Prompt', name: string, id: string, text: string }> } | null };

export type GetAllPromptsQueryVariables = Exact<{
  logicalCollection?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllPromptsQuery = { __typename?: 'Query', getAllPrompts?: Array<{ __typename?: 'Prompt', id: string, name: string, text: string } | null> | null };

export type GetPromptQueryVariables = Exact<{
  promptId: Scalars['ID']['input'];
}>;


export type GetPromptQuery = { __typename?: 'Query', getPrompt?: { __typename?: 'Prompt', id: string, name: string, text: string } | null };

export type GetAllAudioVoicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAudioVoicesQuery = { __typename?: 'Query', getAllAudioVoices: Array<{ __typename?: 'Voice', id: string, name: string }> };

export type GetAllCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCollectionsQuery = { __typename?: 'Query', getAllCollections: Array<{ __typename?: 'Collection', id: string, name: string }> };

export type PredictionAddedSubscriptionVariables = Exact<{
  subscriptionId: Scalars['ID']['input'];
}>;


export type PredictionAddedSubscription = { __typename?: 'Subscription', predictionAdded?: { __typename?: 'Prediction', id: string, subscriptionId: string, result?: string | null, type: string } | null };
