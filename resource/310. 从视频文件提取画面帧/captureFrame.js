function drawVideo(vdo) {
  return new Promise((resolve) => {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    cvs.width = vdo.videoWidth;
    cvs.height = vdo.videoHeight;
    ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
    cvs.toBlob((blob) => {
      resolve({
        blob,
        url: URL.createObjectURL(blob),
      });
    });
  });
}

export function captureFrame(vdoFile, time = 0) {
  return new Promise((resolve) => {
    const vdo = document.createElement('video');
    vdo.currentTime = time;
    vdo.muted = true;
    vdo.autoplay = true;
    vdo.oncanplay = async () => {
      const frame = await drawVideo(vdo);
      resolve(frame);
    };
    vdo.src = URL.createObjectURL(vdoFile);
  });
}
