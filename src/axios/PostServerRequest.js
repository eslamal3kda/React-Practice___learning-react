import { AxiosConfig } from "./axiosConfig";

export async function PostServerRequest(url, data) {
    const res = await AxiosConfig.post(url, data);
    return res;
}
