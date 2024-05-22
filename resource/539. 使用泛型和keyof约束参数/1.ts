const user = {
  name: 'xiaomuzhu',
  age: 20,
  location: 'hz',
};

function handler<T>(obj: T, propName: keyof T) {}

handler(user, 'namesdfsdf');
