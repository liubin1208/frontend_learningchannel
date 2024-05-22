import { createElementVNode } from 'vue';
export default {
  setup(props, { slots }) {
    const _default = slots.default();
    const _slot1 = slots.slot1();
    const _slot2 = slots.slot2({ msg: 'hello' });
    return () => {
      return createElementVNode('div', null, [
        ..._default,
        ..._slot1,
        ..._slot2,
      ]);
    };
  },
};
