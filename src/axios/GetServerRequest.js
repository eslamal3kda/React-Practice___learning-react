import { AxiosConfig } from "./axiosConfig"


export async function GetServerRequest(path,page,limit) {
    const res = await AxiosConfig.get(path , {params:{_page:page ,_limit:limit}} )
  return res
}
