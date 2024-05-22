const CHUNK_SIZE = 1024 * 1024 * 5; // 5MB
const THREAD_COUNT = navigator.hardwareConcurrency || 4;

export function cutFile(file) {
  return new Promise((resolve) => {
    const result = [];
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
    const workerChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
    let finishCount = 0;
    for (let i = 0; i < THREAD_COUNT; i++) {
      // 创建一个新的 Worker 线程
      const worker = new Worker('./worker.js', {
        type: 'module',
      });
      // 计算每个线程的开始索引和结束索引
      const startIndex = i * workerChunkCount;
      let endIndex = startIndex + workerChunkCount;
      if (endIndex > chunkCount) {
        endIndex = chunkCount;
      }
      worker.postMessage({
        file,
        CHUNK_SIZE,
        startIndex,
        endIndex,
      });
      worker.onmessage = (e) => {
        // e.data ??
        for (let i = startIndex; i < endIndex; i++) {
          result[i] = e.data[i - startIndex];
        }
        worker.terminate();
        finishCount++;
        if (finishCount === THREAD_COUNT) {
          resolve(result);
        }
      };
    }
  });
}
