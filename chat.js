const messages = [];

function addMessage(message) {
  messages.push(message);
}

module.exports = { messages, addMessage };

function listMessages() {
  return [...messages];
}

module.exports.listMessages = listMessages;
