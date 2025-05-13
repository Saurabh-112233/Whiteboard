const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");

const app = express();
app.use(cors()); // ✅ Allow all origins by default

const server = require("http").Server(app);

const peerServer = ExpressPeerServer(server, {
  path: "/",
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
  res.send("PeerJS Server is running.");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`PeerJS Server running on port ${PORT}`);
});
