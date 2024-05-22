const channel = new BroadcastChannel('sync-update');

/**
 *
 * @param {"add-imp" | "update-imp"} type
 * @param {any} msg
 */
export function sendMsg(type, msg) {
  channel.postMessage({
    type,
    msg,
  });
}

export function listenMsg(callback) {
  const handler = (e) => {
    callback && callback(e.data);
  };
  channel.addEventListener('message', handler);
  return () => {
    channel.removeEventListener('message', handler);
  };
}
