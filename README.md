# web-rtc-app

- npm start

### WebSocket

WebSocket Connection Open, Send Message, onClose

- STEP1 - Create Socket Connection

  `new WebSocket(ws://localhost:9000)`

  - Creating a WebSocket Object/Conncetion

- STEP2 - webSocket.current.onmessage -

  - Parse the incoming message and update the UI

- STEP3 - webSocket.current.send

  - Send message other Peer

- STEP4 - websocket.current.onclose
  - Close connection

Refercence - https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications

### RTCPeerConnection

1. Create RTCPeerConnection

``
const configuration = {
iceServers: [{ url: "stun:stun.1.google.com:19302" }],
};
new RTCPeerConnection(configuration)

``
Reference - https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection

2. RTCPeerConnection==> onicecandidate

The majority of icecandidate events are fired to indicate that a new candidate has been gathered. This candidate needs to be delivered to the remote peer over the signaling channel your code manages.

The RTCPeerConnection interface represents a WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it's no longer needed.

3. RTCSessionDescription

The RTCSessionDescription interface describes one end of a connection—or potential connection—and how it's configured. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.
The process of negotiating a connection between two peers involves exchanging RTCSessionDescription

Reference: https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription
