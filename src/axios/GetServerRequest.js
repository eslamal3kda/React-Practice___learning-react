import { AxiosConfig } from "./axiosConfig"


export async function GetServerRequest(path) {
    const res = await AxiosConfig.get(path)
  return res
}
