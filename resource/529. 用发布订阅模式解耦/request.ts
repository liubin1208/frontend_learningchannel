import axios, { AxiosResponse } from 'axios';
import eventEmitter from './eventEmitter';
const ins = axios.create({
  baseURL: 'http://localhost:3000',
});

const successHandler = (res: AxiosResponse): any => {
  // 略
};

const errorHandler = (error: any): any => {
  if (error.response.status === 401) {
    eventEmitter.emit('API:UN_AUTH');
  } else if (error.response.status === 400) {
    eventEmitter.emit('API:VALIDATE_ERROR', error.response.data);
  }
};

ins.interceptors.response.use(successHandler, errorHandler);
