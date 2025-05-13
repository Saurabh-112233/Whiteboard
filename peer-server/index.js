// index.js
const { PeerServer } = require("peer");

// Initialize the PeerJS server
const peerServer = PeerServer({
  host: "0.0.0.0", // Bind to all interfaces
  port: 10000, // You can use any port
  path: "/peerjs", // Path for the PeerJS service
  secure: process.env.NODE_ENV === "production", // Use secure WebSocket (wss) in production
});

console.log("PeerJS server is running on port 10000");
