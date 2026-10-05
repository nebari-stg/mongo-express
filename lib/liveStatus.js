import WebSocket from 'ws';

// Pushes a heartbeat so the UI can show whether the server is reachable.
export function attachLiveStatus(server) {
  const wss = new WebSocket.Server({ server, path: '/live-status' });
  wss.on('connection', (socket) => {
    socket.send(JSON.stringify({ status: 'ok', at: Date.now() }));
  });
  return wss;
}
