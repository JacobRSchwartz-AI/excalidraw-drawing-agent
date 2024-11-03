import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agent: ResolverTypeWrapper<Agent>;
  AgentInput: AgentInput;
  AgentReasoning: ResolverTypeWrapper<AgentReasoning>;
  AgentReasoningInput: AgentReasoningInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Capability: ResolverTypeWrapper<Capability>;
  CapabilityInput: CapabilityInput;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionInput: CollectionInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Model: ResolverTypeWrapper<Model>;
  Mutation: ResolverTypeWrapper<{}>;
  Prediction: ResolverTypeWrapper<Prediction>;
  PredictionType: PredictionType;
  Prompt: ResolverTypeWrapper<Prompt>;
  PromptInput: PromptInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Voice: ResolverTypeWrapper<Voice>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agent: Agent;
  AgentInput: AgentInput;
  AgentReasoning: AgentReasoning;
  AgentReasoningInput: AgentReasoningInput;
  Boolean: Scalars['Boolean']['output'];
  Capability: Capability;
  CapabilityInput: CapabilityInput;
  Collection: Collection;
  CollectionInput: CollectionInput;
  ID: Scalars['ID']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  Model: Model;
  Mutation: {};
  Prediction: Prediction;
  Prompt: Prompt;
  PromptInput: PromptInput;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  Voice: Voice;
};

export type AgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  capabilities?: Resolver<Array<ResolversTypes['Capability']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logicalCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  memoryEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outputFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reasoning?: Resolver<Maybe<ResolversTypes['AgentReasoning']>, ParentType, ContextType>;
  subscriptionFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentReasoningResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentReasoning'] = ResolversParentTypes['AgentReasoning']> = {
  llmModel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prompt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variablePassThrough?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CapabilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Capability'] = ResolversParentTypes['Capability']> = {
  alias?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  llmModel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logicalCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outputFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outputMode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prompts?: Resolver<Array<ResolversTypes['Prompt']>, ParentType, ContextType>;
  subscriptionFilter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addMediaAsset?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddMediaAssetArgs, 'fileName' | 'fileType'>>;
  addPrediction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationAddPredictionArgs, 'agentId' | 'subscriptionId'>>;
  deleteAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationDeleteAgentArgs, 'agentId'>>;
  deleteCapability?: Resolver<Maybe<ResolversTypes['Capability']>, ParentType, ContextType, RequireFields<MutationDeleteCapabilityArgs, 'capabilityId'>>;
  deleteCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'collectionId'>>;
  deletePrompt?: Resolver<Maybe<ResolversTypes['Prompt']>, ParentType, ContextType, RequireFields<MutationDeletePromptArgs, 'promptId'>>;
  generateAudio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationGenerateAudioArgs, 'text' | 'voice'>>;
  upsertAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<MutationUpsertAgentArgs, 'agent'>>;
  upsertCapability?: Resolver<Maybe<ResolversTypes['Capability']>, ParentType, ContextType, RequireFields<MutationUpsertCapabilityArgs, 'capability'>>;
  upsertCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationUpsertCollectionArgs, 'input'>>;
  upsertPrompt?: Resolver<Maybe<ResolversTypes['Prompt']>, ParentType, ContextType, RequireFields<MutationUpsertPromptArgs, 'prompt'>>;
};

export type PredictionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prediction'] = ResolversParentTypes['Prediction']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PromptResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prompt'] = ResolversParentTypes['Prompt']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logicalCollection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<QueryGetAgentArgs, 'agentId'>>;
  getAgentWithPrompts?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RequireFields<QueryGetAgentWithPromptsArgs, 'agentId'>>;
  getAllAgents?: Resolver<Array<ResolversTypes['Agent']>, ParentType, ContextType, Partial<QueryGetAllAgentsArgs>>;
  getAllAudioVoices?: Resolver<Array<ResolversTypes['Voice']>, ParentType, ContextType>;
  getAllCapabilities?: Resolver<Array<ResolversTypes['Capability']>, ParentType, ContextType, Partial<QueryGetAllCapabilitiesArgs>>;
  getAllCollections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  getAllModels?: Resolver<Array<ResolversTypes['Model']>, ParentType, ContextType>;
  getAllPrompts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Prompt']>>>, ParentType, ContextType, Partial<QueryGetAllPromptsArgs>>;
  getCapability?: Resolver<Maybe<ResolversTypes['Capability']>, ParentType, ContextType, RequireFields<QueryGetCapabilityArgs, 'capabilityId'>>;
  getCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryGetCollectionArgs, 'collectionId'>>;
  getPrompt?: Resolver<Maybe<ResolversTypes['Prompt']>, ParentType, ContextType, RequireFields<QueryGetPromptArgs, 'promptId'>>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  predictionAdded?: SubscriptionResolver<Maybe<ResolversTypes['Prediction']>, "predictionAdded", ParentType, ContextType, RequireFields<SubscriptionPredictionAddedArgs, 'subscriptionId'>>;
};

export type VoiceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Voice'] = ResolversParentTypes['Voice']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Agent?: AgentResolvers<ContextType>;
  AgentReasoning?: AgentReasoningResolvers<ContextType>;
  Capability?: CapabilityResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  JSONObject?: GraphQLScalarType;
  Model?: ModelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Prediction?: PredictionResolvers<ContextType>;
  Prompt?: PromptResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Voice?: VoiceResolvers<ContextType>;
};

