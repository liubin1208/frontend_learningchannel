import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';

// 获取url中被.分割的两部分
function useUrlParts(url) {
  const parts = computed(() => {
    const _url = url.value;
    const i = _url.lastIndexOf('.');
    if (i < 0) {
      return [_url, ''];
    }
    return [_url.substring(0, i), _url.substring(i)];
  });
  return {
    parts,
  };
}

function useSortedArray(arr) {
  const sorted = computed(() => {
    const sortedArray = [...arr.value];
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  });
  return {
    sorted,
  };
}

const cvs = document.createElement('canvas');
cvs.width = 1000;
cvs.height = 1;
const OnePixelPng = cvs.toDataURL();
console.log(OnePixelPng);

export function useUrl(styleWidth, originUrl, imgSet) {
  const { dpr } = useDPR();
  const { parts } = useUrlParts(originUrl);
  const { sorted: sortedSet } = useSortedArray(imgSet);

  const url = computed(() => {
    const _width = styleWidth.value;
    if (_width === 0) {
      return OnePixelPng;
    }
    const _dpr = dpr.value;
    const _parts = parts.value;
    const _imgSet = sortedSet.value;
    const width = Math.ceil(_width * _dpr);
    const pre = _parts[0],
      suffix = _parts[1];
    let w = width;
    if (_imgSet.length !== 0) {
      for (let i = 0; i < _imgSet.length; i++) {
        if (width <= _imgSet[i] || i === _imgSet.length - 1) {
          w = _imgSet[i];
          break;
        }
      }
    }
    return `${pre}@${w}${suffix}`;
  });
  return {
    url,
  };
}

export function useDPR() {
  const dpr = ref(window.devicePixelRatio);
  const observer = new ResizeObserver(() => {
    dpr.value = window.devicePixelRatio;
  });
  observer.observe(document.documentElement);
  onUnmounted(() => {
    observer.unobserve(document.documentElement);
  });
  return {
    dpr,
  };
}

export function useWidth(imgRef) {
  const width = ref(0);
  const observer = new ResizeObserver(() => {
    width.value = imgRef.value.width;
  });
  let img = null;
  watchEffect(() => {
    const _img = imgRef.value;
    if (_img) {
      img = _img;
      observer.observe(img);
    } else if (img) {
      observer.unobserve(img);
    }
  });
  return { width };
}
