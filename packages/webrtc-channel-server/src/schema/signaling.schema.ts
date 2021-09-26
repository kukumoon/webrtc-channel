import { gql } from 'apollo-server-express';

export const signalingSchema = gql`
  
  """SDP Offer对象"""
  type Offer {
    """Offer送往的信令通道"""
    channel: Channel!
    """Offer的发送方"""
    from: Participant!
    """Offer的接收方"""
    to: Participant!
    """RTCSessionDescription 详情请查阅MDN"""
    offer: RTCSessionDescription
  }

  """SDP Answer对象"""
  type Answer {
    """Answer送往的信令通道"""
    channel: Channel!
    """Answer的发送方"""
    from: Participant!
    """Answer的接收方"""
    to: Participant!
    """RTCSessionDescription 详情请查阅MDN"""
    answer: RTCSessionDescription
  }

  """IceCandidate对象，通过交换P2P双方的该对象，从而完成一次通信的建立"""
  type Candidate {
    """Candidate送往的信令通道"""
    channel: Channel!
    """Candidate的发送方"""
    from: Participant!
    """Candidate的接收方"""
    to: Participant!
    """RTCIceCandidate 详情请查阅MDN"""
    candidate: RTCIceCandidate
  }

  type RTCSessionDescription {
    sdp: String
    type: RTCSdp
  }

  type RTCIceCandidate {
    candidate: String
    component: RTCIceComponent
    foundation: String
    port: Int
    priority: Int
    protocol: RTCIceProtocol
    relatedAddress: String
    relatedPort: Int
    sdpMLineIndex: Int
    sdpMid: String
    tcpType: RTCIceTcpCandidate
    type: RTCIceCandidateType
    usernameFragment: String
  }

  enum RTCSdp {
    answer
    offer
    pranswer
    rollback
  }

  enum RTCIceComponent {
    rtcp
    rtp
  }

  enum RTCIceProtocol {
    tcp
    udp
  }

  enum RTCIceTcpCandidate {
    active
    passive
    so
  }

  enum RTCIceCandidateType{
    host
    prflx
    relay
    srflx
  }

  input TransferRTCSessionDescriptionInput {
    sdp: String
    type:RTCSdp
  }

  input TransferRTCIceCandidateInput {
    candidate: String
    component: RTCIceComponent
    foundation: String
    port: Int
    priority: Int
    protocol: RTCIceProtocol
    relatedAddress: String
    relatedPort: Int
    sdpMLineIndex: Int
    sdpMid: String
    tcpType: RTCIceTcpCandidate
    type: RTCIceCandidateType
    usernameFragment: String
  }
`;
