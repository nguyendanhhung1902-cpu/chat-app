const { addMessage } = require('./chat');

function sendMessage(message) {
  addMessage({ text: message, sentAt: new Date().toISOString() });
  return `Sent: ${message}`;
}

module.exports = { sendMessage };
