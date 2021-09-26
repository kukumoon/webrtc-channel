import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answer = {
  __typename?: 'Answer';
  answer?: Maybe<RtcSessionDescription>;
  channel: Channel;
  from: Participant;
  to: Participant;
};

export type Candidate = {
  __typename?: 'Candidate';
  candidate?: Maybe<RtcIceCandidate>;
  channel: Channel;
  from: Participant;
  to: Participant;
};

export type Channel = {
  __typename?: 'Channel';
  id: Scalars['String'];
};

export type ChannelInput = {
  id: Scalars['String'];
};

export type ChannelWithParticipant = {
  __typename?: 'ChannelWithParticipant';
  id: Scalars['String'];
  participant: Participant;
};

export type Mutation = {
  __typename?: 'Mutation';
  answer: Scalars['Boolean'];
  candidate: Scalars['Boolean'];
  link: Channel;
  offer: Scalars['Boolean'];
};


export type MutationAnswerArgs = {
  answer: TransferRtcSessionDescriptionInput;
  channel: ChannelInput;
  from: ParticipantInput;
  to: ParticipantInput;
};


export type MutationCandidateArgs = {
  candidate: TransferRtcIceCandidateInput;
  channel: ChannelInput;
  from: ParticipantInput;
  to: ParticipantInput;
};


export type MutationLinkArgs = {
  channel: ChannelInput;
  participant: ParticipantInput;
};


export type MutationOfferArgs = {
  channel: ChannelInput;
  from: ParticipantInput;
  offer: TransferRtcSessionDescriptionInput;
  to: ParticipantInput;
};

export type Offer = {
  __typename?: 'Offer';
  channel: Channel;
  from: Participant;
  offer?: Maybe<RtcSessionDescription>;
  to: Participant;
};

export type Participant = {
  __typename?: 'Participant';
  id: Scalars['String'];
};

export type ParticipantInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  default?: Maybe<Scalars['String']>;
};

export type RtcIceCandidate = {
  __typename?: 'RTCIceCandidate';
  candidate?: Maybe<Scalars['String']>;
  component?: Maybe<RtcIceComponent>;
  foundation?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  protocol?: Maybe<RtcIceProtocol>;
  relatedAddress?: Maybe<Scalars['String']>;
  relatedPort?: Maybe<Scalars['Int']>;
  sdpMLineIndex?: Maybe<Scalars['Int']>;
  sdpMid?: Maybe<Scalars['String']>;
  tcpType?: Maybe<RtcIceTcpCandidate>;
  type?: Maybe<RtcIceCandidateType>;
  usernameFragment?: Maybe<Scalars['String']>;
};

export enum RtcIceCandidateType {
  Host = 'host',
  Prflx = 'prflx',
  Relay = 'relay',
  Srflx = 'srflx'
}

export enum RtcIceComponent {
  Rtcp = 'rtcp',
  Rtp = 'rtp'
}

export enum RtcIceProtocol {
  Tcp = 'tcp',
  Udp = 'udp'
}

export enum RtcIceTcpCandidate {
  Active = 'active',
  Passive = 'passive',
  So = 'so'
}

export enum RtcSdp {
  Answer = 'answer',
  Offer = 'offer',
  Pranswer = 'pranswer',
  Rollback = 'rollback'
}

export type RtcSessionDescription = {
  __typename?: 'RTCSessionDescription';
  sdp?: Maybe<Scalars['String']>;
  type?: Maybe<RtcSdp>;
};

export type Subscription = {
  __typename?: 'Subscription';
  answered: Answer;
  candidated: Candidate;
  linked: ChannelWithParticipant;
  offered: Offer;
};


export type SubscriptionAnsweredArgs = {
  channel: ChannelInput;
};


export type SubscriptionCandidatedArgs = {
  channel: ChannelInput;
};


export type SubscriptionLinkedArgs = {
  channel: ChannelInput;
};


export type SubscriptionOfferedArgs = {
  channel: ChannelInput;
};

export type TransferRtcIceCandidateInput = {
  candidate?: Maybe<Scalars['String']>;
  component?: Maybe<RtcIceComponent>;
  foundation?: Maybe<Scalars['String']>;
  port?: Maybe<Scalars['Int']>;
  priority?: Maybe<Scalars['Int']>;
  protocol?: Maybe<RtcIceProtocol>;
  relatedAddress?: Maybe<Scalars['String']>;
  relatedPort?: Maybe<Scalars['Int']>;
  sdpMLineIndex?: Maybe<Scalars['Int']>;
  sdpMid?: Maybe<Scalars['String']>;
  tcpType?: Maybe<RtcIceTcpCandidate>;
  type?: Maybe<RtcIceCandidateType>;
  usernameFragment?: Maybe<Scalars['String']>;
};

