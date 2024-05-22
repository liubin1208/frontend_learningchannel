function createId(name) {
  const key = `channel-${name}`;
  let id = +localStorage.getItem(key);
  if (!id) {
    id = 0;
  }
  id++;
  localStorage.setItem(key, id.toString());
  return id;
}

function sendMsg(msg, channel) {
  channel.postMessage({
    id: channel.id,
    msg,
  });
}

function createChannel(name) {
  const channel = new BroadcastChannel(name);
  channel.id = createId(name);
  channel.listeners = new Set();
  sendMsg('嘿', channel);
  window.addEventListener('unload', () => {
    sendMsg('哦豁', channel);
  });
  channel.addEventListener('message', (e) => {
    if (e.data.msg === '嘿') {
      sendMsg('哈', channel);
      channel.listeners.add(e.data.id);
    } else if (e.data.msg === '哈') {
      channel.listeners.add(e.data.id);
    } else if (e.data.msg === '哦豁') {
      channel.listeners.delete(e.data.id);
    }
  });
  return channel;
}
