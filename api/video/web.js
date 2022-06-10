import { get, post } from "@/utils/request"

export function getVideoDetails(params) {
  return get({
    url: "/season/web/video_details",
    params,
  })
}