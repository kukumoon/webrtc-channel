import { gql } from 'apollo-server-express';

export const channelSchema = gql`

  """订阅者，订阅对应信令频道的所有消息"""
  type Participant {
    """订阅者ID"""
    id: String!
  }

  """信令频道，用户广播消息给订阅者们"""
  type Channel {
    """信令频道ID"""
    id: String!
  }

  """创建信令频道所需的参数"""
  input ChannelInput {
    """信令频道ID"""
    id: String!
  }

  """创建订阅者所需的参数"""
  input ParticipantInput {
    """订阅者ID"""
    id: String!
  }
  
  """信令频道对象，同时包含当前加入信令频道的订阅者信息"""
  type ChannelWithParticipant {
    """信令频道ID"""
    id: String!
    """当前订阅者"""
    participant: Participant!
  }

  type Query {
    default: String
  }

  type Mutation {
    """通过订阅者参数以及信令频道参数来完成一次订阅操作"""
    link(
      """信令频道参数，这里指信令频道的ID"""
      channel: ChannelInput!
      """订阅者参数，这里指订阅者的ID"""
      participant: ParticipantInput!
    ): Channel!
    """在指定信令频道中向指定的订阅者发送SDP Offer"""
    offer(
      """信令频道参数，这里包含信令频道的ID"""
      channel: ChannelInput!
      """Offer来自于谁"""
      from: ParticipantInput!
      """Offer要发送给谁"""
      to: ParticipantInput!
      """SDP Offer"""
      offer: TransferRTCSessionDescriptionInput!
    ): Boolean!
    """在指定信令频道中向指定的订阅者发送SDP Answer"""
    answer(
      """信令频道参数，这里包含信令频道的ID"""
      channel: ChannelInput!
      """Answer来自于谁"""
      from: ParticipantInput!
      """Answer要发送给谁"""
      to: ParticipantInput!
      """SDP Answer"""
      answer: TransferRTCSessionDescriptionInput!
    ): Boolean!
    """在指定信令频道中向指定的订阅者发送SDP Candidate"""
    candidate(
      """信令频道参数，这里包含信令频道的ID"""
      channel: ChannelInput!
      """Candidate来自于谁"""
      from: ParticipantInput!
      """Candidate要发送给谁"""
      to: ParticipantInput!
      """RTC Ice Candidate"""
      candidate: TransferRTCIceCandidateInput!
    ): Boolean!
  }

  type Subscription {
    """订阅指定信令频道的link mutation"""
    linked(channel: ChannelInput!): ChannelWithParticipant!
    """订阅指定信令频道的offer mutation"""
    offered(channel: ChannelInput!): Offer!
    """订阅指定信令频道的answer mutation"""
    answered(channel: ChannelInput!): Answer!
    """订阅指定信令频道的candidate mutation"""
    candidated(channel: ChannelInput!): Candidate!
  }

`;
