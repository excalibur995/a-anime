import { URL } from "@/models/constants";
import axios from "axios";
import { onResponseError, onResponseSuccess } from "./config/response_interceptor";

const api = axios.create({
  baseURL: URL.BASE_URL,
  timeout: 60 * 1000,
});

api.interceptors.response.use(onResponseSuccess, onResponseError);

export default api;
