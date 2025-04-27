let socket: WebSocket | null = null;

export const connectWebSocket = (
  onMessageReceived: (message: string) => void
) => {
  socket = new WebSocket("ws://localhost:3001");

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event: MessageEvent) => {
    console.log("Received from server:", event.data);
    onMessageReceived(event.data);
  };

  socket.onerror = (error: Event) => {
    console.error("WebSocket Error:", error);
  };

  socket.onclose = () => {
    console.log("WebSocket closed");
  };
};

export const sendMessage = (message: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  }
};
