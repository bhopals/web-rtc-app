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

NOTE ==> Please refer `Chart.js`

1. Create RTCPeerConnection

`
const configuration = {
iceServers: [{ url: "stun:stun.1.google.com:19302" }],
};
new RTCPeerConnection(configuration)

`
Reference - https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection

2. RTCPeerConnection==> onicecandidate

The majority of icecandidate events are fired to indicate that a new candidate has been gathered. This candidate needs to be delivered to the remote peer over the signaling channel your code manages.

The RTCPeerConnection interface represents a WebRTC connection between the local computer and a remote peer. It provides methods to connect to a remote peer, maintain and monitor the connection, and close the connection once it's no longer needed.

3. RTCSessionDescription

`connection .setRemoteDescription(new RTCSessionDescription(offer)) .then(() => connection.createAnswer()) .then((answer) => connection.setLocalDescription(answer))`

The RTCSessionDescription interface describes one end of a connection—or potential connection—and how it's configured. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.
The process of negotiating a connection between two peers involves exchanging RTCSessionDescription

Reference: https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription

### Steps to Run end to end (Signal Server and Web Chat App)

I. Signal Server

Note: Could not deploy Signal Server.
Therfore, You might need to clone the repo, and run it on your local. Below are the steps.

1. clone the repo [Signal Server](https://github.com/bhopals/web-rtc-singalling-server) - `git clone git@github.com:bhopals/web-rtc-singalling-server.git`

2. Run npm install - `npm install`

3. Start Signal server - `npm start`

![Signal Server](https://github.com/bhopals/web-rtc-app/blob/main/signal-server.png)

II. WebRTC App (Clients/Peers)

- Once the Signal Server is up and running, please go to deployed [WebRTC App](https://bhopals.github.io/web-rtc-app)

- Open the URL in 3 tabs, and Login using a UNIQUE Name. (Candidate/Peer Registartion)

- Once Registered, the active user list should be shown on the Left hand side. Select the respective user that you want to start chat with.

- Once connected, start sending message, you should be able to see the messages updated in the other tabs.

![RTCWeb App](https://github.com/bhopals/web-rtc-app/blob/main/chat-app.png)

For code Review, Refer the repo [Chat App](https://github.com/bhopals/web-rtc-app). The `Chart.js` is the file that has RTCPeerConnection/RTCSessionDescription details.
