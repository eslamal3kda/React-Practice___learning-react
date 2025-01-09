import { AxiosConfig } from "./axiosConfig";

export async function DeleteServerRequest(url) {
    const res = AxiosConfig.delete(url);
    return res;
}
