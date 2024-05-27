import type { AxiosError, AxiosResponse } from "axios";

export const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;
export const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) console.error(error);
  return Promise.reject(error.response || error);
};
