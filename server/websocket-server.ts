import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";

const app = express();
app.use(cors());

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`WebSocket Server running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });

interface ClientMessage {
  name: string;
  surname: string;
  income: number;
  outcome: number;
}

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (data) => {
    console.log("Received:", data.toString());

    try {
      const message: ClientMessage = JSON.parse(data.toString());
      const balance = Number(message.income) - Number(message.outcome);
      const response = `Dear client ${message.name} ${message.surname}, your balance is: ${balance}`;

      ws.send(response);
    } catch (error) {
      console.error("Invalid message format", error);
      ws.send(
        "Invalid message format. Please send JSON with name, surname, income, and outcome."
      );
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
