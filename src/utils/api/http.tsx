import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const { CancelToken } = axios;

export const BASE_URL = process.env.REACT_APP_YOUTUBE_BASE_URL;

export const instance = axios.create({
  headers: { 'content-type': 'application/json' },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: AxiosError) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error),
);

export const HTTP = {
  get: <ResponseType,>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url, options),
};
