import { ApolloError } from 'apollo-server-express';
import { withFilter, PubSub } from 'graphql-subscriptions';
import {
  Answer, Candidate,
  Channel, ChannelWithParticipant, MutationAnswerArgs, MutationCandidateArgs,
  MutationLinkArgs, MutationOfferArgs, Offer,
  Participant, Resolvers, SubscriptionLinkedArgs, SubscriptionOfferedArgs,
} from '../type';
import { TOPIC } from '../constant';

const pubsub = new PubSub();

export const channelResolver: Resolvers = {
  Subscription: {
    linked: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([TOPIC.linked]),
        (
          payload: { linked: Channel },
          variables: SubscriptionLinkedArgs,
        ) => payload.linked.id === variables.channel.id,
      ),
    },
    offered: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([TOPIC.offered]),
        (
          payload: { offered: Offer },
          variables: SubscriptionOfferedArgs,
        ) => payload.offered.channel.id === variables.channel.id,
      ),
    },
    answered: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([TOPIC.answered]),
        (
          payload: { answered: Answer },
          variables: SubscriptionOfferedArgs,
        ) => payload.answered.channel.id === variables.channel.id,
      ),
    },
    candidated: {
      subscribe: withFilter(
        () => pubsub.asyncIterator([TOPIC.candidated]),
        (
          payload: { candidated: Candidate },
          variables: SubscriptionOfferedArgs,
        ) => payload.candidated.channel.id === variables.channel.id,
      ),
    },
  },
  Mutation: {
    async link(_, args: MutationLinkArgs) {
      try {
        const channel = {
          id: args.channel.id,
          participant: args.participant as Participant,
        } as ChannelWithParticipant;

        await pubsub.publish(TOPIC.linked, {
          [TOPIC.linked]: channel,
        } as { linked: ChannelWithParticipant });

        return args.channel;
      } catch (e) {
        throw new ApolloError(e.message);
      }
    },
    async offer(_, args: MutationOfferArgs) {
      await pubsub.publish(TOPIC.offered, {
        offered: args,
      } as { offered: Offer });

      return true;
    },
    async answer(_, args: MutationAnswerArgs) {
      await pubsub.publish(TOPIC.answered, {
        answered: args,
      } as { answered: Answer });

      return true;
    },
    async candidate(_, args: MutationCandidateArgs) {
      await pubsub.publish(TOPIC.candidated, {
        candidated: args,
      } as { candidated: Candidate });

      return true;
    },
  },
};
