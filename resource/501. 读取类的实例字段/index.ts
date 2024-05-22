class A {
  a: number = 1;
  b: string = 'a';
}

type AFields = keyof InstanceType<typeof A>; // "a" | "b"

const a: AFields = '';
