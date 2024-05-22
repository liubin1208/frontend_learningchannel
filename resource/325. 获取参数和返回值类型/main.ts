import { login } from './api';

const options: Parameters<typeof login>[0] = {};

let resp: ReturnType<typeof login> | null = null;
