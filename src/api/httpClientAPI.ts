import RequestMethod from '@/enums/RequestMethod';
import axios, { AxiosResponse } from 'axios';

export function send<T>(
  method: RequestMethod,
  url: string,
  data?: string | null,
  headers?: HeadersInit,
): Promise<T> {

  return axios(
    {
      url,
      method,
      data,
      headers,
    },
  )
    .then(({ data }) => data)
    .catch((error) => {
      return Promise.reject(error.response);
    });
}

export function get<T>(
  url: string,
  data: string | null,
  headers?: HeadersInit,
): Promise<T> {
  return send(RequestMethod.GET, url, data, headers);
}

export function post<T>(
  url: string,
  data: string | null,
  headers?: HeadersInit,
): Promise<T> {
  return send(RequestMethod.POST, url, data, headers);
}

export function put<T>(
  url: string,
  data: string | null,
  headers?: HeadersInit,
): Promise<T> {
  return send(RequestMethod.PUT, url, data, headers);
}
