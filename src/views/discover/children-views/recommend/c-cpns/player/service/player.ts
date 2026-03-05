import hyRequest from '@/service'

export function getSongDetail(ids: number | string) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

