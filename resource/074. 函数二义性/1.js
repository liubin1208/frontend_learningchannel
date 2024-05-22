function a() {
  if (new.target) {
    throw new Error("can't invoke with 'new'");
  }
}
a();
new a();