export type TransferRtcSessionDescriptionInput = {
  sdp?: Maybe<Scalars['String']>;
  type?: Maybe<RtcSdp>;
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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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
  Answer: ResolverTypeWrapper<Answer>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Candidate: ResolverTypeWrapper<Candidate>;
  Channel: ResolverTypeWrapper<Channel>;
  ChannelInput: ChannelInput;
  ChannelWithParticipant: ResolverTypeWrapper<ChannelWithParticipant>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Offer: ResolverTypeWrapper<Offer>;
  Participant: ResolverTypeWrapper<Participant>;
  ParticipantInput: ParticipantInput;
  Query: ResolverTypeWrapper<{}>;
  RTCIceCandidate: ResolverTypeWrapper<RtcIceCandidate>;
  RTCIceCandidateType: RtcIceCandidateType;
  RTCIceComponent: RtcIceComponent;
  RTCIceProtocol: RtcIceProtocol;
  RTCIceTcpCandidate: RtcIceTcpCandidate;
  RTCSdp: RtcSdp;
  RTCSessionDescription: ResolverTypeWrapper<RtcSessionDescription>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferRTCIceCandidateInput: TransferRtcIceCandidateInput;
  TransferRTCSessionDescriptionInput: TransferRtcSessionDescriptionInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Answer: Answer;
  Boolean: Scalars['Boolean'];
  Candidate: Candidate;
  Channel: Channel;
  ChannelInput: ChannelInput;
  ChannelWithParticipant: ChannelWithParticipant;
  Int: Scalars['Int'];
  Mutation: {};
  Offer: Offer;
  Participant: Participant;
  ParticipantInput: ParticipantInput;
  Query: {};
  RTCIceCandidate: RtcIceCandidate;
  RTCSessionDescription: RtcSessionDescription;
  String: Scalars['String'];
  Subscription: {};
  TransferRTCIceCandidateInput: TransferRtcIceCandidateInput;
  TransferRTCSessionDescriptionInput: TransferRtcSessionDescriptionInput;
};

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = {
  answer?: Resolver<Maybe<ResolversTypes['RTCSessionDescription']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = {
  candidate?: Resolver<Maybe<ResolversTypes['RTCIceCandidate']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelWithParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelWithParticipant'] = ResolversParentTypes['ChannelWithParticipant']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participant?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  answer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationAnswerArgs, 'answer' | 'channel' | 'from' | 'to'>>;
  candidate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationCandidateArgs, 'candidate' | 'channel' | 'from' | 'to'>>;
  link?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, RequireFields<MutationLinkArgs, 'channel' | 'participant'>>;
  offer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationOfferArgs, 'channel' | 'from' | 'offer' | 'to'>>;
};

export type OfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = {
  channel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  offer?: Resolver<Maybe<ResolversTypes['RTCSessionDescription']>, ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Participant'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParticipantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Participant'] = ResolversParentTypes['Participant']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  default?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type RtcIceCandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RTCIceCandidate'] = ResolversParentTypes['RTCIceCandidate']> = {
  candidate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  component?: Resolver<Maybe<ResolversTypes['RTCIceComponent']>, ParentType, ContextType>;
  foundation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  port?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priority?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  protocol?: Resolver<Maybe<ResolversTypes['RTCIceProtocol']>, ParentType, ContextType>;
  relatedAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relatedPort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sdpMLineIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sdpMid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tcpType?: Resolver<Maybe<ResolversTypes['RTCIceTcpCandidate']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RTCIceCandidateType']>, ParentType, ContextType>;
  usernameFragment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RtcSessionDescriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['RTCSessionDescription'] = ResolversParentTypes['RTCSessionDescription']> = {
  sdp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RTCSdp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  answered?: SubscriptionResolver<ResolversTypes['Answer'], "answered", ParentType, ContextType, RequireFields<SubscriptionAnsweredArgs, 'channel'>>;
  candidated?: SubscriptionResolver<ResolversTypes['Candidate'], "candidated", ParentType, ContextType, RequireFields<SubscriptionCandidatedArgs, 'channel'>>;
  linked?: SubscriptionResolver<ResolversTypes['ChannelWithParticipant'], "linked", ParentType, ContextType, RequireFields<SubscriptionLinkedArgs, 'channel'>>;
  offered?: SubscriptionResolver<ResolversTypes['Offer'], "offered", ParentType, ContextType, RequireFields<SubscriptionOfferedArgs, 'channel'>>;
};

export type Resolvers<ContextType = any> = {
  Answer?: AnswerResolvers<ContextType>;
  Candidate?: CandidateResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  ChannelWithParticipant?: ChannelWithParticipantResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  Participant?: ParticipantResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RTCIceCandidate?: RtcIceCandidateResolvers<ContextType>;
  RTCSessionDescription?: RtcSessionDescriptionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

