import { get, post } from "@/utils/request"

export function getSearchAll(params) {
  return get({
    url: "/webinterface/search/all",
    params,
  })
}