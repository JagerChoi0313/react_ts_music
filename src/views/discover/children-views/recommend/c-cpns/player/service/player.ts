import hyRequest from '@/service'

export function getSongDetail(ids: number | string) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongUrl(id: number | string) {
  return hyRequest.get({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function getSongLyric(id: number | string) {
  return hyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
