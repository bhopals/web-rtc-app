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
