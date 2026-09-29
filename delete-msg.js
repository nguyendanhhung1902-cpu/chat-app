const { messages } = require('./chat');

function deleteMessage(index) {
  if (index < 0 || index >= messages.length) return null;
  return messages.splice(index, 1)[0];
}

module.exports = { deleteMessage };
