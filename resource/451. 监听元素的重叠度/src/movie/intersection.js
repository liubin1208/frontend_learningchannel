const ob = new IntersectionObserver(
  async (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      return;
    }
    if (isLoading) {
      return;
    }
    isLoading = true;
    await more();
    isLoading = false;
  },
  {
    root: null,
    threshold: 0,
  }
);

const loading = document.querySelector('.loading');
ob.observe(loading);
