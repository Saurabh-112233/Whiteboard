const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();
const server = require("http").Server(app);

const peerServer = ExpressPeerServer(server, {
  path: "/peerjs",
  corsOptions: {
    origin: "*", // Allow all origins (or set a specific domain)
  },
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("PeerJS Server is running.");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PeerJS Server running on port ${PORT}`);
});