const obj = {};
const state = new Proxy(obj, {
  set() {},
});
state.a = 1; // [[SET]]
obj.a; // [[GET]]
obj.b = 3; // [[SET]]
'c' in obj; // [[HAS]]
delete obj.b; // [[DELETE]]
// [[ownKeys]]
for (const key in obj) {
}
